/**
 * SNOMED CT Editorial Guide - HRCM Service
 * Handles Hierarchical Refset Content Model data and rendering
 */

// HRCM data structure
const hrcmData = {
    templates: [],
    categories: [],
    isLoading: false
};

// HRCM Service object
const hrcmService = {
    // Initialize HRCM service
    async init() {
        console.log('🔧 Initializing HRCM service...');
        await this.loadHRCMData();
        console.log('✅ HRCM service initialized');
    },

    // Load HRCM data from external source
    async loadHRCMData() {
        try {
            hrcmData.isLoading = true;
            
            // Simulate loading HRCM data
            // In a real implementation, this would fetch from an API
            await this.simulateHRCMDataLoad();
            
            hrcmData.isLoading = false;
        } catch (error) {
            console.error('Error loading HRCM data:', error);
            hrcmData.isLoading = false;
        }
    },

    // Simulate HRCM data loading (replace with actual API call)
    async simulateHRCMDataLoad() {
        return new Promise((resolve) => {
            setTimeout(() => {
                // Sample HRCM data structure
                hrcmData.templates = [
                    {
                        id: 'clinical-finding-template',
                        name: 'Clinical Finding Template',
                        version: '1.0',
                        category: 'Clinical Finding',
                        description: 'Template for clinical findings and disorders',
                        slots: [
                            { name: 'finding-site', label: 'Finding Site', type: 'body-structure', required: true },
                            { name: 'severity', label: 'Severity', type: 'qualifier', required: false },
                            { name: 'clinical-course', label: 'Clinical Course', type: 'qualifier', required: false }
                        ]
                    },
                    {
                        id: 'procedure-template',
                        name: 'Procedure Template',
                        version: '1.0',
                        category: 'Procedure',
                        description: 'Template for clinical procedures',
                        slots: [
                            { name: 'procedure-site', label: 'Procedure Site', type: 'body-structure', required: true },
                            { name: 'method', label: 'Method', type: 'qualifier', required: false },
                            { name: 'access', label: 'Access', type: 'qualifier', required: false }
                        ]
                    }
                ];

                hrcmData.categories = [
                    'Clinical Finding',
                    'Procedure',
                    'Body Structure',
                    'Substance',
                    'Organism',
                    'Observable Entity'
                ];

                resolve();
            }, 1000);
        });
    },

    // Get all HRCM templates
    getTemplates() {
        return hrcmData.templates;
    },

    // Get templates by category
    getTemplatesByCategory(category) {
        return hrcmData.templates.filter(template => template.category === category);
    },

    // Get HRCM categories
    getCategories() {
        return hrcmData.categories;
    },

    // Check if HRCM is loading
    isLoading() {
        return hrcmData.isLoading;
    },

    // Render HRCM table for a specific section
    renderHRCMTable(sectionId) {
        if (hrcmData.isLoading) {
            return `
                <div class="flex items-center justify-center p-8">
                    <div class="loading-spinner mr-3"></div>
                    <span>Loading HRCM data...</span>
                </div>
            `;
        }

        const templates = this.getTemplates();
        if (templates.length === 0) {
            return `
                <div class="text-center p-8 text-gray-500">
                    <span class="material-icons text-4xl mb-4">data_usage</span>
                    <p>No HRCM templates available</p>
                </div>
            `;
        }

        return `
            <div class="bg-white rounded-xl shadow-sm border overflow-hidden">
                <div class="px-6 py-4 border-b border-gray-200">
                    <h3 class="text-lg font-semibold text-gray-800">HRCM Templates</h3>
                    <p class="text-sm text-gray-600 mt-1">Hierarchical Refset Content Model templates for ${sectionId}</p>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full">
                        <thead class="bg-gray-50">
                            <tr>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Template</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Version</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Slots</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            ${templates.map(template => `
                                <tr class="hover:bg-gray-50">
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm font-medium text-gray-900">${template.name}</div>
                                        <div class="text-sm text-gray-500">${template.description}</div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                            ${template.category}
                                        </span>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${template.version}</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${template.slots.length}</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <button onclick="hrcmService.viewTemplate('${template.id}')" 
                                                class="text-blue-600 hover:text-blue-900 mr-3">
                                            View
                                        </button>
                                        <button onclick="hrcmService.editTemplate('${template.id}')" 
                                                class="text-green-600 hover:text-green-900">
                                            Edit
                                        </button>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    },

    // View template details
    viewTemplate(templateId) {
        const template = hrcmData.templates.find(t => t.id === templateId);
        if (!template) {
            console.error('Template not found:', templateId);
            return;
        }

        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50';
        modal.innerHTML = `
            <div class="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white">
                <div class="mt-3">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="text-lg font-semibold text-gray-800">${template.name}</h3>
                        <button onclick="this.closest('.fixed').remove()" class="text-gray-400 hover:text-gray-600">
                            <span class="material-icons">close</span>
                        </button>
                    </div>
                    <div class="mb-4">
                        <p class="text-sm text-gray-600">${template.description}</p>
                        <div class="mt-2">
                            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                ${template.category}
                            </span>
                            <span class="ml-2 text-sm text-gray-500">Version ${template.version}</span>
                        </div>
                    </div>
                    <div class="border-t pt-4">
                        <h4 class="font-medium text-gray-800 mb-3">Template Slots</h4>
                        <div class="space-y-2">
                            ${template.slots.map(slot => `
                                <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                    <div>
                                        <div class="font-medium text-gray-800">${slot.label}</div>
                                        <div class="text-sm text-gray-600">Type: ${slot.type}</div>
                                    </div>
                                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${slot.required ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}">
                                        ${slot.required ? 'Required' : 'Optional'}
                                    </span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    },

    // Edit template (placeholder)
    editTemplate(templateId) {
        console.log('Edit template:', templateId);
        // Implement template editing functionality
        alert('Template editing functionality would be implemented here');
    },

    // Refresh HRCM data for a specific element
    refreshHRCM(elementId, sectionId) {
        console.log('Refreshing HRCM for element:', elementId, 'section:', sectionId);
        
        const element = document.getElementById(elementId);
        if (element) {
            element.innerHTML = this.renderHRCMTable(sectionId);
        }
    }
};

// Expose HRCM service globally
window.hrcmService = hrcmService;

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { hrcmService, hrcmData };
} 