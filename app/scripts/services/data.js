angular.module('storeAppApp')

    .service('dataService', function ($http) {

        // as I don't have a Rest Service I am reading the JSON from a static file,
        // obviously in production/real world we wouldn't do this
        this.getJsonData = function (start) {
            return $http.get('scripts/json/products.json').then(function (response) {
                // don't send back everything....
                var productData = response.data.slice(start, start + 15);
                return productData;
            });
        };

        // once again, I would use a rest service to return the products for the img gallery
        this.getGalleryData = function () {
            return $http.get('scripts/json/sofaImages.json').then(function (response) {
                return response.data;

            });
        };

        // please note that the success isn't tested... I didn't have a backend
        this.postProductToServer = function (item) {
            return $http({method: 'POST', url: '/some/rest/url/somewhere/', data: item}).then(function (response) {
                return 1; // success, return a 1
            }, function () {
                return 0; // fail, return a zero
            });
        };

    });