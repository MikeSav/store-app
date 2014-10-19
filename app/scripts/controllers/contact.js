angular.module('storeAppApp')

    .controller('ContactCtrl', function ($scope, $rootScope, modalService) {

        $scope.supportHTML5 =  $rootScope.html5Input;

        $scope.sendEmail = function (message) {


            console.log(message);
            // Dummy $http to send email

            // show model
            modalService.emailSuccess(message);

            // clear the form
            $scope.contactForm.$setPristine();
            $scope.message = {

                name: '',
                color: '',
                location: '',
                message: '',
                email: ''

            };
        };

    });

