var express = require('express'); 

var Connect4 = require('./routes/Connect4'); 
var Memory = require('./routes/Memory');
var Snake = require('./routes/Snake');
var Tetris = require('./routes/Tetris');
var Mole = require('./routes/Mole');

var app = express();
app.use(express.static('Games'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/main.html'); // Ensure this path is correct
});

app.use('/connect4', Connect4); 
app.use('/Memory', Memory);    
app.use('/Snake', Snake);   
app.use('/Tetris', Tetris);   
app.use('/Mole', Mole);     

app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + '/404.html'); 
});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
