var galleryApp = angular.module('myApp',[]);

galleryApp.controller('GalleryController',function($http){
  var gc = this;
  gc.images=[];
  gc.filenameIn = '';
  gc.descriptionIn='';
  
  gc.toggleDesc = function(image,index){
    $http.put('/gallery/views/'+index)
    .then(
      function success(response){
        console.log('views request',response);
        gc.refreshGallery();
      },
      function error(error){
        console.log('views request error',error);
      }
    );
  };
  
  gc.refreshGallery = function(){
    $http.get('/gallery')
    .then(
      function success(response){
        console.log('GET response:',response.data);
        gc.images = [];
        gc.images = response.data;
      },
      function fail(error){
        console.log('GET error:', error);
      }
    );
  };
  
  gc.refreshGallery();
  
  gc.like = function(image,index){
    console.log(index);
    $http.put('/gallery/like/'+index)
    .then(
      function success(response){
        console.log('Like request',response);
        gc.refreshGallery();
      },
      function error(error){
        console.log('Like request error',error);
      }
    );
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