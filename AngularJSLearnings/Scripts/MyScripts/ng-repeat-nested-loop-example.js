/// <reference path="../script.js" />
var ngApp = angular
    .module("myModule",[])
    .controller("myController", function ($scope) {
        var countries = [
            {
                name: "USA",
                cities: [
                    { name: "New York" },
                    { name: "Los Angels" },
                    { name: "New Jersey" }
                ]
            },
            {
                name: "UK"
            },
            {
                name: "India"
            }
        ];
        $scope.countries = countries;
    });
