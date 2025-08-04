/**
 * SNOMED CT Editorial Guide - Main Application
 * Handles navigation, content rendering, and user interactions
 */

// Global application state
const guideData = {
    sections: [],
    hierarchicalSections: [],
    hierarchy: [],
    currentSection: 'landing',
    searchResults: [],
    expandedCategories: new Set()
};

// Application object with all core functionality
const app = {
    currentCollapsedSections: new Set(),
    loadedSections: new Set(), // Track which sections are currently loaded in DOM
    visibleSections: new Set(), // Track which sections are currently visible
    sectionElements: new Map(), // Map section IDs to their DOM elements
    observer: null, // Intersection Observer for scroll detection
    isLoading: false, // Prevent multiple simultaneous loads
    preloadDistance: 1000, // Distance in pixels to preload content
    
    // URL handling for direct section linking
    initializeURLHandling() {
        // Handle browser back/forward navigation
        window.addEventListener('popstate', (event) => {
            this.handleURLChange();
        });
        
        // Update URL when sections change
        this.updateURL = this.debounce(this.updateURL.bind(this), 100);
    },
    
    handleURLOnLoad() {
        const urlParams = new URLSearchParams(window.location.search);
        const sectionParam = urlParams.get('section');
        const hash = window.location.hash.replace('#', '');
        
        let targetSection = sectionParam || hash || 'landing';
        
        // Clean up the section ID (remove any extra characters)
        targetSection = targetSection.trim();
        
        console.log('🔗 URL Load Analysis:', {
            sectionParam,
            hash,
            targetSection,
            sectionsLoaded: guideData.sections.length,
            availableSections: guideData.sections.map(s => s.id).slice(0, 5)
        });
        
        // Validate section exists
        if (targetSection !== 'landing' && !guideData.sections.find(s => s.id === targetSection)) {
            console.warn(`Section "${targetSection}" not found in available sections. Available sections:`, 
                guideData.sections.map(s => s.id));
            targetSection = 'landing';
        }
        
        // Ensure sections are loaded before proceeding
        if (guideData.sections.length === 0) {
            console.log('⏳ No sections loaded yet, waiting...');
            const checkSections = () => {
                if (guideData.sections.length > 0) {
                    console.log(`✅ Sections loaded (${guideData.sections.length}), selecting: ${targetSection}`);
                    this.selectSection(targetSection);
                } else {
                    console.log('⏳ Still waiting for sections...');
                    setTimeout(checkSections, 100);
                }
            };
            checkSections();
        } else {
            console.log(`✅ Sections ready (${guideData.sections.length}), selecting: ${targetSection}`);
            this.selectSection(targetSection);
        }
    },
    
    handleURLChange() {
        const urlParams = new URLSearchParams(window.location.search);
        const sectionParam = urlParams.get('section');
        const hash = window.location.hash.replace('#', '');
        
        let targetSection = sectionParam || hash || 'landing';
        
        // Clean up the section ID
        targetSection = targetSection.trim();
        
        // Validate section exists
        if (targetSection !== 'landing' && !guideData.sections.find(s => s.id === targetSection)) {
            console.warn(`Section "${targetSection}" not found during URL change, defaulting to landing`);
            targetSection = 'landing';
        }
        
        this.selectSection(targetSection);
    },
    
    updateURL(sectionId) {
        const url = new URL(window.location);
        
        if (sectionId === 'landing') {
            url.searchParams.delete('section');
            url.hash = '';
        } else {
            url.searchParams.set('section', sectionId);
            url.hash = sectionId;
        }
        
        const newURL = url.toString();
        if (newURL !== window.location.href) {
            window.history.pushState({ section: sectionId }, '', url);
            
            // Update page title and meta description
            const section = guideData.sections.find(s => s.id === sectionId);
            if (section) {
                document.title = `${section.title} - SNOMED CT Editorial Guide`;
            } else if (sectionId === 'landing') {
                document.title = 'SNOMED CT Editorial Guide';
            }
            
            const metaDescription = document.querySelector('meta[name="description"]');
            if (metaDescription && section) {
                metaDescription.setAttribute('content',
                    `SNOMED CT Editorial Guide - ${section.title}. ${section.description || 'Comprehensive guidelines for clinical terminology management.'}`);
            }
        }
    },
    
    // Core section selection and navigation
    selectSection(sectionId) {
        guideData.currentSection = sectionId;
        guideData.searchResults = [];
        document.getElementById('searchInput').value = '';
        
        this.updateURL(sectionId); // Update URL FIRST
        this.renderSidebar();
        this.renderContent();
        this.updateActiveNavItem();
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        setTimeout(() => {
            const content = document.getElementById('content');
            content.classList.add('animate-slide-in');
            setTimeout(() => content.classList.remove('animate-slide-in'), 300);
        }, 100);
    },
    
    // Sidebar rendering and navigation
    renderSidebar() {
        const sidebar = document.getElementById('sidebar');
        if (!sidebar) return;
        
        sidebar.innerHTML = `
            <div class="p-4">
                <div class="mb-6">
                    <h3 class="text-lg font-semibold text-gray-800 mb-3">Navigation</h3>
                    <div class="space-y-2">
                        <button onclick="app.showLandingPage()" 
                                class="w-full text-left p-2 rounded hover:bg-gray-100 transition-colors flex items-center">
                            <span class="material-icons text-sm mr-2">home</span>
                            Home
                        </button>
                        <button onclick="app.showStatisticsDashboard()" 
                                class="w-full text-left p-2 rounded hover:bg-gray-100 transition-colors flex items-center">
                            <span class="material-icons text-sm mr-2">analytics</span>
                            Statistics
                        </button>
                    </div>
                </div>
                
                <div class="mb-6">
                    <h3 class="text-lg font-semibold text-gray-800 mb-3">Quick Links</h3>
                    <div class="space-y-2">
                        <button onclick="app.selectSection('snomed-ct-introduction')" 
                                class="w-full text-left p-2 rounded hover:bg-gray-100 transition-colors flex items-center">
                            <span class="material-icons text-sm mr-2">article</span>
                            Introduction
                        </button>
                        <button onclick="app.selectSection('concept-model-overview')" 
                                class="w-full text-left p-2 rounded hover:bg-gray-100 transition-colors flex items-center">
                            <span class="material-icons text-sm mr-2">schema</span>
                            Concept Model
                        </button>
                        <button onclick="app.selectSection('authoring')" 
                                class="w-full text-left p-2 rounded hover:bg-gray-100 transition-colors flex items-center">
                            <span class="material-icons text-sm mr-2">edit</span>
                            Authoring
                        </button>
                    </div>
                </div>
                
                <div class="mb-6">
                    <h3 class="text-lg font-semibold text-gray-800 mb-3">Sections</h3>
                    <div class="space-y-1">
                        ${this.renderHierarchyLevel(guideData.hierarchy)}
                    </div>
                </div>
            </div>
        `;
    },
    
    renderHierarchyLevel(items, level = 0) {
        if (!items || items.length === 0) return '';
        
        return items.map(item => {
            const hasSubcategories = item.subcategories && item.subcategories.length > 0;
            const hasFiles = item.files && item.files.length > 0;
            const isExpanded = this.isExpanded(item.id);
            
            let html = '';
            
            // Category header
            if (hasSubcategories || hasFiles) {
                html += `
                    <div class="nav-section">
                        <div class="nav-section-header ${isExpanded ? '' : 'collapsed'}" 
                             onclick="app.toggleCategory('${item.id}')">
                            <span class="flex items-center">
                                <span class="material-icons text-sm mr-2">${hasSubcategories ? 'folder' : 'article'}</span>
                                ${item.title}
                            </span>
                            <span class="material-icons text-sm transition-transform ${isExpanded ? 'rotate-90' : ''}">
                                expand_more
                            </span>
                        </div>
                        <div class="nav-items ${isExpanded ? '' : 'hidden'}" style="margin-left: ${level * 16}px;">
                `;
            }
            
            // Files in this category
            if (hasFiles) {
                item.files.forEach(file => {
                    const isActive = guideData.currentSection === file.id;
                    html += `
                        <div class="nav-item ${isActive ? 'active' : ''}" 
                             onclick="app.selectSection('${file.id}')">
                            <span class="nav-item-icon material-icons">article</span>
                            ${file.title}
                        </div>
                    `;
                });
            }
            
            // Subcategories
            if (hasSubcategories) {
                html += this.renderHierarchyLevel(item.subcategories, level + 1);
            }
            
            // Close category
            if (hasSubcategories || hasFiles) {
                html += `
                        </div>
                    </div>
                `;
            }
            
            return html;
        }).join('');
    },
    
    isExpanded(categoryId) {
        // Default all categories to collapsed
        if (!this.expandedCategories) {
            this.expandedCategories = new Set();
        }
        return this.expandedCategories.has(categoryId);
    },
    
    toggleCategory(categoryId) {
        if (!this.expandedCategories) {
            this.expandedCategories = new Set();
        }
        
        if (this.expandedCategories.has(categoryId)) {
            this.expandedCategories.delete(categoryId);
        } else {
            this.expandedCategories.add(categoryId);
        }
        
        this.renderSidebar();
    },
    
    // Content rendering
    renderContent() {
        const contentContainer = document.getElementById('content');
        if (!contentContainer) return;
        
        if (guideData.currentSection === 'landing') {
            this.showLandingPage();
            return;
        }
        
        const section = guideData.sections.find(s => s.id === guideData.currentSection);
        if (!section) {
            contentContainer.innerHTML = '<div class="p-8 text-center text-gray-500">Section not found</div>';
            return;
        }
        
        // Show loading state
        contentContainer.innerHTML = `
            <div class="flex items-center justify-center p-8">
                <div class="loading-spinner mr-3"></div>
                <span>Loading ${section.title}...</span>
            </div>
        `;
        
        // Load and render markdown content
        this.loadMarkdownContent(section.mdFile, section);
    },
    
    async loadMarkdownContent(mdFile, section) {
        try {
            const response = await fetch(mdFile);
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            
            const markdown = await response.text();
            const html = marked.parse(markdown);
            
            const contentContainer = document.getElementById('content');
            contentContainer.innerHTML = `
                <div class="content-area animate-slide-in">
                    <div class="mb-8">
                        <div class="flex items-center justify-between mb-4">
                            <h1 class="text-3xl font-bold text-gray-800">${section.title}</h1>
                            <button onclick="app.copyCurrentSectionLink()" class="flex items-center px-3 py-2 bg-green-100 hover:bg-green-200 text-green-700 rounded-lg text-sm font-medium transition-colors">
                                <span class="material-icons text-sm mr-1">link</span>Copy Link
                            </button>
                        </div>
                        <div class="flex items-center text-sm text-gray-600">
                            <span class="material-icons text-sm mr-1">article</span>
                            ${section.category}
                        </div>
                    </div>
                    
                    <div class="markdown-content prose max-w-none">
                        ${html}
                    </div>
                </div>
            `;
            
            // Process internal links
            this.processInternalLinks(contentContainer);
            
        } catch (error) {
            console.error('Error loading markdown content:', error);
            const contentContainer = document.getElementById('content');
            contentContainer.innerHTML = `
                <div class="p-8 text-center text-red-500">
                    <div class="text-xl mb-2">Error Loading Content</div>
                    <div class="text-sm">${error.message}</div>
                </div>
            `;
        }
    },
    
    processInternalLinks(container) {
        const links = container.querySelectorAll('a[href*=".html"]');
        links.forEach(link => {
            const href = link.getAttribute('href');
            if (href && href.includes('.html')) {
                // Extract section ID from href
                const sectionId = href.replace('.html', '').split('_')[0];
                const targetSection = guideData.sections.find(s => s.id === sectionId);
                
                if (targetSection) {
                    link.href = `?section=${sectionId}#${sectionId}`;
                    link.onclick = (e) => {
                        e.preventDefault();
                        this.selectSection(sectionId);
                    };
                }
            }
        });
    },
    
    // Landing page
    showLandingPage() {
        console.log('🏠 Returning to landing page');
        
        // Update URL to landing page
        this.updateURL('landing');
        
        // Scroll to top when showing landing page
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Clear content and show landing page
        const contentContainer = document.getElementById('content');
        contentContainer.innerHTML = `
            <div class="content-area animate-slide-in">
                <!-- Hero Section -->
                <div class="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-12 mb-12">
                    <div class="text-center mb-12">
                        <div class="flex items-center justify-center mb-8">
                            <div class="text-6xl mr-4">🏥</div>
                            <div>
                                <h1 class="text-4xl font-bold text-gray-800 mb-2">SNOMED CT Editorial Guide</h1>
                                <p class="text-xl text-gray-600">Comprehensive guidelines for clinical terminology management</p>
                            </div>
                        </div>
                        <p class="text-lg text-gray-700 max-w-3xl mx-auto">
                            Welcome to the interactive SNOMED CT Editorial Guide. This comprehensive resource provides 
                            detailed guidance for creating, maintaining, and implementing clinical terminology standards.
                        </p>
                    </div>
                </div>

                <!-- Tab Navigation -->
                <div class="mb-8">
                    <div class="border-b border-gray-200">
                        <nav class="flex space-x-8">
                            <button onclick="app.showLandingTab('overview')" 
                                    class="tab-button active py-2 px-1 border-b-2 border-blue-500 text-blue-600 font-medium text-sm">
                                <span class="material-icons text-sm mr-1">home</span>
                                Overview
                            </button>
                            <button onclick="app.showLandingTab('statistics')" 
                                    class="tab-button py-2 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 font-medium text-sm">
                                <span class="material-icons text-sm mr-1">analytics</span>
                                Statistics Dashboard
                            </button>
                        </nav>
                    </div>
                </div>

                <!-- Tab Content -->
                <div id="tab-content-overview" class="tab-content active">
                    <!-- Overview Content -->
                    <div class="grid md:grid-cols-2 gap-8 mb-12">
                        <div class="bg-white rounded-xl shadow-sm border p-6">
                            <div class="flex items-center mb-4">
                                <span class="material-icons text-blue-600 mr-3">book</span>
                                <h3 class="text-xl font-semibold text-gray-800">Getting Started</h3>
                            </div>
                            <p class="text-gray-600 mb-4">
                                New to SNOMED CT? Start with our comprehensive introduction and concept model overview.
                            </p>
                            <div class="space-y-2">
                                <button onclick="app.selectSection('snomed-ct-introduction')" class="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                    <div class="flex items-center">
                                        <span class="material-icons text-blue-600 mr-3">article</span>
                                        <div>
                                            <p class="font-medium text-gray-800">SNOMED CT Introduction</p>
                                            <p class="text-sm text-gray-600">Core concepts and principles</p>
                                        </div>
                                    </div>
                                </button>
                                <button onclick="app.selectSection('concept-model-overview')" class="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                    <div class="flex items-center">
                                        <span class="material-icons text-green-600 mr-3">schema</span>
                                        <div>
                                            <p class="font-medium text-gray-800">Concept Model Overview</p>
                                            <p class="text-sm text-gray-600">Understanding the structure</p>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>

                        <div class="bg-white rounded-xl shadow-sm border p-6">
                            <div class="flex items-center mb-4">
                                <span class="material-icons text-green-600 mr-3">edit</span>
                                <h3 class="text-xl font-semibold text-gray-800">Authoring Guidelines</h3>
                            </div>
                            <p class="text-gray-600 mb-4">
                                Learn the best practices for creating and maintaining SNOMED CT content.
                            </p>
                            <div class="space-y-2">
                                <button onclick="app.selectSection('authoring')" class="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                    <div class="flex items-center">
                                        <span class="material-icons text-purple-600 mr-3">edit</span>
                                        <div>
                                            <p class="font-medium text-gray-800">Authoring Guidelines</p>
                                            <p class="text-sm text-gray-600">Content creation standards</p>
                                        </div>
                                    </div>
                                </button>
                                <button onclick="app.selectSection('editorial-guide-style-and-terms')" class="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                    <div class="flex items-center">
                                        <span class="material-icons text-orange-600 mr-3">style</span>
                                        <div>
                                            <p class="font-medium text-gray-800">Style & Terms Guide</p>
                                            <p class="text-sm text-gray-600">Naming conventions</p>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Popular Sections -->
                    <div class="bg-white rounded-xl shadow-sm border p-6 mb-12">
                        <h3 class="text-xl font-semibold text-gray-800 mb-6">Popular Sections</h3>
                        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <button onclick="app.selectSection('snomed-ct-introduction')" class="w-full text-left p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                <div class="flex items-center">
                                    <span class="material-icons text-blue-600 mr-3">article</span>
                                    <div>
                                        <p class="font-medium text-gray-800">SNOMED CT Introduction</p>
                                        <p class="text-sm text-gray-600">Core concepts and principles</p>
                                    </div>
                                </div>
                            </button>
                            <button onclick="app.selectSection('concept-model-overview')" class="w-full text-left p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                <div class="flex items-center">
                                    <span class="material-icons text-green-600 mr-3">schema</span>
                                    <div>
                                        <p class="font-medium text-gray-800">Concept Model Overview</p>
                                        <p class="text-sm text-gray-600">Understanding the structure</p>
                                    </div>
                                </div>
                            </button>
                            <button onclick="app.selectSection('authoring')" class="w-full text-left p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                <div class="flex items-center">
                                    <span class="material-icons text-purple-600 mr-3">edit</span>
                                    <div>
                                        <p class="font-medium text-gray-800">Authoring Guidelines</p>
                                        <p class="text-sm text-gray-600">Content creation standards</p>
                                    </div>
                                </div>
                            </button>
                            <button onclick="app.selectSection('editorial-guide-style-and-terms')" class="w-full text-left p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                <div class="flex items-center">
                                    <span class="material-icons text-orange-600 mr-3">style</span>
                                    <div>
                                        <p class="font-medium text-gray-800">Style & Terms Guide</p>
                                        <p class="text-sm text-gray-600">Naming conventions</p>
                                    </div>
                                </div>
                            </button>
                            <button onclick="app.showLandingPage()" class="w-full text-left p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                <div class="flex items-center">
                                    <span class="material-icons text-orange-600 mr-3">analytics</span>
                                    <div>
                                        <p class="font-medium text-gray-800">Statistics Dashboard</p>
                                        <p class="text-sm text-gray-600">SNOMED CT release statistics</p>
                                    </div>
                                </div>
                            </button>
                            <button onclick="app.selectSection('pdfs-for-download')" class="w-full text-left p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                <div class="flex items-center">
                                    <span class="material-icons text-red-600 mr-3">download</span>
                                    <div>
                                        <p class="font-medium text-gray-800">PDF Downloads</p>
                                        <p class="text-sm text-gray-600">Printable versions</p>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>

                    <!-- Footer -->
                    <div class="text-center py-8 border-t border-gray-200">
                        <div class="mb-4">
                            <p class="text-gray-600 mb-2">This application is designed to complement the official SNOMED CT Editorial Guide</p>
                            <p class="text-sm text-gray-500">© 2025 SNOMED International. All rights reserved.</p>
                        </div>
                    </div>
                </div>

                <!-- Statistics Tab Content -->
                <div id="tab-content-statistics" class="tab-content hidden">
                    ${this.renderStatisticsDashboard()}
                </div>
            </div>
        `;
        
        console.log('✅ Landing page loaded');
    },

    showLandingTab(tabName) {
        // Hide all tab contents
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.add('hidden');
            content.classList.remove('active');
        });
        
        // Remove active class from all tab buttons
        document.querySelectorAll('.tab-button').forEach(button => {
            button.classList.remove('active');
            button.classList.remove('border-blue-500');
            button.classList.remove('text-blue-600');
            button.classList.add('border-transparent');
            button.classList.add('text-gray-500');
        });
        
        // Show selected tab content
        const selectedContent = document.getElementById(`tab-content-${tabName}`);
        if (selectedContent) {
            selectedContent.classList.remove('hidden');
            selectedContent.classList.add('active');
        }
        
        // Activate selected tab button
        const selectedButton = event.target.closest('.tab-button');
        if (selectedButton) {
            selectedButton.classList.add('active');
            selectedButton.classList.add('border-blue-500');
            selectedButton.classList.add('text-blue-600');
            selectedButton.classList.remove('border-transparent');
            selectedButton.classList.remove('text-gray-500');
        }
    },

    // Statistics dashboard
    showStatisticsDashboard() {
        console.log('📊 Showing statistics dashboard');
        
        this.updateURL('statistics');
        
        const contentContainer = document.getElementById('content');
        contentContainer.innerHTML = `
            <div class="content-area animate-slide-in">
                ${this.renderStatisticsDashboard()}
            </div>
        `;
    },

    renderStatisticsDashboard() {
        return `
            <div class="mb-8">
                <div class="flex items-center justify-between mb-6">
                    <h1 class="text-3xl font-bold text-gray-800">SNOMED CT Release Statistics</h1>
                    <div class="text-sm text-gray-600">July 2025 Release</div>
                </div>
                
                <!-- Summary Cards -->
                <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div class="bg-white rounded-xl shadow-sm border p-6">
                        <div class="flex items-center">
                            <div class="p-2 bg-blue-100 rounded-lg">
                                <span class="material-icons text-blue-600">analytics</span>
                            </div>
                            <div class="ml-4">
                                <p class="text-sm font-medium text-gray-600">Total Active Concepts</p>
                                <p class="text-2xl font-bold text-gray-900">${snomedStats.totalActive.toLocaleString()}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-white rounded-xl shadow-sm border p-6">
                        <div class="flex items-center">
                            <div class="p-2 bg-green-100 rounded-lg">
                                <span class="material-icons text-green-600">add</span>
                            </div>
                            <div class="ml-4">
                                <p class="text-sm font-medium text-gray-600">New Concepts</p>
                                <p class="text-2xl font-bold text-gray-900">${snomedStats.summary.totalNew.toLocaleString()}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-white rounded-xl shadow-sm border p-6">
                        <div class="flex items-center">
                            <div class="p-2 bg-yellow-100 rounded-lg">
                                <span class="material-icons text-yellow-600">edit</span>
                            </div>
                            <div class="ml-4">
                                <p class="text-sm font-medium text-gray-600">Changed Concepts</p>
                                <p class="text-2xl font-bold text-gray-900">${snomedStats.summary.totalChanged.toLocaleString()}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-white rounded-xl shadow-sm border p-6">
                        <div class="flex items-center">
                            <div class="p-2 bg-red-100 rounded-lg">
                                <span class="material-icons text-red-600">remove</span>
                            </div>
                            <div class="ml-4">
                                <p class="text-sm font-medium text-gray-600">Inactivated</p>
                                <p class="text-2xl font-bold text-gray-900">${snomedStats.summary.totalInactivated.toLocaleString()}</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Hierarchy Statistics Table -->
                <div class="bg-white rounded-xl shadow-sm border overflow-hidden">
                    <div class="px-6 py-4 border-b border-gray-200">
                        <h3 class="text-lg font-semibold text-gray-800">Hierarchy Statistics</h3>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="w-full">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hierarchy</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Active</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">New</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Changed</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Inactivated</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                ${snomedStats.hierarchies.map(hierarchy => `
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="text-sm font-medium text-gray-900">${hierarchy.name}</div>
                                            <div class="text-sm text-gray-500">${hierarchy.semTag}</div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${hierarchy.active.toLocaleString()}</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${hierarchy.total.toLocaleString()}</td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                ${hierarchy.new}
                                            </span>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                                ${hierarchy.changed}
                                            </span>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                                ${hierarchy.inactivated}
                                            </span>
                                        </td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `;
    },

    // Utility functions
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    copyCurrentSectionLink() {
        const currentURL = window.location.href;
        navigator.clipboard.writeText(currentURL).then(() => {
            const notification = document.createElement('div');
            notification.className = 'fixed top-20 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300';
            notification.innerHTML = `
                <div class="flex items-center">
                    <span class="material-icons text-sm mr-2">content_copy</span>
                    <span class="text-sm">Link copied to clipboard!</span>
                </div>
            `;
            document.body.appendChild(notification);
            setTimeout(() => {
                notification.classList.remove('translate-x-full');
            }, 100);
            setTimeout(() => {
                notification.classList.add('translate-x-full');
                setTimeout(() => {
                    if (notification.parentNode) {
                        notification.parentNode.removeChild(notification);
                    }
                }, 300);
            }, 3000);
        }).catch(err => {
            console.error('Failed to copy link:', err);
            const textArea = document.createElement('textarea');
            textArea.value = currentURL;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
        });
    },

    updateActiveNavItem() {
        // Remove active class from all nav items
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Add active class to current section
        const currentNavItem = document.querySelector(`[onclick*="${guideData.currentSection}"]`);
        if (currentNavItem) {
            currentNavItem.classList.add('active');
        }
    },

    // Initialize the application
    init() {
        console.log('🚀 Initializing SNOMED CT Editorial Guide application...');
        
        this.initializeURLHandling();
        this.renderSidebar();
        
        // Initialize search functionality
        this.initializeSearch();
        
        console.log('✅ Application initialized successfully');
    },

    // Search functionality
    initializeSearch() {
        const searchInput = document.getElementById('searchInput');
        if (!searchInput) return;
        
        searchInput.addEventListener('input', this.debounce((e) => {
            const query = e.target.value.trim().toLowerCase();
            if (query.length < 2) {
                guideData.searchResults = [];
                this.renderSidebar();
                return;
            }
            
            this.performSearch(query);
        }, 300));
    },

    performSearch(query) {
        const results = guideData.sections.filter(section => 
            section.title.toLowerCase().includes(query) ||
            section.description.toLowerCase().includes(query) ||
            section.category.toLowerCase().includes(query)
        );
        
        guideData.searchResults = results;
        this.renderSidebar();
    }
};

// Expose app object to global scope for onclick handlers
window.app = app;

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { app, guideData };
} 