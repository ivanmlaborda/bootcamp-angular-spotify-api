angular.module('mainApp')
  .controller('ArtistSearchController', function ($scope, $rootScope) {
    $scope.getArtist = function () {
      var artistName = $scope.artist
      console.log(artistName)
      $rootScope.$broadcast('artistReady', { artistName: artistName })
    }
  })
