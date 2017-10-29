var express = require('express');
var router = express.Router();

images =
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

module.exports = router;