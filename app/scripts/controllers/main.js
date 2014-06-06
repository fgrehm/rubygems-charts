'use strict';

angular.module('rubygemsChartsApp')
  .controller('MainCtrl', function ($scope, RubyGemsApi) {
    $scope.rubyGemVersions = [];
    RubyGemsApi.fetchDownloadStats('letter_opener').success(function(response) {
      $scope.rubyGemVersions = response.data;
    });
  });
