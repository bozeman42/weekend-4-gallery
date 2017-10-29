var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 5000;

var galleryRouter = require('./routes/gallery_router.js');

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/gallery',galleryRouter);
app.listen(port,function(){
  console.log('Listening on port',port);
});