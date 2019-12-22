var myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {
        var employees = [
            { name: "Ravi", dob: new Date("January 26,1973"), gender: "Male", salary: "240000" },
            { name: "Roja", dob: new Date("17 December,1979"), gender: "Female", salary: "100000" },
            { name: "Another", dob: new Date("July 9,1978"), gender: "Male", salary: "150000" },
            { name: "Venkat", dob: new Date("February 1, 1954"), gender: "Male", salary: "100000" },
            { name: "Chalapathi", dob: new Date("January 26,1979"), gender: "Male", salary: "340000" },
            { name: "RaviM", dob: new Date("February 26,1973"), gender: "Male", salary: "40000" },
            { name: "Ramesh", dob: new Date("March 26, 1973"), gender: "Male", salary: "240000" },
            { name: "Padmakumar", dob: new Date("April 26,1973"), gender: "Male", salary: "200000" }
        ];
        $scope.employees = employees;
        $scope.sortElement = 'name';
        $scope.sortOrder = "+";
        $scope.sortColumn = function (column) {
            if ($scope.sortElement == column) {
                $scope.sortOrder = $scope.sortOrder == "+" ? "-" : "+";
            }
            else {
                $scope.sortOrder = "+";
                $scope.sortElement = column;
            }
            $scope.resultantSortColumn = $scope.sortOrder + $scope.sortElement;
            //alert('Resultant sort column: ' + $scope.resultantSortColumn);
        }

        $scope.showPointer = function () {
            alert('Executing...');
            document.getElementById('name').style.cursor = "pointer";
        }
    });
