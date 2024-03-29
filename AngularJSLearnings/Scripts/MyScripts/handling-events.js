﻿var myApp = angular.module("myModule", [])
    .controller("myController", function ($scope) {
        var technologies = [
            { name: "C#", likes: 0, dislikes: 0 },
            { name: "ASP.NET", likes: 0, dislikes: 0 },
            { name: "SQL Server", likes: 0, dislikes: 0 },
            { name: "Angular JS", likes: 0, dislikes: 0 }
        ];
        $scope.technologies = technologies;
        $scope.incrementLikes = function (technology) {
            return technology.likes++;
        }

        $scope.incrementDislikes = function (technology) {
            return technology.dislikes++;
        }
    });