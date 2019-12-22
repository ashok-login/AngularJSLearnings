var myModule = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {
        var employees = [
            { name: "Venkat", dob: new Date("February 1, 1954"), city: "Visakhapatnam" },
            { name: "Jaya Lakshmi", dob: new Date("December 2, 1959"), city: "Therlam" },
            { name: "Ashok", dob: new Date("July 09, 1978"), city: "Hyderabad" },
            { name: "Roja Rani", dob: new Date("December 17, 1979"), city: "Bangalore" }
        ];
        $scope.employees = employees;

        $scope.searchFunction = function (item) {
            if ($scope.searchText == undefined) {
                return true;
            }
            else {
                if (item.name.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 ||
                    item.city.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1) {
                    return true;
                }
            }
        }
    });