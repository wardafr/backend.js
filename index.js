const dotenv = require('dotenv').config()
const express = require('express'); //importer le paquet express
const app = express(); //creer une application express
const port = process.env.port;
const apiRouter = require('./routes/apiRouter').router;

app.use('/api/', apiRouter);

app.listen(port, () => {
    console.log('Serveur démarré : http://localhost' + port)  //renvoyer a l'adresse http://localhost3000
});



app.get('/', function (req, res) { //app qui ecoute uniquement les requete get uniquement a ce (/) root la, le req et res et un call back
    res.setHeader('Content-Type', 'text/html'); //res la reponse 
    res.status(200).send('My Page');
    
});


var mysql = require('mysql');
var connection = mysql.createConnection({
host: 'localhost',
user: 'root'
});




 

