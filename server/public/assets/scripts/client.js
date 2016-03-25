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

myApp.controller("HomeController", ["$scope", "CatService", function($scope, CatService){
    CatService.getData();
    $scope.data = CatService.personData;
}]);

myApp.controller("CatController", ["$scope", function($scope){

}]);

myApp.factory("CatService", ["$http", function($http){
    var makeCall = function(){
      if(data.results === undefined){
        console.log("GET EXECUTED");
        $http.get("/data").then(function(response){
            console.log(response);
            data.results = response.data;
            console.log(data);
        });
      }
    };


    var data = {};

    return {
        getData : makeCall,
        personData : data
    };
}]);
