"use strict";

var app = angular.module("direct", []);

app.controller("MainController", function($scope){
	$scope.data = {
		name: "Csati"
	};

	$scope.click = function(){
		$scope.data.name = "clicked";
	};
});

app.directive("child", function(){
	return {
		templateUrl: "html/child.html",
		scope: {
			prop1: "="
		},
		link: function(scope){
			scope.click = function(){
				scope.prop1.name = "clicked in child";
			};
		}
	}
});