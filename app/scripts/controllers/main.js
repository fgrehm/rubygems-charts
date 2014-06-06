'use strict';

angular.module('rubygemsChartsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.rubyGemVersions = [
      { number: "1.0.0", downloads_count: 123 },
      { number: "2.0.0", downloads_count: 456 }
    ]
  });
