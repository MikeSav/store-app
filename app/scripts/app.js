/*

 ToDo: ng-animate for nicer UI
 ToDo: Preserve basket using localStorage Service
 ToDo: Add the grunt task html2js to improve performance, see READ-ME.txt  https://github.com/karlgoldstein/grunt-html2js
 ToDo: Different Style for menu button - that page current style....
 ToDo: Style Model Buttons a little better
 ToDo: Could improve product ajax load with some kind of loading message
 ToDo: Unit Tests...
 ToDo: More Browser Tests
 ToDo: Refactor SASS variables
 ToDo: Refactor Grant/NPM modules taken from Yeoman!

 */

'use strict';

angular.module('storeAppApp', [
        'ngRoute',
        'ui.bootstrap'
    ])
    .constant('useLocalStorageForBasket', false) // Use Local Storage for basket if possible, this we will implement later in a service
    .config(function ($routeProvider, $locationProvider, $httpProvider) {

        // set up CORS... this is for my rest service for login & server basket preservation
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];

        $locationProvider.html5Mode(true);

        // Only the main and contact routes are set up, others will produce a 404!
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/products', {
                templateUrl: 'views/products.html',
                controller: 'ProductsCtrl'
            })
            .when('/faq', {
                templateUrl: 'views/faq.html',
                controller: 'FaqCtrl'
            })
            .when('/contact', {
                templateUrl: 'views/contactBetter.html',
                controller: 'ContactCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }).run(function ($rootScope) {

        $rootScope.loggedInUser = false;

        // let's see if HTML5 inputs are supported - I didn't want to use Modernizr for a simple demo
        (function supportHTML5Input() {
            var i = document.createElement('input');
            i.setAttribute('type', 'color');

            if (i.type === 'text') {
                $rootScope.html5Input = false;
            } else {
                $rootScope.html5Input = true;
            }

        })();

    });

