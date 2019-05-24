var express = require('express');

var app = express();
// console.log('Hello word');

app.set('view engine', 'ejs');
var routes = require('./routes');
var path = require('path');
app.use(express.static(path.join(__dirname,'public')));
//home
app.get('/', routes.home);
  
app.get('/topics/:quiz_number', routes.topic_single);

//login page
app.get('/login',(req,res)=>{
 res. render('login',{
  title :"Know the Picture"
 });
});

//quiz page

app.get('/myquiz',(req,res)=>{
  res. render('myquiz',{
   title :"Get a Quiz"
  });
 });

 app.get('/gallery',(req,res)=>{
   res.render('gallery',{
    title:"My Gallery" 
   });
 });
 app.get('/tutorials',(req,res)=>{
  res.render('tutorials',{
   title:"My  Tutorials" 
  });
});
//page not found
app.get('*', routes.notFound);

app.listen(process.env.PORT || '5555',()=>{
  console.log(' Your server is running on port 5555');
});