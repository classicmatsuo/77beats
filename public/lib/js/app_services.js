var flickrapp = angular.module('flickrServices', ['ngResource']);

flickrapp.factory('Flickr', function($http, $q){
    var self = this;
    self.perPage =  50;
    self.api_key = "0bfff1a8f6ecc14cfa6db3368d335eff";
    // self.group_id = "690464@N25";
    self.photoset_id = "72157671629165596";
    self.user_id = "95780957@N08";
    self.base_url= "https://api.flickr.com/services/rest/";
    

    self.search = function(search, page){
        var deferred = $q.defer();

        var params = {
            api_key: self.api_key,
            // group_id: self.group_id,
            photoset_id: self.photoset_id,
            user_id: self.user_id,
            per_page: self.perPage,
            format: 'json',
            nojsoncallback: 1,
            page: (page != null && page > 0) ? page : 1,
            // method: (search != null && search.length > 0) ? 'flickr.photos.search' : 'flickr.photos.getRecent'
            // method: 'flickr.groups.pools.getPhotos'
            method: 'flickr.photosets.getPhotos'
        };

        // if ((search != null && search.length > 0)) {
        //     params.text = search;
        // }

        $http({method: 'GET', url: self.base_url, params: params}).
            success(function(data, status, headers, config) {
                 deferred.resolve(data);
            }).
            error(function(data, status, headers, config) {
                deferred.reject(status);
             });

        return deferred.promise;

    }
    return this;
});