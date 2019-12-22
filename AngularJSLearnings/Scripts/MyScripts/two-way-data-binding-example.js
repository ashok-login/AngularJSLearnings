/// <reference path="../angular.js" />
var myApp = angular
    .module("myModule",[])
    .controller("myController", function ($scope) {
        var emp = {
            firstName: "Ashok",
            lastName: "Kumar",
            gender: "Male"
        };
        $scope.emp = emp;
    });
