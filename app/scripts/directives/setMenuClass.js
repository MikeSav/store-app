angular.module('storeAppApp')

    .directive('setMenuClass', function ($location) {
        return{
            restrict: 'A',
            link: function (scope, element) {

                var i,
                    list = angular.element(element).children();

                for (i = 0; i < list.length; i++) {
                    if($location.path() === list[i].firstChild.getAttribute('href')){
                        angular.element(list[i].firstChild).addClass('mikeClass');
                    }
                }
            }
        };
    });