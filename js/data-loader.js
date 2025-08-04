/**
 * SNOMED CT Editorial Guide - Data Loader
 * Handles loading of markdown sections and hierarchical structure
 */

// Load hierarchical structure from hierarchy.json
async function loadMarkdownSections() {
    try {
        const response = await fetch('output/hierarchy.json');
        if (!response.ok) {
            console.warn('No hierarchical structure found, falling back to file-list.json');
            return loadFallbackSections();
        }
        const hierarchy = await response.json();
        
        // Store hierarchy for navigation
        guideData.hierarchy = hierarchy;
        
        // Flatten hierarchy into sections for compatibility while preserving structure
        function addSectionsFromHierarchy(items, parentCategory = null, level = 0) {
            items.forEach(item => {
                if (item.files) {
                    item.files.forEach(file => {
                        // Skip if section already exists
                        if (guideData.sections.some(s => s.id === file.id)) {
                            return;
                        }
                        
                        const sectionData = {
                            id: file.id,
                            title: file.title,
                            icon: 'article',
                            description: '',
                            mdFile: `output/${file.file}`,
                            category: item.title,
                            categoryId: item.id,
                            categoryPath: item.path,
                            level: level,
                            parentCategory: parentCategory
                        };
                        
                        guideData.sections.push(sectionData);
                        guideData.hierarchicalSections.push(sectionData); // Maintain hierarchical order
                    });
                }
                
                if (item.subcategories) {
                    addSectionsFromHierarchy(item.subcategories, item.title, level + 1);
                }
            });
        }
        
        addSectionsFromHierarchy(hierarchy);
        
        console.log(`Loaded ${guideData.sections.length} sections from hierarchical structure`);
        console.log('Sample sections:', guideData.sections.slice(0, 5).map(s => s.id));
    } catch (e) {
        console.error('Error loading hierarchical sections:', e);
        return loadFallbackSections();
    }
}

// Fallback to original file-list.json method
async function loadFallbackSections() {
    try {
        const response = await fetch('output/file-list.json');
        if (!response.ok) {
            console.warn('No fallback sections found');
            return;
        }
        const mdList = await response.json();
        mdList.forEach(item => {
            if (guideData.sections.some(s => s.id === item.id)) return;
            guideData.sections.push({
                id: item.id,
                title: item.title,
                icon: 'article',
                description: '',
                mdFile: `output/${item.file}`,
                category: 'Uncategorized',
                categoryId: 'uncategorized',
                level: 0
            });
        });
        console.log(`Loaded ${guideData.sections.length} sections from fallback file-list.json`);
    } catch (e) {
        console.error('Error loading fallback sections:', e);
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { loadMarkdownSections, loadFallbackSections };
} 