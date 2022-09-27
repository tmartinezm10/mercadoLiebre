const express = require('express');
const app = express();
const path = require('path');

app.listen(3000, () => {
    console.log('servidor corriendo')
});

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/views/home.html'));
});

app.use(express.static('public'));