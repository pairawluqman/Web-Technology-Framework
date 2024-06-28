const fs = require('fs');
const path = require('path');
const fetchTemplates = require('./Node_Database/templates/fetch_templates');

// Check if the database type and filename are provided
const dbType = process.argv[2];
const filename = process.argv[3];
if (!dbType || !filename) {
    console.error('Usage: node create_fetch <database_type> <filename>');
    process.exit(1);
}

// Check if the provided database type is valid
if (!fetchTemplates[dbType]) {
    console.error('Invalid database type. Options are: json, firebase, mongodb, sql');
    process.exit(1);
}

// Define the output directory based on the database type
const outputDirMap = {
    json: 'json_config',
    firebase: 'firebase_config',
    mongodb: 'mongodb_config',
    sql: 'sql_config'
};

const outputDir = outputDirMap[dbType];
if (!outputDir) {
    console.error('Invalid database type directory. Options are: json, firebase, mongodb, sql');
    process.exit(1);
}

// Ensure the specific database fetch directory exists
const outputPath = path.join(__dirname, outputDir, filename);
if (!fs.existsSync(path.join(__dirname, outputDir))) {
    fs.mkdirSync(path.join(__dirname, outputDir), { recursive: true });
}

// Write the fetch template to the specified file
fs.writeFileSync(outputPath, fetchTemplates[dbType], 'utf8');

console.log(`Fetch function file created: ${outputPath}`);
