var donsJSON =  require('../dons.json');
var startupJSON = require('../startup.json');
var topicsJSON = require('../topics.json');
//home
 exports.home = (req,res)=>{
   
  var dons =  donsJSON.dons;
 var startup = startupJSON.startup;
var topics = topicsJSON.topics;
      res.render('home', {
      title :"Know the Picture",
     dons : dons,
     startup : startup,
     topics : topics
    });
    };
    
    exports.topic_single =  (req,res)=>{
      var quiz_number = req.params.quiz_number;
    
      res.send("This is the page for Quiz No :"+quiz_number);
    };
    
    
    
    //page not found
    exports.notFound = (req, res)=>{
      res.send("This is not the Page you are Looking For");
    };