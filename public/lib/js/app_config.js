// route config //
myApp.config( ['$routeProvider', '$locationProvider', function ( $routeProvider, $locationProvider ) {
  $routeProvider
    .when( '/home', { 
      templateUrl: '/views/home.html'
    } )
    .when( '/about', { 
      templateUrl: '/views/about.html'
    } )
    .when( '/aboutotsfm', { 
      templateUrl: '/views/aboutotsfm.html'
    } )
    .when( '/sponsors', { 
      templateUrl: '/views/sponsors.html'
    } )
    .when( '/artistfull', { 
      templateUrl: '/views/artistfull.html'
    } )
    .when('/flickr', {
      templateUrl: '/views/flickr.html'
    })
    .when('/flickr/:id', {
      templateUrl: '/views/flickr.html',
      reloadOnSearch: true,
      controller: function($scope, $routeParams, $location){
          $scope.setCurrentPhoto($routeParams.id);
          if(!$scope.currentPhoto || $scope.loading){
              $location.path('/flickr');
              return;
          }
          $scope.openModal();
      }
    })
    .otherwise( { 
      redirectTo: '/home'
    } );
    $locationProvider.html5Mode(true);
}]);

