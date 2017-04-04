(function() {
    var app = angular.module("industry", ['ngAnimate'])
        .controller('MainController', function($scope, $interval, $http) {
            $scope.intro1 = false;
            $scope.intro2 = false;
            $scope.intro3 = false;
            $scope.showDivIntro = false;
            $scope.questionCat = false;
            $scope.questionCat2 = false;
            $scope.classificationCat = false;
            $scope.catText = false;
            $scope.formQuest = false;

            $http.get('products.json')
                .then(function (res) {
                    $scope.todos = res.data;
                });

            $http.get('category.json')
                .then(function (result) {
                    $scope.categorys = result.data;
                });

            var showIt = function() {
                $scope.intro1 = true
            };

             var showIt2 = function() {
                 $scope.intro2 = true
             };

             var showIt3 = function() {
                 $scope.intro3 = true
             };

             $scope.go = function (index) {
                $scope.industrydef = $scope.todos[index];
                $scope.questionCat = true;
                $scope.questionCat2 = true;
            };

            $scope.go2 = function (index) {
                $scope.categorydef = $scope.categorys[index];
                $scope.catText = true;
                $scope.formQuest = true;
            };

            var startShow = function () {
                $interval(showIt, 1000, 3);
                $interval(showIt2, 2000, 6);
                $interval(showIt3, 3000, 9);
            };

            startShow();
    });
})();
