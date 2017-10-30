var express = require('express');
var router = express.Router();

var images =
[{filename: '/images/dellstour.jpg',desc: "Melissa and I at the Wisconsin Dells. The boat tour of the Lower Dells is fantastic!", likes: 0, views: 0, mode: true, showComments: false, comments: [], newComment: '' },
{filename: '/images/cotnplaytest.jpg',desc: "Playing one of our games with some Con of the North attendees", likes: 0, views: 0, mode: true, showComments: false, comments: [], newComment: '' },
{filename: '/images/100fast.jpg',desc: 'Me and my ride at the Warroad, MN 4th of July races. In an interview after the race I stated that I went A hundred fast."', likes: 0, views: 0, mode: true, showComments: false, comments: [], newComment: '' },
{filename: '/images/jam.jpg',desc: "My sister and I playing music with a family friend.", likes: 0, views: 0, mode: true, showComments: false, comments: [], newComment: '' },
{filename: '/images/jump.jpg',desc: "Melissa and I jumping for a photo with her family in Galveston, TX", likes: 0, views: 0, mode: true, showComments: false, comments: [], newComment: '' },
{filename: '/images/bdgkick.jpg',desc: "Brass Dog Games celebrating after a successful KickStarter campaign.", likes: 0, views: 0, mode: true, showComments: false, comments: [], newComment: '' }]


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
  images[imgId].likes += 1;
  res.sendStatus(200);
});

router.put('/comments/toggle/:id',function(req,res){
  var id = req.params.id;
  images[id].showComments = !images[id].showComments;
  res.sendStatus(200);
});

router.put('/comment/:id',function(req,res){
  console.log(req.body);
  var comment = req.body.newComment;
  var id = req.params.id;
  images[id].comments.push(comment);
  res.sendStatus(200);
});
module.exports = router;