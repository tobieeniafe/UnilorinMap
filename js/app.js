var app = angular.module('unilorinMap',['ngRoute']);
	
	app.config(function($routeProvider) {
	    $routeProvider
	    .when("/", {
	        templateUrl : 'templates/dashboard.html'
	    })
	    .when("/dashboard", {
	        templateUrl : 'templates/dashboard.html'
	    })
	    .when("/findme", {
	        templateUrl : "templates/findme.html"
	    })
	    .when("/getaround", {
	    	templateUrl : "templates/getaround.html"
	    })
	    .when("/settings", {
	    	templateUrl : "templates/settings.html"
	    })
	    .otherwise({
        	templateUrl : 'templates/dashboard.html'
    	});

	});

	app.controller("formCtrl", ['$scope', '$http', '$sce' ,function($scope, $http, $sce) {
        $scope.url = 'submit.php';
        this.places =  places;
        this.mode = mode;

        $scope.renderHtml = function (htmlCode) {
            return $sce.trustAsHtml(htmlCode);
        };

        $scope.formsubmit = function(isValid) {

            if (isValid) {
              

                $http.post($scope.url, {"origin": $scope.origin, "destination": $scope.destination, "mode": $scope.mode}).
                        success(function(data, status) {
                            //document.getElementById("link").innerHTML = data;
                            $scope.status = status;
                            $scope.data = data;
                            $scope.result = data; 
                        })
            }else{
                
                  console.log('Form is not valid');
            }

        }


    }]);

var mode = [
	{
		name: 'Driving',
		icon: '<i class="material-icons">&#xE531;</i>',
		value: 'driving'
	},
	{
		name: 'Walking',
		icon: '<i class="material-icons">&#xE536;</i>',
		value: 'walking'
	}
];

var places = [
	{
		name:'Auditorium',
		alias: 'university+of+ilorin+main+auditorium',
		location: {lat: 8.4793627, lng: 4.673671399999989},
		id: 'ChIJ0byJyxdLNhAR6mWscVqwtwk'

	},
	{
		name:'Unilorin Post Office',
		alias: 'unilorin+post+office',
		location: {lat: 8.4812616, lng: 4.672715100000005},
		id: 'ChIJ0a-h9xZLNhARk_ktf1_BRJA'
	},
	{
		name:'Unilorin Microfinance Bank',
		alias: 'unilorin+microfinance+bank+unilorin',
		location: {lat: 8.4789227, lng: 4.6742624},
		id: 'ChIJXVSDAxdLNhARBNFSdAxue6E'
	},
	{
		name:'Item 7 (PS)',
		alias: 'Item7+Restuarant+ilorin',
		location: {lat: 8.4805521, lng: 4.6695806},
		id: 'ChIJSUZrjxRLNhAR_NYIQ20N7t8'
	},
	{
		name:'Central Mosque',
		alias: '',
		id: 'ChIJG8wy_D1LNhAR5AD-__HbVxE'
	},
	{
		name:'University Library',
		alias: '',
		id: 'ChIJM6H4xRZLNhARDx8QUTb0L2E'
	},
	{
		name:'Faculty of CIS',
		alias: 'Faculty+of+CIS+ilorin',
		location: {lat: 8.4887671, lng: 4.6744679999999335},
		id: 'ChIJk7icIxBLNhARWW05fwbKZrk'
	},
	{
		name:'Faculty of Agriculture',
		alias: '',
		id: 'ChIJsylofxpLNhARzvYBo96dNZc'
	},
	// {
	// 	name:'Faculty of Engineering',
	// 	alias: '',
	// 	id: 'ChIJ0WJRMhdLNhARSV6HDhcnWc'
	// },
	{
		name:'Faculty of Life Science',
		alias: '',
		id: 'ChIJt7O9LhhLNhARGp0LACT3flU'
	},
	{
		name: 'Faculty of Arts',
		alias: '',
		id: 'ChIJi75gFRFLNhARGaXZeSQ5cVA'
	}
];
