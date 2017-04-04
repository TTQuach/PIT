var app = angular.module("industry", ["ngRoute"])
app.config(function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl: "index.html"
    })
    .when("/thankyou", {
        templateUrl: "thankyou.html"
    })
    .when("/about", {
        templateUrl: "about.html"
    });
});
