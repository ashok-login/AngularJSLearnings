/// <reference path="angular.js" />

var myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {
    var employee = {
        firstName: "Ashok",
        lastName: "Kumar",
        gender: "Male"
    };
    $scope.employee = employee;
});
