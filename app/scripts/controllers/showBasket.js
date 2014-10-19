'use strict';

angular.module('storeAppApp')

    .controller('ShowBasketCtrl', function ($scope, basket, $rootScope) {
        $scope.basket = basket.basket;
        $scope.basketTotal = basket.basketTotal;

        if (basket.bcastName !== null) {
            $scope.customerName = basket.customerName;
        }
        /*
         * Below is the method if we wish to pull the basket from the Server.
         * If we do we must remember to include the 'dataService' as a dependency
         * in the above function with the other services/providers
         */

        /*
         dataService.getBasketFromServer().then(function (products) {
         $scope.basket = products;

         // if we get the products from the server we shall
         // generate the total here

         var basketTotal = 0;
         $scope.basket.forEach(function(item) {
         basketTotal += item.price;
         });

         $scope.basketTotal = basketTotal;
         });
         */

        $scope.removeItem = function (item) {
            // take the index
            var i = $scope.basket.indexOf(item);

            if (i !== -1) {
                $scope.basket.splice(i, 1);
            }

            // we need to update the total!
            $rootScope.$broadcast('itemRemoved');
        };

        $scope.$on('basketChange', function (event, arg) {
            $scope.basketTotal = arg.newTotal;
        });


    });