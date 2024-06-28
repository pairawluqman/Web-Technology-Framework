const fs = require('fs');
const path = require('path');
const HTML_TEMPLATE = require('./Node_Database/templates/html_template');

// Check if a filename is provided
const filename = process.argv[2];
if (!filename) {
    console.error('Usage: node create_page <filename>');
    process.exit(1);
}

// Define the output path
const outputPath = path.join(__dirname, 'src', filename);

// Ensure the src directory exists
if (!fs.existsSync(path.join(__dirname, 'src'))) {
    fs.mkdirSync(path.join(__dirname, 'src'), { recursive: true });
}

// Write the content to the specified file
fs.writeFileSync(outputPath, HTML_TEMPLATE, 'utf8');

console.log(`Page created: ${outputPath}`);
