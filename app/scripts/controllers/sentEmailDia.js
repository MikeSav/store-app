'use strict';

angular.module('storeAppApp')

    .controller('SentEmailCtrl', function ($scope, email) {
        $scope.email = email.email;

        // send email to REST service!
    });