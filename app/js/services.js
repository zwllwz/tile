'use strict';

/* Services */

var newsServices = angular.module('newsServices', ['ngResource']);

newsServices.factory('News',['$resource', 
  function($resource){
    return $resource();


}]);

