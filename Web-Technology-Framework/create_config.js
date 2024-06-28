const fs = require('fs');
const path = require('path');
const configTemplates = require('./Node_Database/templates/config_templates');

// Check if the database type and filename are provided
const dbType = process.argv[2];
const filename = process.argv[3];
if (!dbType || !filename) {
    console.error('Usage: node create_config <database_type> <filename>');
    process.exit(1);
}

// Check if the provided database type is valid
if (!configTemplates[dbType]) {
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

// Ensure the specific database config directory exists
const outputPath = path.join(__dirname, outputDir, filename);
if (!fs.existsSync(path.join(__dirname, outputDir))) {
    fs.mkdirSync(path.join(__dirname, outputDir), { recursive: true });
}

// Write the config template to the specified file
fs.writeFileSync(outputPath, configTemplates[dbType], 'utf8');

console.log(`Configuration file created: ${outputPath}`);
