const BASE_URL = "http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=57bf24c3942a509ae76819c5ba3f5fcc&format=json";

angular
  .module("mainApp", [])
  .controller("mainController", ["$scope", "$http",($scope, $http) => {
  
    $http({
    method: "GET",
    url: BASE_URL,
  }).then(response => {
    console.log(response.data);
    $scope.artists = response.data.artists.artist;
    console.log($scope.artists);
  })
}])