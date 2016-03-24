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

myApp.controller("HomeController", ["$scope", function($scope){
    console.log($scope.somethingAwesome);
    $scope.somethingAwesome = "AWESOME THING!";
    console.log($scope.somethingAwesome);
}]);

myApp.controller("CatController", ["$scope", "CatService", function($scope, CatService){
    CatService.shoutSomeCats();
    $scope.anything = CatService.cats;

    console.log($scope.somethingAwesome);
}]);

myApp.factory("CatService", ["$http", function($http){
    var someCats = "No Voodoo";
    var catShoutIndex = 0;
    var shoutyCats = function(){
        catShoutIndex++;
        console.log("SO MANY CATS! ", catShoutIndex);
    };

    return {
        //public
        cats : someCats,
        shoutSomeCats : shoutyCats
    };
}]);
