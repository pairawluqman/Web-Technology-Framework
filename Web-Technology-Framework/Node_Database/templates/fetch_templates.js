const fetchTemplates = {
    json: `
       async function fetchData() {
        const urls = config.json.urls;
        const data = {};
    
        const promises = urls.map(url => fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error fetching JSON data");
                }
                return response.json();
            })
            .then(jsonData => {
                Object.assign(data, jsonData);
            })
        );
    
        await Promise.all(promises);
    
        return data;
    }
    
    

    document.addEventListener('DOMContentLoaded', () => {
        fetchData()
            .then(data => {
                renderTemplate(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    });
    
`,
    firebase: `
async function fetchData(collectionName) {
    const db = firebase.firestore();
    const data = [];
    try {
        const snapshot = await db.collection(collectionName).get();
        snapshot.forEach(doc => {
            data.push({ id: doc.id, ...doc.data() });
        });
    } catch (error) {
        console.error('Firebase fetch error:', error);
        throw error;
    }
    return data;
}


document.addEventListener('DOMContentLoaded', async () => {
    const collection = "name"; 
    const data = await fetchData(collection);
    renderFirebaseTemplate(data);
});

`,
    mongodb: `
const { MongoClient } = require('mongodb');

async function fetchData() {
    const client = new MongoClient(config.mongodb.uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await client.connect();
        const database = client.db();
        const collection = database.collection(config.mongodb.collection);
        const data = await collection.find({}).toArray();
        return data;
    } catch (error) {
        console.error('MongoDB fetch error:', error);
        throw new Error('Failed to fetch data from MongoDB');
    } finally {
        await client.close();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    fetchData()
        .then(data => {
            renderTemplate(data);
        })
        .catch(error => console.error('Error fetching data:', error));
});

function renderTemplate(data) {
    const appElement = document.getElementById('app');
    if (appElement) {
        const template = appElement.innerHTML;
        const renderedTemplate = replacePlaceholders(template, data);
        appElement.innerHTML = renderedTemplate;
    }
}

function replacePlaceholders(template, data) {
    return template.replace(/-{(.*?)}-/g, (match, p1) => data[p1.trim()] || '');
}
`,
    sql: `
const mysql = require('mysql2/promise');

async function fetchData() {
    const connection = await mysql.createConnection({
        host: config.sql.host,
        user: config.sql.user,
        password: config.sql.password,
        database: config.sql.database
    });

    try {
        const [rows] = await connection.execute('SELECT * FROM your_table_name');
        return rows;
    } catch (error) {
        console.error('SQL fetch error:', error);
        throw new Error('Failed to fetch data from SQL database');
    } finally {
        await connection.end();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    fetchData()
        .then(data => {
            renderTemplate(data);
        })
        .catch(error => console.error('Error fetching data:', error));
});

function renderTemplate(data) {
    const appElement = document.getElementById('app');
    if (appElement) {
        const template = appElement.innerHTML;
        const renderedTemplate = replacePlaceholders(template, data);
        appElement.innerHTML = renderedTemplate;
    }
}

function replacePlaceholders(template, data) {
    return template.replace(/-{(.*?)}-/g, (match, p1) => data[p1.trim()] || '');
}
`
};

module.exports = fetchTemplates;
