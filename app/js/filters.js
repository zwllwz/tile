'use strict';

/* Filters */
//cant inject $scope in filter
var newsFilter = angular.module('newsFilters',['ngCookies']);
newsFilter.filter('checkmark', ['$log', '$cookieStore',
  function($log, $cookieStore) {
    return function(input, selectedCaption) {
      // $scope.$log = $log;
      // $log.log(angular.toJson(input, true));
      var resultList = [];
      $log.log(selectedCaption);

      angular.forEach(input, function(news){
        if (selectedCaption[news.Caption]) {
          resultList.push(news);
        }
      });

      // Make a JSON string of selectedCaption dictionary, save the string
      // to cookiet.
      $cookieStore.put('selectedCaptions', angular.toJson(selectedCaption));
      return resultList;
    };

}]);