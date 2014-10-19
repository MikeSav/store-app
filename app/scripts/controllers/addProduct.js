'use strict';

angular.module('storeAppApp')

    .controller('AddProductCtrl', function ($scope, product) {
        $scope.product = product.product;
    });