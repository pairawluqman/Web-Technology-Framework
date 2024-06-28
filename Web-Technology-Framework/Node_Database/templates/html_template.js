const HTML_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>title</title>
</head>
<body>
    <div id="app">
    <!-- Please write your code here -->
    
    </div>
    <!-- Include your JavaScript files -->
    <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-firestore.js"></script>
     <script src="../json_config/json_config.js"></script>  <!-- Delete This if you use Firebase-->
    <script src="../json_config/fetch_json.js"></script>  <!-- Delete This if you use Firebase-->
     <script src="../firebase_config/firebase_config.js"></script> <!-- Delete This if you use local Json file-->
    <script src="../firebase_config/fetch_firebase.js"></script>  <!-- Delete This if you use local Json file-->
    <script src="../syntax.js"></script>
    
</body>
</html>`;

module.exports = HTML_TEMPLATE;
