var express = require('express');
var router = express.Router();

var images =
[{filename: 'amess.jpg',desc: "A description", likes: 0, views: 0, mode: true, comments: [] },
{filename: 'pileofstuff.jpg',desc: "A description", likes: 0, views: 0, mode: true, comments: [] },
{filename: 'amess.jpg',desc: "A description", likes: 0, views: 0, mode: true, comments: [] },
{filename: 'pileofstuff.jpg',desc: "A description", likes: 0, views: 0, mode: true, comments: [] },
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

// like image
router.put('/like/:id',function(req,res){

});

router.put('/comment/:id',function(req,res){

});
module.exports = router;