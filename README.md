# JS Case Converter

A simple, lightweight web-based text case converter tool that transforms text into different formats instantly.

## Features

### Text Conversion Options

1. **Capitalize** - Converts the first letter of each word to uppercase
   - Example: `the quick brown fox` → `The Quick Brown Fox`

2. **Uppercase** - Converts all characters to uppercase letters
   - Example: `the quick brown fox` → `THE QUICK BROWN FOX`

3. **Lowercase** - Converts all characters to lowercase letters
   - Example: `The Quick Brown Fox` → `the quick brown fox`

4. **Slugify** - Converts text to URL-friendly slugs
   - Converts to lowercase
   - Removes special characters
   - Replaces spaces with hyphens
   - Example: `The Quick Brown Fox!` → `the-quick-brown-fox`

5. **Normalize** - Removes extra whitespace and line breaks
   - Replaces line breaks with spaces
   - Reduces multiple spaces to single space
   - Example: `The   Quick Brown    Fox` → `The Quick Brown Fox`

### Additional Features

- **Normalize Checkbox** - Apply normalization to any conversion option
- **Auto-Copy** - Converted text is automatically copied to clipboard
- **Clear Button** - Quickly clear text areas when focused
- **Copy Confirmation** - Visual feedback when text is copied
- **Responsive Design** - Works seamlessly on desktop and mobile devices

## Usage

1. Enter or paste your text in the input textarea
2. Select the desired conversion type from the dropdown
3. Optionally check "Normalize" to remove extra whitespace
4. Click "Convert" button
5. The converted text appears below and is automatically copied to your clipboard

## Privacy

This tool uses Google Analytics to understand visitor usage patterns and improve the user experience. All text conversion is performed client-side in your browser - no text data is sent to any server.

## Author

Made with ❤️ by [Asique](https://asique.net/)
