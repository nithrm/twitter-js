var express = require('express');
var swig = require('swig');
var routes = require('./routes/');
var app = express();
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
swig.setDefaults({ cache: false });

app.use('/', routes);

app.use(express.static('public'));


app.use(function(req,res,next){
  process.stdout.write(req.method + ' ' + req.originalUrl + ' ');
  next();

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
