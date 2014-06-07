'use strict';

angular.module('rubygemsChartsApp')
  .controller('MainCtrl', function ($scope, $location, $routeParams, RubyGemsApi) {
    $scope.buildChart = function() {
      RubyGemsApi.fetchDownloadStats($scope.gemName).success(function(response) {
        var rows = [];
        for (var i = 0; i < response.data.length; i++) {
          var version = response.data[i];
          rows.unshift({
            c: [ { v: version.number }, { v: version.downloads_count } ]
          });
        }

        $scope.rubyGemVersionsChart = {
          type: 'LineChart',
          data: {
            cols: [
              {id: 't', label: 'Versions',  type: 'string'},
              {id: 's', label: 'Downloads', type: 'number'}
            ],
            rows: rows
          }
        };
      });
    };

    $scope.loadGemStats = function() {
      $location.path($scope.gemName);
    };

    $scope.gemName = $routeParams.gemName;
    if ($scope.gemName) {
      $scope.buildChart($scope.gemName);
    }
  });
