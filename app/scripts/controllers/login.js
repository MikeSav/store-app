'use strict';

angular.module('storeAppApp')

    .controller('LogInCtrl', function ($scope, authService) {

        $scope.login = function(user){

            authService.login(user).then(function(resp){
                // what is resp
                if(resp === 1){
                    // Close modal
                    $scope.$close();
                }

            });
        };


    });