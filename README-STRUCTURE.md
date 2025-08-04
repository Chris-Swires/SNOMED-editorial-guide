# SNOMED CT Editorial Guide - Separated File Structure

This document describes the new modular file structure for the SNOMED CT Editorial Guide application, which has been separated from the monolithic `index.html` file into a well-organized, maintainable codebase.

## 📁 File Structure

```
support-info-test/
├── index.html                    # Original monolithic file (unchanged)
├── index-separated.html          # New modular HTML file
├── css/
│   └── main.css                  # All application styles
├── js/
│   ├── app.js                    # Main application logic
│   └── data-loader.js            # Markdown section loading
├── data/
│   └── snomed-stats.js           # SNOMED CT statistics data
├── services/
│   └── hrcm-service.js           # HRCM (Hierarchical Refset Content Model) service
├── utils/                        # Utility functions (future use)
├── config.js                     # Configuration (existing)
├── gemini-service.js             # AI service (existing)
└── output/                       # Markdown content (existing)
    ├── hierarchy.json
    ├── file-list.json
    └── [markdown files...]
```

## 🚀 Getting Started

### Option 1: Use the Separated Version (Recommended)
1. Start a local server in the project directory:
   ```bash
   python3 -m http.server 8000
   ```
2. Open `http://localhost:8000/index-separated.html` in your browser

### Option 2: Use the Original Version
1. Start a local server in the project directory:
   ```bash
   python3 -m http.server 8000
   ```
2. Open `http://localhost:8000/index.html` in your browser

## 📋 File Descriptions

### Core Files

#### `index-separated.html`
- **Purpose**: Main HTML file with clean structure
- **Features**: 
  - External CSS and JavaScript references
  - Semantic HTML structure
  - Responsive design
  - Progress indicator
  - Mobile menu support

#### `css/main.css`
- **Purpose**: All application styles
- **Contents**:
  - CSS custom properties (variables)
  - Layout styles (header, sidebar, main content)
  - Component styles (navigation, markdown content, tables)
  - Responsive design rules
  - Animations and transitions
  - Utility classes

#### `js/app.js`
- **Purpose**: Main application logic
- **Features**:
  - URL handling and navigation
  - Sidebar rendering
  - Content rendering
  - Search functionality
  - Landing page with tabs
  - Statistics dashboard
  - Utility functions

#### `js/data-loader.js`
- **Purpose**: Data loading and management
- **Features**:
  - Hierarchical structure loading
  - Markdown section processing
  - Fallback loading mechanisms
  - Data validation

#### `data/snomed-stats.js`
- **Purpose**: SNOMED CT statistics data
- **Contents**:
  - Release statistics
  - Hierarchy data
  - Cross-reference mappings
  - Concept ID mappings

#### `services/hrcm-service.js`
- **Purpose**: HRCM (Hierarchical Refset Content Model) functionality
- **Features**:
  - Template management
  - Data rendering
  - Modal dialogs
  - Service initialization

## 🔧 Architecture Benefits

### 1. **Separation of Concerns**
- **HTML**: Structure and content
- **CSS**: Presentation and styling
- **JavaScript**: Behavior and logic
- **Data**: Configuration and content

### 2. **Maintainability**
- Easy to locate and modify specific functionality
- Clear file organization
- Reduced code duplication
- Modular design

### 3. **Performance**
- CSS can be cached separately
- JavaScript can be minified independently
- Smaller initial HTML file
- Better browser caching

### 4. **Development Workflow**
- Multiple developers can work on different files
- Easier debugging and testing
- Version control benefits
- Code review improvements

### 5. **Scalability**
- Easy to add new features
- Simple to extend functionality
- Clear extension points
- Modular service architecture

## 🛠️ Development Guidelines

### Adding New Features

1. **New Styles**: Add to `css/main.css`
2. **New Logic**: Add to appropriate JavaScript file or create new module
3. **New Data**: Add to `data/` directory
4. **New Services**: Add to `services/` directory

### File Naming Conventions

- **CSS**: `kebab-case.css`
- **JavaScript**: `camelCase.js`
- **Data**: `descriptive-name.js`
- **Services**: `service-name.js`

### Code Organization

- **Functions**: Group related functions together
- **Comments**: Use JSDoc style comments for functions
- **Exports**: Use ES6 module syntax when possible
- **Globals**: Minimize global variables

## 🔄 Migration from Monolithic File

The separated structure maintains full compatibility with the original functionality:

### ✅ Preserved Features
- URL-based navigation
- Dynamic markdown loading
- Search functionality
- Statistics dashboard
- HRCM integration
- Responsive design
- All animations and transitions

### 🔧 Improvements
- Better code organization
- Easier maintenance
- Improved performance
- Enhanced developer experience
- Clearer architecture

## 🚀 Future Enhancements

### Potential Additions
- **Build System**: Webpack or Vite for bundling
- **CSS Preprocessor**: SASS/SCSS for better styling
- **Module System**: ES6 modules for better organization
- **Testing Framework**: Jest for unit testing
- **Linting**: ESLint and Prettier for code quality
- **Documentation**: JSDoc for API documentation

### Service Extensions
- **Search Service**: Enhanced search functionality
- **Analytics Service**: Usage tracking
- **Caching Service**: Performance optimization
- **API Service**: External data integration

## 📝 Notes

- Both `index.html` and `index-separated.html` are fully functional
- The separated version is recommended for development and maintenance
- All existing functionality has been preserved
- The structure follows modern web development best practices
- The codebase is now more accessible to new developers

## 🤝 Contributing

When contributing to this project:

1. Follow the established file structure
2. Use the separated files for new development
3. Maintain backward compatibility
4. Add appropriate documentation
5. Test both versions when making changes

---

**Last Updated**: January 2025  
**Version**: 2.0 (Separated Structure) 