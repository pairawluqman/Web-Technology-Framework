# Web-Technology-Framework

Overview
This framework allows you to easily configure and fetch data from different types of databases (JSON, Firebase, MongoDB, SQL) and render it in an HTML template. It includes templates for configuration, fetching data, and rendering the fetched data in a web page.

Features
Supports multiple databases: JSON, Firebase, MongoDB, and SQL.
Provides configuration templates for each database.
Includes fetch templates to retrieve data from the specified database.
HTML template for rendering the fetched data.
Utility scripts to create configuration, fetch, and HTML files.

Installation
Clone the repository.


Usage

1. Create Configuration File
To create a configuration file for your database:

npm run create-config <database_type> <filename>

<database_type>: Type of the database (json, firebase, mongodb, sql).
<filename>: Name of the configuration file.


2. Create Configuration File
To create a configuration file for your database:

npm run create-config <database_type> <filename>
<database_type>: Type of the database (json, firebase, mongodb, sql).
<filename>: Name of the configuration file.


3. Create HTML Page
To create an HTML page that uses the framework to fetch and render data:

npm run create-page <filename>
<filename>: Name of the HTML file.



New Syntax
Loop Syntax
This framework introduces a new syntax for fetching data use -{data}- to fetch data from any database replace the data with the actual filed name.
This framework introduces a new syntax for looping through data arrays. This is useful for rendering lists or tables of data dynamically.

-{loop.<fieldName>}-: Replaces this placeholder with a concatenated string of all items in the array at fieldName.
