var galleryApp = angular.module('myApp',[]);

galleryApp.controller('GalleryController',function($http){
  var gc = this;
  gc.images=[];

  gc.toggleDesc = function(image){
    if (image.mode === true){
      image.views += 1;
    }
    image.mode = !image.mode;
  };
  
  gc.refreshGallery = function(){
    $http.get('/gallery')
    .then(
      function success(response){
        console.log('GET response:',response.data);
        gc.images = response.data;
      },
      function fail(error){
        console.log('GET error:', error);
      }
    );
  };
  gc.refreshGallery();
  
  gc.like = function(image){
    image.likes += 1;
  };


});