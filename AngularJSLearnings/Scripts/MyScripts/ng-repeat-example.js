/// <reference path="../angular.js" />
var myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {
        var employees = [
            { firstName: "First Name 1", lastName : "Last Name 1", gender : "Male" },
            { firstName: "First Name 2", lastName : "Last Name 2", gender : "Male" },
            { firstName: "First Name 3", lastName : "Last Name 3", gender : "Male" },
            { firstName: "First Name 4", lastName : "Last Name 4", gender : "Female" },
            { firstName: "First Name 5", lastName : "Last Name 5", gender : "Female" },
            { firstName: "First Name 6", lastName : "Last Name 6", gender : "Female" },
        ];
        $scope.employees = employees;
    });
