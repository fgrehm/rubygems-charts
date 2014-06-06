'use strict';

angular.module('rubygemsChartsApp')
  .controller('MainCtrl', function ($scope, RubyGemsApi) {
    $scope.rubyGemVersions = [];
    $scope.loadGemStats = function() {
      RubyGemsApi.fetchDownloadStats($scope.gemName).success(function(response) {
        $scope.rubyGemVersions = response.data;
      });
    }
  });
