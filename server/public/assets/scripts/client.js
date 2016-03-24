var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(["$routeProvider", function($routeProvider){
    $routeProvider.
        when("/home", {
            templateUrl: "/views/routes/home.html",
            controller: "HomeController"
        }).
        when("/cats", {
            templateUrl: "/views/routes/cats.html",
            controller: "CatController"
        }).
        otherwise({
            redirectTo: 'home'
        });
}]);

myApp.controller("HomeController", ["$scope", "CatService",  function($scope, CatService){
  console.log(CatService.data);
  $scope.data = CatService.data;
  CatService.makeCall();

}]);

myApp.controller("CatController", ["$scope", "CatService", function($scope, CatService){

}]);

myApp.factory("CatService", ["$http", function($http){
  var makeCall = function(){
    if(data.results === undefined){
      console.log("Get happened");
      $http.get('/data').then(function(results){
          console.log(results);
          data.results = results.data;
      });
    }

  };

  var data = {};

  return {
    makeCall : makeCall,
    data : data
  };
}]);
