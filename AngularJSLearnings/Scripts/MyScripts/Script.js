/// <reference path="../angular.js" />
var myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {
        var myCountry = {
            name: "India",
            capital: "Delhi",
            flag: "/Images/IndiaFlag.png"
        }
        $scope.myCountry = myCountry;
    });