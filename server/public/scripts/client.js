var galleryApp = angular.module('myApp',[]);

galleryApp.controller('GalleryController',function($http){
  var gc = this;
  gc.images=[];
  gc.filenameIn = '';
  gc.descriptionIn='';
  
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

  gc.postNewImage = function(){
    var newImage = {filename: gc.filenameIn,
    desc: gc.descriptionIn,
    likes: 0,
    views: 0,
    mode: true,
    comments: [] };
    $http.post('/gallery',angular.copy(newImage))
    .then(
      function success(response){
        gc.refreshGallery();
        console.log('POST request response:',response);
      },
      function fail(error){
        console.log('POST request error:',error);
      }
    );
  };
});