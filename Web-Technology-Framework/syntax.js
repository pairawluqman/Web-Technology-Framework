function renderFirebaseTemplate(data) {
    const appElement = document.getElementById('app');
    if (appElement) {
        let htmlContent = appElement.innerHTML;

        // Handle -{loop.data}- syntax
        htmlContent = htmlContent.replace(/-{loop\.(.*?)\}-/g, (match, key) => {
            const fieldName = key.trim(); // Extract field name from loop syntax
            if (Array.isArray(data) && data.length > 0) {
                // If data is an array, iterate over each item and replace placeholders
                return data.map(item => item[fieldName] || '').join('<br/>'); // Adjust output as needed
            } else {
                return match; // If no data or not an array, return the original match
            }
        });

        // Replace regular placeholders
        htmlContent = htmlContent.replace(/-{(.*?)}-/g, (match, key) => {
            return data[0][key] || match; // Replace with data if available, otherwise keep placeholder
        });

        appElement.innerHTML = htmlContent;
    }
}



function renderTemplate(data) {
    const appElement = document.getElementById('app');
    if (appElement) {
        const template = appElement.innerHTML;
        const renderedTemplate = replacePlaceholders(template, data);
        appElement.innerHTML = renderedTemplate;
    }
}


function replacePlaceholders(template, data) {
    // Handle -{loop.item}- syntax
    template = template.replace(/-{loop\.(.*?)\}-/g, (match, key) => {
        const fieldName = key.trim(); // Extract field name from loop syntax
        if (Array.isArray(data[fieldName])) {
            // If data[fieldName] is an array, iterate over each item and replace placeholders
            return data[fieldName].map(item => {
                let itemDetails = '';
                for (const [key, value] of Object.entries(item)) {
                    itemDetails += `${key}: ${value}, `;
                }
                return itemDetails.slice(0, -2); // Remove the last comma and space
            }).join('<br/> '); // Adjust output format as needed
        } else {
            return match; // If not an array, return the original match
        }
    });

    // Replace regular placeholders
    template = template.replace(/-{(.*?)}-/g, (match, p1) => data[p1.trim()] || '');

    return template;
}

