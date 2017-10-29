var express = require('express');
var router = express.Router();

var images =
[{filename: 'dellstour.jpg',desc: "Melissa and I at the Wisconsin Dells. The boat tour of the Lower Dells is fantastic!", likes: 0, views: 0, mode: true, comments: [] },
{filename: 'jam.jpg',desc: "My sister and I playing music with a family friend.", likes: 0, views: 0, mode: true, comments: [] },
{filename: 'jump.jpg',desc: "Melissa and I jumping for a photo with her family in Galveston, TX", likes: 0, views: 0, mode: true, comments: [] },
{filename: '100fast.jpg',desc: 'Me and my ride at the Warroad, MN 4th of July races. In an interview after the race I stated that I wend A hundred fast."', likes: 0, views: 0, mode: true, comments: [] },
{filename: 'amess.jpg',desc: "A description", likes: 0, views: 0, mode: true, comments: [] },
{filename: 'pileofstuff.jpg',desc: "A description", likes: 0, views: 0, mode: true, comments: [] }];


router.get('/',function(req,res){
  console.log("GET request received");
  res.send(images);
});

// post new image
router.post('/',function(req,res){
  console.log(req.body);
  images.push(req.body);
  res.sendStatus(200);
});

router.put('/views/:id', function(req,res){
  var imgId = req.params.id;
  var image = images[imgId];
  if (image.mode === true) {
    image.views += 1;
  }
  image.mode = !image.mode;
  res.sendStatus(200);
});

// like image
router.put('/like/:id',function(req,res){
  var imgId = req.params.id;
  images[imgDd].likes += 1;
  res.sendStatus(200);
});

router.put('/comment/:id',function(req,res){

});
module.exports = router;