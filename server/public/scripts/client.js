var galleryApp = angular.module('myApp',[]);

galleryApp.controller('GalleryController',function($http){
  var gc = this;
  gc.images =
  [{filename: 'amess.jpg',desc: "A description", likes: 0, views: 0, mode: true },
  {filename: 'pileofstuff.jpg',desc: "A description", likes: 0, views: 0, mode: true },
  {filename: 'amess.jpg',desc: "A description", likes: 0, views: 0, mode: true },
  {filename: 'pileofstuff.jpg',desc: "A description", likes: 0, views: 0, mode: true },
  {filename: 'amess.jpg',desc: "A description", likes: 0, views: 0, mode: true },
  {filename: 'pileofstuff.jpg',desc: "A description", likes: 0, views: 0, mode: true }];

  gc.toggleDesc = function(image){
    if (image.mode === true){
      image.views += 1;
    }
    image.mode = !image.mode;
  };

  gc.like = function(image){
    image.likes += 1;
  };
});