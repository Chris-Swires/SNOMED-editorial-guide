# SNOMED CT Editorial Guide Browser

An interactive web application for browsing and searching the comprehensive SNOMED CT Editorial Guide. This tool provides easy access to clinical terminology management guidelines from SNOMED International.

## Features

### 🔍 Enhanced Search Functionality
- **Real-time search** with debouncing for optimal performance
- **Content search** that searches within markdown files
- **Search suggestions** for quick navigation
- **Relevance scoring** to show the most relevant results first
- **Content previews** with highlighted search terms
- **Keyboard shortcuts** (Ctrl+K to focus search)

### 🤖 AI Assistant
- **Google Gemini AI integration** with free tier support
- **Interactive chat interface** for asking questions about SNOMED CT
- **Content-aware responses** based on the editorial guide
- **MRCM/HRCM integration** with live attribute constraint data
- **Domain-specific modeling guidance** with real-time MRCM data
- **Automatic fallback** to local AI if Gemini is unavailable
- **Response caching** to reduce API usage and improve performance
- **Settings panel** for API key configuration
- **Keyboard shortcuts** (Ctrl+/ to open chat, Esc to close)
- **Typing indicators** and smooth animations

### 📚 Content Navigation
- **Hierarchical navigation** based on the guide structure
- **Direct linking** with URL parameters
- **Breadcrumb navigation** for easy orientation
- **Statistics dashboard** with SNOMED CT release data
- **Cross-references** between related sections

### 🎨 Modern UI/UX
- **Responsive design** that works on all devices
- **Dark header** with professional styling
- **Smooth animations** and transitions
- **Progress indicators** for long operations
- **Loading states** for better user experience

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Python 3.x (for local development server)

### Installation
1. Clone or download this repository
2. Navigate to the project directory
3. Start a local web server:
   ```bash
   python3 -m http.server 8000
   ```
4. Open your browser and go to `http://localhost:8000`

### Usage

#### Search
- Type in the search box to find content
- Use Ctrl+K to quickly focus the search input
- Search suggestions appear for short queries
- Results show both title matches and content matches

#### AI Assistant
- Click the "AI Assistant" button or use Ctrl+/
- Configure your Google Gemini API key in the settings (optional)
- Ask questions about SNOMED CT concepts, modeling, or guidelines
- **For MRCM/HRCM questions**: Ask about attributes, modeling constraints, or specific domains
- The AI will search through the guide content and provide live MRCM data when relevant
- Press Esc to close the chat
- See `GEMINI_SETUP.md` for detailed setup instructions

#### Navigation
- Use the sidebar to browse sections hierarchically
- Click on any section to view its content
- Use browser back/forward buttons for navigation
- Direct links work with URL parameters

## Technical Details

### Architecture
- **Pure JavaScript** - No framework dependencies
- **Markdown rendering** using Marked.js
- **Dynamic content loading** from markdown files
- **Responsive CSS** with Tailwind CSS
- **Progressive enhancement** for better accessibility

### Search Implementation
- **Two-phase search**: Metadata first, then content
- **Debounced input** to prevent excessive API calls
- **Content preview generation** with context
- **Relevance scoring** based on multiple factors
- **Deduplication** of search results

### AI Integration
- **Google Gemini AI** with free tier (15 requests/minute, 2M characters/minute)
- **MRCM/HRCM data integration** for modeling questions
- **Live attribute constraint data** from SNOMED CT refsets
- **Domain-specific modeling guidance** with real-time data
- **Local AI fallback** when Gemini is unavailable
- **Content-aware responses** based on guide sections
- **Response caching** to reduce API usage
- **Context extraction** from markdown content
- **Automatic error handling** and graceful degradation

### Performance Optimizations
- **Lazy loading** of markdown content
- **Debounced search** to reduce server load
- **Limited content search** (first 10 sections) for speed
- **Caching** of loaded content
- **Progressive loading** with loading indicators

## File Structure

```
support-info-test/
├── index.html              # Main application file
├── output/                 # Markdown content directory
│   ├── hierarchy.json      # Navigation structure
│   ├── file-list.json      # Section metadata
│   └── [sections]/         # Markdown files organized by category
├── README.md              # This file
└── [other HTML files]     # Additional pages
```

## Browser Compatibility

- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+

## Contributing

This application is designed to work with the SNOMED CT Editorial Guide content. To add new content:

1. Add markdown files to the appropriate `output/` subdirectories
2. Update `hierarchy.json` to include new sections
3. Test the search functionality with new content
4. Update the AI responses if needed

## License

This project is provided as-is for educational and research purposes. The SNOMED CT content is copyright SNOMED International.

## Support

For issues or questions:
1. Check the browser console for error messages
2. Ensure all markdown files are accessible
3. Verify the hierarchy.json structure is valid
4. Test with a different browser if issues persist

## Future Enhancements

- [ ] Full-text search indexing
- [ ] Advanced filtering options
- [ ] Export functionality
- [ ] Offline support
- [ ] Multi-language support
- [ ] Additional AI model integrations (OpenAI, Claude)
- [ ] User preferences and bookmarks
- [ ] Collaborative annotations
- [ ] Advanced AI features (image analysis, code generation)

