var myApp = angular.module('myApp', ['ngRoute', 'flickrServices']);

// controller //
myApp.controller('MainController',['$scope', '$http', '$location', '$routeParams', 'Flickr', function($scope, $http, $location, $routeParams, Flickr){
  $scope.selectedArtist = "";

  // retrieve json data //
  $http.get('/lib/js/eventlist.json').success(function(data){
    $scope.artists = data;
  });
  $http.get('/lib/js/locations.json').success(function(data){
    $scope.locations = angular.fromJson(data);
  });
  $http.get('/lib/js/infoWindowContent.json').success(function(data){
    $scope.infoWindowContent = data;
  });

  // create dynamic page based upon selection //
  $scope.viewmore = function(artist){
    $scope.selectedArtist = artist;
    $location.path('/artistfull');
  };

  // timestamp
  $scope.ts = Math.round((new Date()).getTime() / 1000);

  //Flick api
  $scope.photos = [];
  $scope.currentPhoto = null;
  $scope.prevPhoto = null;
  $scope.nextPhoto = null;
  $scope.currentPhotoSrc = '';
  $scope.text = '';
  $scope.modalOpened = null;
  $scope.search = function(search, page){
      $scope.loading = true;
      var promise = Flickr.search(search, page);
      promise.then(function(data) {
          $scope.photos = data.photoset;
          $scope.photos = data.photoset.photo;
          $scope.page = data.photoset.page;
          $scope.pages = data.photoset.pages;
          $scope.total = data.photoset.total;
          $scope.paginator();
          $scope.loading = false;

      }, function(err) {
          console.log('Failed: ' + err);
          $scope.loading = false;
      });
  }
  $scope.selectPhoto = function(id){
      $('.photoModal').modal('hide');
      console.log('redirect: ' + id);
      $location.path( '/flickr/' + String(id) );
  }

  $scope.isModalOpened = function(){
      console.log($('.photoModal').hasClass('in'));
  }

  $scope.loading = true;

  $scope.paginator = function(){
      var self = this;
      var currentPage = $scope.page;
      var totalPages = $scope.pages;
      var pageNav = [];

      for(var i=1;i <= totalPages;i++){
        if(i >= currentPage - 4 && i < currentPage + 4 ){
            pageNav.push({text: i, number: i, current: true});
        }
      }
      $scope.pageNav = pageNav;
  }

  $scope.openModal = function(){
      var self = this;
      $('.photoModal').modal('show');
      if($scope.modalOpened) return;


      $('.photoModal').modal('show');
      $('.photoModal').on('hide.bs.modal', function (e) {
          $scope.modalOpened = false;
          $location.path('/');
      });
      $scope.modalOpened = true;
  },

  $scope.setCurrentPhoto = function(id){
      var currentIndex = 0;
      var currentPhoto = null;
      angular.forEach($scope.photos, function(value, index){
          if (value.id == id){
              currentPhoto = value;
              currentIndex = parseInt(index);
              return;
          }
      });
      $scope.currentPhoto = (currentPhoto)? currentPhoto  : null ;
      $scope.prevPhoto = (currentIndex -1 >= 0)? $scope.photos[currentIndex - 1]  : null ;
      $scope.nextPhoto = ((currentIndex + 1) <= $scope.photos.length)? $scope.photos[currentIndex + 1]  : null ;
      $scope.currentPhotoSrc = (currentPhoto)?'http://farm' + $scope.currentPhoto.farm + '.static.flickr.com/' + $scope.currentPhoto.server + '/' + $scope.currentPhoto.id + '_' + $scope.currentPhoto.secret + '_z.jpg' : null;
  }
  $scope.search();

}]);

//directive //
myApp.directive('gmap', function() {
  var link = 
  function link(scope, element, attrs) {

    var allMyMarkers = [];
    var map; 
    
    function initMap() {
      //inherited from MainController
      var locations = scope.locations;
      var infoWindowContent = scope.infoWindowContent;

      var infoWindow = new google.maps.InfoWindow(), marker, i;

      var mapOptions = {
          center: new google.maps.LatLng(41.85, -87.649),
          zoom: 12,
          scrollwheel: false,
          mapTypeId: google.maps.MapTypeId.ROAD,
          mapTypeControl: false,
      };
      
      map = new google.maps.Map(element[0], mapOptions);

      // draw marker on map
      for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map,
            id: i
        });
        allMyMarkers.push(marker);

        // Allow each marker to have an info window    
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
        })(marker, i));
      }

      // map marker animation
      function toggleBounce(selectedID) {
        var pinID = selectedID.split('_');
        // loop through our array & check with marker has same ID with the text
        for(var j=0;j<allMyMarkers.length;j++){
            if(allMyMarkers[j].id == pinID[1]){
                if (allMyMarkers[j].getAnimation() != null) {
                        allMyMarkers[j].setAnimation(null);
                } else {
                        allMyMarkers[j].setAnimation(google.maps.Animation.BOUNCE);
                        map.setCenter(allMyMarkers[j].getPosition());
                }
                break; // stop continue looping
            }
        }// end toggleBounce
      }; 
    
    var tbounce = function(){
      $('.eventbox').hover(function(){
        var selectedID = $(this).attr('id');
        toggleBounce(selectedID);
      });
    };
    setTimeout(tbounce, 500);

    };

    // init & construct the map
    initMap();

  }
  return {
    restrict: 'EA',
    replace: true,
    scope: false,
    template: '<div id="map-canvas"></div>',
    link: link
  };
});

