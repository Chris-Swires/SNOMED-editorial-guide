// Configuration file for SNOMED CT Editorial Guide Browser
// This file should be kept secure and not committed to version control

const config = {
    // Google Gemini API Configuration
    gemini: {
        apiKey: '', // Add your Google Gemini API key here
        model: 'gemini-1.5-flash', // or 'gemini-1.5-pro' for more advanced features
        maxTokens: 2048,
        temperature: 0.7,
        topP: 0.8,
        topK: 40
    },
    
    // Application Settings
    app: {
        name: 'SNOMED CT Editorial Guide Browser',
        version: '2025-01-08',
        maxSearchResults: 20,
        searchDebounceMs: 300,
        contentSearchLimit: 10
    },
    
    // AI Assistant Settings
    ai: {
        systemPrompt: `You are an expert AI assistant specializing in SNOMED CT (Systematized Nomenclature of Medicine -- Clinical Terms). 
        
Your role is to help users understand and navigate the SNOMED CT Editorial Guide, which contains comprehensive guidelines for clinical terminology management.

Key areas of expertise:
- SNOMED CT concept modeling and structure
- Editorial guidelines and best practices
- Naming conventions and terminology standards
- Domain-specific modeling (clinical findings, procedures, body structures, etc.)
- Implementation and migration strategies
- Quality assurance and validation processes
- MRCM (Machine Readable Concept Model) and HRCM (Human Readable Concept Model)
- Attribute constraints and modeling rules
- Concept modeling best practices

Guidelines for responses:
1. Always provide accurate, evidence-based information from the SNOMED CT Editorial Guide
2. Use clear, professional language appropriate for healthcare professionals
3. When referencing specific concepts, include their SNOMED CT IDs when available
4. Suggest relevant sections of the guide for more detailed information
5. If you're unsure about something, acknowledge the limitation and suggest consulting the official documentation
6. Focus on practical, actionable guidance for SNOMED CT implementers
7. When discussing MRCM/HRCM, use the provided live MRCM data to give accurate, current information
8. Explain attribute constraints, cardinality, and grouping rules clearly
9. Provide specific examples when discussing modeling patterns

Remember: SNOMED CT is used in critical healthcare applications, so accuracy and precision are paramount.`,
        
        fallbackResponses: {
            noApiKey: "I'm currently running in local mode without AI enhancement. For the best experience, please configure the Google Gemini API key in the settings.",
            apiError: "I'm having trouble connecting to the AI service right now. Please try again later or check your internet connection.",
            rateLimit: "I'm receiving too many requests right now. Please wait a moment and try again.",
            unknown: "I'm not sure how to help with that specific question. Try asking about SNOMED CT concepts, modeling guidelines, or editorial practices."
        }
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = config;
} 