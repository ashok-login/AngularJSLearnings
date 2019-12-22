/// <reference path="../angular.js" />

var myApp = angular.module('myModule', [])
    .controller('myController', function ($scope) {
        var employees = [
            { name: 'Venkat', dob: new Date("February 01, 1954"), gender: "Male", salary: "100000" },
            { name: 'Roja', dob: new Date("December 17, 1979"), gender: "Female", salary: "100000" },
            { name: 'RaviM', dob: new Date("February 26, 1973"), gender: "Male", salary: "40000" },
            { name: 'Ravi', dob: new Date("January 26, 1973"), gender: "Male", salary: "440000" },
            { name: 'Ramesh', dob: new Date("March 26, 1973"), gender: "Male", salary: "240000" },
            { name: 'Padmakumar', dob: new Date("April 26, 1973"), gender: "Male", salary: "200000" },
            { name: 'Chalapathi', dob: new Date("June 26, 1979"), gender: "Male", salary: "340000" },
            { name: 'Another', dob: new Date("July 09, 1978"), gender: "Male", salary: "150000" }
        ];
        $scope.employees = employees;
    });
