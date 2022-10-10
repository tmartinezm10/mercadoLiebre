const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`servidor corriendo en el puerto ${PORT}`)
});

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/views/home.html'));
});

app.get('/login', function(req, res){
    res.sendFile(path.join(__dirname, '/views/login.html'));
});

app.get('/registro', function(req, res){
    res.sendFile(path.join(__dirname, '/views/register.html'));
});

app.use(express.static('public'));