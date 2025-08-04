// Google Gemini API Service for SNOMED CT Editorial Guide Browser

class GeminiService {
    constructor() {
        this.apiKey = config.gemini.apiKey;
        this.baseUrl = 'https://generativelanguage.googleapis.com/v1beta/models';
        this.model = config.gemini.model;
        this.isAvailable = !!this.apiKey;
        
        // Cache for API responses to reduce costs
        this.responseCache = new Map();
        this.cacheExpiry = 30 * 60 * 1000; // 30 minutes
        
        // Rate limiting
        this.requestCount = 0;
        this.lastRequestTime = 0;
        this.rateLimitDelay = 1000; // 1 second between requests
    }

    /**
     * Check if the Gemini API is properly configured
     */
    isConfigured() {
        return this.isAvailable && this.apiKey.length > 0;
    }

    /**
     * Get cached response if available
     */
    getCachedResponse(query) {
        const cacheKey = this.generateCacheKey(query);
        const cached = this.responseCache.get(cacheKey);
        
        if (cached && Date.now() - cached.timestamp < this.cacheExpiry) {
            return cached.response;
        }
        
        return null;
    }

    /**
     * Cache a response
     */
    cacheResponse(query, response) {
        const cacheKey = this.generateCacheKey(query);
        this.responseCache.set(cacheKey, {
            response,
            timestamp: Date.now()
        });
    }

    /**
     * Generate a cache key from query
     */
    generateCacheKey(query) {
        return query.toLowerCase().trim().replace(/\s+/g, ' ');
    }

    /**
     * Rate limiting to respect API limits
     */
    async rateLimit() {
        const now = Date.now();
        const timeSinceLastRequest = now - this.lastRequestTime;
        
        if (timeSinceLastRequest < this.rateLimitDelay) {
            await new Promise(resolve => 
                setTimeout(resolve, this.rateLimitDelay - timeSinceLastRequest)
            );
        }
        
        this.lastRequestTime = Date.now();
    }

    /**
     * Generate AI response using Google Gemini
     */
    async generateResponse(userQuery, contextData = null) {
        try {
            // Check if API is configured
            if (!this.isConfigured()) {
                return {
                    success: false,
                    response: config.ai.fallbackResponses.noApiKey,
                    source: 'fallback'
                };
            }

            // Check cache first
            const cachedResponse = this.getCachedResponse(userQuery);
            if (cachedResponse) {
                return {
                    success: true,
                    response: cachedResponse,
                    source: 'cache'
                };
            }

            // Rate limiting
            await this.rateLimit();

            // Prepare the request
            const requestBody = this.prepareRequestBody(userQuery, contextData);
            
            // Make API request
            const response = await this.makeApiRequest(requestBody);
            
            if (response.success) {
                // Cache the successful response
                this.cacheResponse(userQuery, response.response);
            }
            
            return response;

        } catch (error) {
            console.error('Gemini API error:', error);
            return this.handleApiError(error);
        }
    }

    /**
     * Prepare the request body for Gemini API
     */
    prepareRequestBody(userQuery, contextData) {
        let systemPrompt = config.ai.systemPrompt;
        
        // Add context if available
        if (contextData && contextData.length > 0) {
            systemPrompt += '\n\nRelevant content from the SNOMED CT Editorial Guide:\n';
            contextData.forEach((item, index) => {
                systemPrompt += `\n${index + 1}. ${item.section.title}:\n${item.content.substring(0, 500)}...\n`;
            });
            systemPrompt += '\nUse this context to provide more specific and accurate answers.';
        }

        return {
            contents: [
                {
                    parts: [
                        {
                            text: systemPrompt
                        }
                    ],
                    role: 'user'
                },
                {
                    parts: [
                        {
                            text: userQuery
                        }
                    ],
                    role: 'model'
                }
            ],
            generationConfig: {
                temperature: config.gemini.temperature,
                topP: config.gemini.topP,
                topK: config.gemini.topK,
                maxOutputTokens: config.gemini.maxTokens,
                stopSequences: []
            },
            safetySettings: [
                {
                    category: 'HARM_CATEGORY_HARASSMENT',
                    threshold: 'BLOCK_MEDIUM_AND_ABOVE'
                },
                {
                    category: 'HARM_CATEGORY_HATE_SPEECH',
                    threshold: 'BLOCK_MEDIUM_AND_ABOVE'
                },
                {
                    category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
                    threshold: 'BLOCK_MEDIUM_AND_ABOVE'
                },
                {
                    category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
                    threshold: 'BLOCK_MEDIUM_AND_ABOVE'
                }
            ]
        };
    }

