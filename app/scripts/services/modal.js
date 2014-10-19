/**
 * Modal Service (as a factory b/c we return an adapted service)
 */
angular.module('storeAppApp')

    .factory('modalService', function ($modal) {

        var modal = angular.copy($modal);

        modal.showBasket = function (basket, basketTotal, customerName) {

            var options = {
                templateUrl: 'views/modalBasket.html',
                controller: 'ShowBasketCtrl',
                resolve: {
                    basket: function () {
                        return {
                            basket: basket,
                            basketTotal: basketTotal,
                            customerName: customerName
                        };
                    }
                },
                windowClass: 'small'
            };
            return modal.open(options);
        };

        modal.basketError = function () {

            var options = {
                templateUrl: 'views/modalError.html',
                windowClass: 'small'
            };
            return modal.open(options);
        };

        modal.basketSuccess = function (product) {

            var options = {
                templateUrl: 'views/modalSuccess.html',
                controller: 'AddProductCtrl',
                resolve: {
                    product: function () {
                        return {
                            product: product
                        };
                    }
                },
                windowClass: 'small'
            };
            return modal.open(options);
        };

        modal.emailSuccess = function (email) {

            var options = {
                templateUrl: 'views/modalEmailSucess.html',
                controller: 'SentEmailCtrl',
                resolve: {
                    email: function () {
                        return{
                            email: email
                        };
                    }
                },
                windowClass: 'small'
            };
            return modal.open(options);
        };

        modal.logIn = function () {

            var options = {
                templateUrl: 'views/modalLogIn.html',
                controller: 'LogInCtrl',
                windowClass: 'small'
            };
            return modal.open(options);
        };

        return modal;

    });