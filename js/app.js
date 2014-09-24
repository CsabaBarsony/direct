"use strict";

var app = angular.module("direct", []);

app.controller("MainController", function($scope){
	$scope.side = "closed";
	$scope.decrease = function(){
		if($scope.side === "large"){
			$scope.side = "small";
		}
		else if($scope.side === "small"){
			$scope.side = "closed";
		}
	};

	$scope.increase = function(){
		if($scope.side === "closed"){
			$scope.side = "small";
		}
		else if($scope.side === "small"){
			$scope.side = "large";
		}
	};
});