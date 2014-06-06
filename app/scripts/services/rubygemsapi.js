'use strict';

angular.module('rubygemsChartsApp')
  .factory('RubyGemsApi', function($http) {
    var rgApi = {};

    rgApi.fetchDownloadStats = function(gemName) {
      var url = 'http://rubygems-jsonp.herokuapp.com/versions/' + gemName + '?callback=JSON_CALLBACK';
      return $http({
        method: 'JSONP',
        url:    url
      });
    };

    return rgApi;
  });
