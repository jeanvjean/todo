var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//connect to the db

mongoose.connect('mongodb://test:test@ds137686.mlab.com:37686/shopping');

//create a schema

var todoSchema = new mongoose.Schema({
    item: String
});

var Todo = mongoose.model('Todo', todoSchema );

//var data = [{item:'get milk'},{item:'walk dog'},{item:'dance practice'}];
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){

     app.get('/', function(req,res){
         //get data from mongodb and pass it to the view
         Todo.find({},function(err,data){
             if (err) throw err;
             res.render('todo',{todos: data});
         });
     });
     app.post('/todo', urlencodedParser, function(req,res){
         //get data from the view and add it to the db
         var newTodo = Todo(req.body).save(function(){
             if (err) throw err;
             res.json(data);
         });
     });
     app.delete('/todo/:item', function(req,res){
         //delete requested item from mongodb
         Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(){
             if (err) throw err;
             res.json(data);
         });
     });
}
