var galleryApp = angular.module('myApp',[]);

galleryApp.controller('GalleryController',function($http){
  var gc = this;
  gc.helloWorld = "Controller works.";
});