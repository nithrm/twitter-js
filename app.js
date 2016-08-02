var express = require('express');
var app = express();

app.use(function(req,res,next){
  process.stdout.write(req.method + ' ' + req.originalUrl + ' ');
  next();

});

app.use('/special', function(req,res,next){
  console.log('you have reached the special area');
  next();
})

app.get('/', function(req, res){
  logStatus(200);
  res.send('Welcome to our webpage');
});

app.get('/special', function(req,res){
  logStatus(200);
  res.send('special');
})

app.get('/news', function(req, res){
  logStatus(200);
  res.send('news');
});

app.use(function(req,res,next){
  logStatus(404);
  next();
})

app.listen(3000,function(){
  console.log('Listening on port 3000');
});

function logStatus(statusCode){
  process.stdout.write(statusCode + '\n');

}
