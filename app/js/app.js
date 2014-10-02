(function() {
  var newsApp = angular.module('news', [
      'ngRoute',
      'newsControllers',
      'newsFilters'
    ]);

  newsApp.config(['$routeProvider', 
    function($routeProvider){
      $routeProvider.
      when('/news', {
        templateUrl: 'partials/news-list.html',
        controller: 'NewsCtrl'
      }).
      otherwise({
        redirectTo: '/news'
      });



    }]);

})();



