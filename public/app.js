(function() {
    var app = angular.module("myApp", ['ngAnimate', 'duScroll', 'ui.router'])
        .config(function($stateProvider, $urlRouterProvider, $locationProvider){

            $urlRouterProvider.otherwise('/home');

            $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'home.html',
                controller: 'MainController'
            })
            .state('thankyou', {
                url: '/thankyou',
                templateUrl: 'thankyou.html'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'about.html'
            })
            .state('header', {
                url: '/header',
                templateUrl: 'header.html'
            })

            $locationProvider.html5Mode(true);
        })
        .controller('MainController', function($scope, $interval, $http, $document, $timeout, $state) {
            // No industry choice for now
            /*$http.get('products.json')
                .then(function (res) {
                    $scope.todos = res.data;
                });*/



            $http.get('category.json')
                .then(function (result) {
                    $scope.categorys = result.data;
                });

            /* Start het gesprek door elke seconde een bericht te tonen. */
             var showIt = function() {
                 $scope.intro1 = true
             };

             var showIt2 = function() {
                 $scope.intro2 = true
             };

             var showIt3 = function() {
                 $scope.intro3 = true
             };

             startShow = function () {
                 $interval(showIt, 1000, 3);
                 $interval(showIt2, 2000, 6);
                 $interval(showIt3, 3000, 9);
             };

             console.log($state.current.name);

             // Vuur de start functie af.
             if($state.current.name === "home"){
                 startShow();
             }

             /* Scroll naar het volgende gedeelte als de naam is ingevuld. */
             $scope.faseOne = function(){
                 $scope.showDivIntro = true;
                 $scope.questionCat2 = true;
                 // We moeten wachten tot het DOM element is aangemaakt (of daadwerkelijk op het scherm getoond wordt).
                 $timeout(faseOneScrollDown, 100);
             };

             faseOneScrollDown = function(){
                 var showDivIntroElement = angular.element(document.getElementById('showDivIntro'));
                 $document.scrollToElement(showDivIntroElement, 20, 1000);
             };

            /* Scroll naar het volgende gedeelte, fase twee
             $scope.go = function (index) {
                 $scope.industrydef = $scope.todos[index];
                 $scope.questionCat = true;
                 $timeout(faseTwoScrollDown, 100);
             };

             faseTwoScrollDown = function(){
                 var questionCatElement = angular.element(document.getElementById('questionCat'));
                 $document.scrollToElement(questionCatElement, 20, 1000);
             };
             */

             /* Scroll naar het laatste gedeelte, het eindformulier */
             $scope.go2 = function (index) {
                 $scope.categorydef = $scope.categorys[index];
                 $scope.catText = true;
                 $scope.formQuest = true;
                 $timeout(faseThreeScrollDown, 100);

             };

            faseThreeScrollDown = function(){
                var catTextElement = angular.element(document.getElementById('catText'));
                $document.scrollToElement(catTextElement, 20, 1000);
            };
        });
})();
