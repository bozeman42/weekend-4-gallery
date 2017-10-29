var galleryApp = angular.module('myApp',[]);

galleryApp.controller('GalleryController',function($http,$window){
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
  
  gc.screenWidth = $window.innerWidth;
  if (gc.screenWidth >= 992) {
    gc.perRow = 3;
  } else {
    gc.perRow = 2;
  }

  gc.toggleComments = function(image,index){
    $http.put('/gallery/comments/toggle/'+index)
    .then(
      function success(response){
        gc.refreshGallery();
        console.log('PUT comments/toggle request success',response);
      },
      function error(error){
        console.log('PUT comments/toggle request failed',error);
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
      showComments: false,
      comments: [],
      newComment: ''
    };
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

  gc.addComment = function(image,index){
    var comment = {
      newComment: image.newComment
    };
    $http.put('/gallery/comment/'+index,comment)
    .then(
      function success(response){
        console.log("Comment add success",response)
        gc.refreshGallery();
        image.newComment = '';
      },
      function error(error){
        console.log("Error adding comment",error);
      }
    );
  };

});