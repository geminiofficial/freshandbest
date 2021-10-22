
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope,$http) {

    $scope.submitForm = function() {
        // $scope.username = "Vishnu";
        // $scope.number = "888888";
        // $scope.message = "HI";
        if ($scope.username == undefined){
            $scope.username= "";
        }
        if ($scope.number == undefined){
            $scope.number= "";
        }
        if ($scope.message == undefined){
            $scope.message= "";
        }
        $scope.a = "My Name is "+$scope.username
        $scope.b = "and My Number is "+$scope.number,
        $scope.c = "Message "+$scope.message
        $scope.data = $scope.a +" "+$scope.b +", "+$scope.c; 
    }
});

