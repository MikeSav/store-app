angular.module('storeAppApp')

    .service('authService', function ($http, $rootScope) {

        /* okay we need to send a request to log in and get back a result and hopefully a uui key....
         *
         * If the login ID matches the password, the server generates a unique token and sends it back
         * alongside the request and a 200 response code. If the login ID does not match the password,
         * the server responds to the request with a status code of 401.
         *
         * */

        this.login = function (user) {

            return $http({method: 'POST', url: 'http://127.0.0.1:3000/login', data: user})
                .then(function (response) {

                    // set up a local storage token

                    // broadCast is loggedIn - we have a match
                    $rootScope.loggedInUser = true;
                    $rootScope.$broadcast('LoggedIn');

                    return 1;
                }, function () {
                    // return http code
                    return 0;
                });

        };

        this.logout = function () {
        };

        this.getLoggedIn = function () {
            return  $rootScope.loggedInUser;
        };
    });
