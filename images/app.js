var app = angular.module('myApp', []);
var app3 = angular.module('AppMarketApp', []);
var app2 = angular.module('GalleryApp', ['ngRoute']);

app2.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: "HomeController",
      templateUrl: "views/home.html"
    })
    .when('/photos/:id', {
      controller: 'PhotoController',
      templateUrl: 'views/photo.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});

