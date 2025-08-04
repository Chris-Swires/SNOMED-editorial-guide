# Google Gemini API Setup Guide

This guide will help you set up Google Gemini AI integration for the SNOMED CT Editorial Guide Browser.

## 🚀 Quick Setup

### Step 1: Get Your Free API Key

1. **Visit Google AI Studio**
   - Go to [https://makersuite.google.com/app/apikey](https://makersuite.google.com/app/apikey)
   - Sign in with your Google account

2. **Create API Key**
   - Click "Create API Key"
   - Choose "Create API Key in new project" or select an existing project
   - Copy the generated API key (it starts with "AIza...")

### Step 2: Configure the Application

1. **Open the SNOMED CT Editorial Guide Browser**
   - Start your local server: `python3 -m http.server 8000`
   - Open `http://localhost:8000` in your browser

2. **Access AI Settings**
   - Click the "AI Assistant" button in the header
   - Click the settings icon (⚙️) in the chat header
   - Or use the keyboard shortcut: `Ctrl+/` then click settings

3. **Enter Your API Key**
   - Paste your Gemini API key in the "Google Gemini API Key" field
   - Click "Save Settings"
   - You should see the status change to "Configured and ready"

### Step 3: Test the Integration

1. **Ask a General Question**
   - In the AI chat, ask: "What is SNOMED CT?"
   - You should receive a detailed, AI-powered response

2. **Test MRCM Integration**
   - Ask: "What attributes are used for modeling clinical findings?"
   - The AI should provide live MRCM data with attribute constraints

3. **Verify Status**
   - The AI status should show "Gemini AI Ready" (green indicator)
   - If it shows "Local AI Mode" (yellow), check your API key

## 🔧 Configuration Options

### API Key Security
- Your API key is stored locally in your browser's localStorage
- It's never sent to our servers
- You can clear it anytime using the settings panel

### Free Tier Limits
- **15 requests per minute**
- **2M characters per minute**
- **No credit card required**
- **Responses are cached** to reduce usage

### Model Selection
The application uses `gemini-1.5-flash` by default, which provides:
- Fast response times
- Good accuracy for technical content
- Cost-effective for the free tier

## 🛠️ Troubleshooting

### Common Issues

**"API request failed: 401"**
- Check that your API key is correct
- Ensure you copied the entire key (starts with "AIza...")

**"API request failed: 429"**
- You've hit the rate limit (15 requests/minute)
- Wait a moment and try again
- The app will automatically retry

**"Not configured - using local AI"**
- Your API key isn't set or is invalid
- Check the settings panel
- Verify the key in Google AI Studio

**"Network error"**
- Check your internet connection
- Ensure you can access Google's servers
- Try refreshing the page

### Performance Tips

1. **Use the cache**
   - Similar questions will use cached responses
   - This reduces API usage and improves speed

2. **Be specific**
   - Ask detailed questions for better responses
   - Include context about what you're looking for

3. **Monitor usage**
   - Check the cache info in settings
   - Clear cache if needed

## 🔒 Privacy & Security

- **Local storage**: API keys are stored only in your browser
- **No server logs**: We don't log your questions or responses
- **Secure transmission**: All API calls use HTTPS
- **Content filtering**: Google's safety filters are enabled

## 📚 Example Questions

Try these questions to test the integration:

### General SNOMED CT Questions
- "What is the concept model in SNOMED CT?"
- "How do I model a clinical finding?"
- "What are the naming conventions for procedures?"
- "Explain the difference between primitive and fully defined concepts"
- "How do I handle laterality in body structure concepts?"

### MRCM/HRCM Specific Questions
- "What attributes are used for modeling clinical findings?"
- "Show me the MRCM constraints for procedures"
- "What are the attribute constraints for body structures?"
- "How do I model a pharmaceutical product?"
- "What attributes are required for observable entities?"
- "Explain the cardinality rules for clinical findings"
- "What are the grouped attributes in the procedure domain?"

## 🆘 Support

If you're still having issues:

1. **Check the browser console** for error messages
2. **Verify your API key** in Google AI Studio
3. **Test with a simple question** first
4. **Clear your browser cache** and try again

The application will automatically fall back to local AI if Gemini is unavailable, so you'll always have a working assistant! 