'use strict';
var phonecatApp = angular.module('phonecatApp',[]);
phonecatApp.controller('PhoneListCtrl', function PhoneListCtrl($scope, $http) {
/*	$scope.phones = [
    {"name": "Nexus S",
     "snippet": "Fast just got faster with Nexus S.",
 	 "age":0},
    {"name": "Motorola XOOM™ with Wi-Fi",
     "snippet": "The Next, Next Generation tablet.",
 	 "age":1},
    {"name": "MOTOROLA XOOM™",
     "snippet": "The Next, Next Generation tablet.",
 	 "age":2}
	];*/

	$http.get('../scripts/config/phones.json').success(function(data){
		$scope.phones = data;// data.splice(0, 5);//
	});

	$scope.hello = "Hello World!";
	$scope.orderProp = "age";
});
