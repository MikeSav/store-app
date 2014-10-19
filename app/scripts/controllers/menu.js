angular.module('storeAppApp')

    .controller('MenuCtrl', function ($scope, $window, modalService, $rootScope, authService) {

        $scope.loggedIn = false;
        $scope.showMenu = false;
        $scope.toggleMenu = function () {
            $scope.showMenu = !$scope.showMenu;
        };

        // we need to add a watch as we could resize the window and end up hiding the
        // menu if $scope.showMenu = false; and then the button is hidden by css

        $scope.widths = function () {
            if ($window.outerWidth > 400) {
                $scope.showMenu = true;
            } else {
                $scope.showMenu = false;
            }
        };

        angular.element($window).bind('resize', function () {
            $scope.widths();
            $scope.$apply();
        });

        // init the widths...
        $scope.widths();

        $scope.logIn = function () {
            modalService.logIn();
        };

        $scope.$on('LoggedIn', function () {
            $scope.loggedIn = authService.getLoggedIn();

        });

    });