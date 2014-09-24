"use strict";

var app = angular.module("direct", []);

app.controller("MainController", function($scope){
	$scope.side = "small";
	var sm = StateMachine.create({
		initial: "small",
		events: [
			{ name: "left", from: "large", to: "small" },
			{ name: "left", from: "small", to: "closed" },
			{ name: "right", from: "closed", to: "small" },
			{ name: "right", from: "small", to: "large" },
			{ name: "close", from: ["small", "large"], to: "closed" }
		],
		callbacks: {
			onenterlarge: function(){
				$scope.side = "large";
			},
			onentersmall: function(){
				$scope.side = "small";
			},
			onenterclosed: function(){
				$scope.side = "closed";
			}
		}
	});
	$scope.decrease = function(){
		sm.left();
	};
	$scope.increase = function(){
		sm.right();
	};
	$scope.close = function(){
		sm.close();
	}
});