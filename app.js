var express = require('express');
var todoController = require('./controllers/todoController');

var app = express();

//set up view engine
app.set('view engine', 'ejs');

//fire controllers
todoController(app);

//setup static file(this file loads in all the pages for eample the bootstrap)
app.use(express.static('./public'));

app.use('/js',express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

//setup server
app.listen(3000);
console.log('server started on port:3000');
