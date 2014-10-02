'use strict';

/* Controllers */
var newsControl = angular.module('newsControllers',['ngCookies']);

newsControl.controller('NewsCtrl',['$scope','$http', '$cookieStore', 
  function($scope, $http, $cookieStore) {
    // Get JSON string of selectedCaptions dictionary, transfer it to object.
    // If cookie not set, use empty dictionary.
    $scope.captionQuery = angular.fromJson($cookieStore.get('selectedCaptions')) || {};

    $http.get('phones/tiles.json').success(function(data){
      $scope.newsList = data.Tiles;
    });
  }
]);