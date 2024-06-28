const configTemplates = {
    json: `const config = {
    database: 'json',
    json: {
        urls: ['../json_config/data.json'] // List of JSON files please replace the file with your file name
    },
};
`,

    firebase: `const config = {
    database: 'firebase', 
    firebase: {
        apiKey: "YOUR_FIREBASE_API_KEY",
        authDomain: "YOUR_FIREBASE_AUTH_DOMAIN",
        projectId: "YOUR_FIREBASE_PROJECT_ID",
        storageBucket: "YOUR_FIREBASE_STORAGE_BUCKET",
        messagingSenderId: "YOUR_FIREBASE_MESSAGING_SENDER_ID",
        appId: "YOUR_FIREBASE_APP_ID"
    },
}; 
firebase.initializeApp(config.firebase);`,

    mongodb: `const config = {
    database: 'mongodb', 
    mongodb: {
        uri: 'mongodb://localhost:27017/your_database_name',
        collection: 'your_collection_name'
    },
};`,

    sql: `const config = {
    database: 'sql', 
    sql: {
        host: 'YOUR_SQL_HOST',
        user: 'YOUR_SQL_USER',
        password: 'YOUR_SQL_PASSWORD',
        database: 'YOUR_SQL_DATABASE'
    }
};`
};

module.exports = configTemplates;