    /**
     * Make the actual API request to Google Gemini
     */
    async makeApiRequest(requestBody) {
        const url = `${this.baseUrl}/${this.model}:generateContent?key=${this.apiKey}`;
        
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            throw new Error(`API request failed: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        
        if (data.error) {
            throw new Error(`Gemini API error: ${data.error.message}`);
        }

        if (!data.candidates || data.candidates.length === 0) {
            throw new Error('No response generated from Gemini API');
        }

        const generatedText = data.candidates[0].content.parts[0].text;
        
        return {
            success: true,
            response: generatedText,
            source: 'gemini',
            usage: data.usageMetadata || null
        };
    }

    /**
     * Handle API errors and provide appropriate fallback responses
     */
    handleApiError(error) {
        console.error('Gemini API error:', error);
        
        let fallbackMessage = config.ai.fallbackResponses.unknown;
        
        if (error.message.includes('429') || error.message.includes('rate limit')) {
            fallbackMessage = config.ai.fallbackResponses.rateLimit;
        } else if (error.message.includes('401') || error.message.includes('403')) {
            fallbackMessage = config.ai.fallbackResponses.noApiKey;
        } else if (error.message.includes('network') || error.message.includes('fetch')) {
            fallbackMessage = config.ai.fallbackResponses.apiError;
        }
        
        return {
            success: false,
            response: fallbackMessage,
            source: 'fallback',
            error: error.message
        };
    }

    /**
     * Search for relevant content in the guide to provide context
     */
    async searchGuideContent(query) {
        try {
            const results = [];
            const queryWords = query.toLowerCase().split(/\s+/).filter(word => word.length > 2);
            const queryLower = query.toLowerCase();
            
            // Check if this is an MRCM/HRCM/attributes query
            const isMRCMQuery = queryLower.includes('mrcm') || 
                               queryLower.includes('hrcm') || 
                               queryLower.includes('attribute') ||
                               queryLower.includes('modeling') ||
                               queryLower.includes('constraint');
            
            // If it's an MRCM query, prioritize MRCM data
            if (isMRCMQuery && typeof mrcmService !== 'undefined') {
                const mrcmData = await this.getMRCMContext(query);
                if (mrcmData) {
                    results.push({
                        section: { title: 'MRCM Data', id: 'mrcm-data' },
                        content: mrcmData,
                        relevance: 10, // High relevance for MRCM queries
                        matches: ['mrcm', 'attribute', 'constraint'],
                        type: 'mrcm'
                    });
                }
            }
            
            // Search through sections for relevant content
            for (const section of guideData.sections.slice(0, 5)) { // Limit for performance
                try {
                    if (section.mdFile) {
                        const response = await fetch(section.mdFile);
                        if (response.ok) {
                            const content = await response.text();
                            const contentLower = content.toLowerCase();
                            
                            // Check if any query words match
                            const matches = queryWords.filter(word => 
                                contentLower.includes(word) || 
                                section.title.toLowerCase().includes(word)
                            );
                            
                            if (matches.length > 0) {
                                results.push({
                                    section,
                                    content,
                                    relevance: matches.length,
                                    matches
                                });
                            }
                        }
                    }
                } catch (error) {
                    console.warn(`Failed to search content for Gemini: ${section.id}`, error);
                }
            }
            
            return results.sort((a, b) => b.relevance - a.relevance).slice(0, 3);
        } catch (error) {
            console.error('Error searching guide content:', error);
            return [];
        }
    }

    /**
     * Get MRCM context data for specific queries
     */
    async getMRCMContext(query) {
        try {
            const queryLower = query.toLowerCase();
            
            // Determine which domain(s) to fetch based on the query
            const domainsToFetch = this.getRelevantDomains(queryLower);
            
            let mrcmContext = '';
            
            for (const domain of domainsToFetch) {
                try {
                    const hrcmData = await mrcmService.getHRCMData(domain.domainId, domain.domainName);
                    
                    if (hrcmData && hrcmData.attributes) {
                        mrcmContext += `\n\n=== MRCM Data for ${domain.domainName} (${domain.domainId}) ===\n`;
                        mrcmContext += `Source: SNOMED CT MRCM Refset 723561005\n`;
                        mrcmContext += `Total Attributes: ${hrcmData.attributes.length}\n\n`;
                        
                        // Add key attributes (limit to top 10 for context)
                        const keyAttributes = hrcmData.attributes.slice(0, 10);
                        keyAttributes.forEach(attr => {
                            mrcmContext += `• ${attr.name} (${attr.id})\n`;
                            mrcmContext += `  - Grouped: ${attr.grouped === '1' ? 'Yes' : 'No'}\n`;
                            mrcmContext += `  - Cardinality: ${attr.cardinality}\n`;
                            mrcmContext += `  - In Group Cardinality: ${attr.inGroupCardinality}\n`;
                            mrcmContext += `  - Range: ${attr.range}\n\n`;
                        });
                        
                        if (hrcmData.attributes.length > 10) {
                            mrcmContext += `... and ${hrcmData.attributes.length - 10} more attributes\n`;
                        }
                    }
                } catch (error) {
                    console.warn(`Failed to fetch MRCM data for ${domain.domainName}:`, error);
                }
            }
            
            return mrcmContext;
        } catch (error) {
            console.error('Error getting MRCM context:', error);
            return null;
        }
    }

    /**
     * Determine which domains are relevant to the query
     */
    getRelevantDomains(query) {
        const domainMappings = {
            'clinical finding': { domainId: '404684003', domainName: 'Clinical finding (finding)' },
            'clinical findings': { domainId: '404684003', domainName: 'Clinical finding (finding)' },
            'finding': { domainId: '404684003', domainName: 'Clinical finding (finding)' },
            'body structure': { domainId: '123037004', domainName: 'Body structure (body structure)' },
            'anatomy': { domainId: '123037004', domainName: 'Body structure (body structure)' },
            'procedure': { domainId: '71388002', domainName: 'Procedure (procedure)' },
            'observable': { domainId: '363787002', domainName: 'Observable entity (observable entity)' },
            'pharmaceutical': { domainId: '373873005', domainName: 'Pharmaceutical / biologic product (product)' },
            'drug': { domainId: '373873005', domainName: 'Pharmaceutical / biologic product (product)' },
            'medication': { domainId: '373873005', domainName: 'Pharmaceutical / biologic product (product)' },
            'physical object': { domainId: '260787004', domainName: 'Physical object (physical object)' },
            'situation': { domainId: '243796009', domainName: 'Situation with explicit context (situation)' },
            'specimen': { domainId: '123038009', domainName: 'Specimen (specimen)' },
            'substance': { domainId: '105590001', domainName: 'Substance (substance)' },
            'event': { domainId: '272379006', domainName: 'Event (event)' }
        };
        
        const relevantDomains = [];
        
        // Check for specific domain mentions
        for (const [key, domain] of Object.entries(domainMappings)) {
            if (query.includes(key)) {
                relevantDomains.push(domain);
            }
        }
        
        // If no specific domain mentioned, return the most common ones
        if (relevantDomains.length === 0) {
            return [
                { domainId: '404684003', domainName: 'Clinical finding (finding)' },
                { domainId: '71388002', domainName: 'Procedure (procedure)' },
                { domainId: '123037004', domainName: 'Body structure (body structure)' }
            ];
        }
        
        return relevantDomains;
    }

    /**
     * Clear the response cache
     */
    clearCache() {
        this.responseCache.clear();
        console.log('Gemini response cache cleared');
    }

    /**
     * Get cache statistics
     */
    getCacheStats() {
        return {
            size: this.responseCache.size,
            entries: Array.from(this.responseCache.entries()).map(([key, value]) => ({
                key,
                age: Date.now() - value.timestamp
            }))
        };
    }
}

// Create global instance
const geminiService = new GeminiService(); 