'use strict';

angular.module('storeAppApp')

    .controller('MainCtrl', function ($scope, dataService, modalService, $rootScope) {


        $scope.$on('$includeContentLoaded', function (evt) {
            //console.log(evt); // We're ready!
        });

        // New products array / image gallery
        dataService.getGalleryData().then(function (products) {
            $scope.newItems = products;
        });

        $scope.moveNewItem = function (direction) {

            if (direction === 'down') {
                // add the first item to the end
                $scope.newItems.push($scope.newItems[0]);
                // remove the first item
                $scope.newItems.shift();
            } else if (direction === 'up') {
                // add the last item to start of array
                $scope.newItems.unshift($scope.newItems[$scope.newItems.length - 1]);
                // pop the last item
                $scope.newItems.pop();
            }
        };

        // Load Featured Products
        $scope.dataPag = 0;
        dataService.getJsonData($scope.dataPag).then(function (products) {
            $scope.products = products;
        });

        $scope.loadMore = function () {
            // get another 15 products...
            $scope.dataPag = $scope.dataPag + 15;
            dataService.getJsonData($scope.dataPag).then(function (products) {
                $scope.products = $scope.products.concat(products);
            });
        };

        /*
         // This is if we wish to maintain the basket on the client...
         */
        $scope.basket = [];

        $scope.basket = [];
        $scope.addToBasket = function (item) {
            $scope.basket.push(item);
            modalService.basketSuccess(item);
        };

        $scope.showBasket = function () {
            // recalc the basket as a name may be added for discount without a change to the basket
            recalcBasket();
            modalService.showBasket($scope.basket, $scope.basketTotal, $scope.customerName);
        };

        // function to recal basket
        function recalcBasket() {
            var basketTotal = 0;

            $scope.basket.forEach(function (item) {
                basketTotal += item.price;
            });

            if (typeof($scope.customerName) !== 'undefined' && $scope.customerName.length > 0) {
                $scope.basketTotal = (basketTotal * 0.9) + (0.009);
            } else {
                $scope.basketTotal = basketTotal;
            }

            $rootScope.$broadcast('basketChange', { newTotal: $scope.basketTotal });
        }

        // calculate the total...
        $scope.$watch('basket', recalcBasket, true);

        // item has been removed
        $scope.$on('itemRemoved', function () {
            recalcBasket();
        });


        /*
         //  This is if we want to send products and maintain on the server
         */

        /*
         $scope.addToBasket = function (item) {
         dataService.postProductToServer(item).then(function (response) {
         if (response === 1) {
         modalService.basketSuccess();
         } else if (response === 0) {
         modalService.basketError();
         }
         });
         };
         */

    });
