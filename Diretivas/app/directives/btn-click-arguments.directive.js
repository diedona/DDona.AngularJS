(function () {
    'use strict';
    angular
        .module('app')
        .directive('btnClickArguments', btnClickArguments);

    btnClickArguments.$inject = [];
    function btnClickArguments() {
        return {
            restrict: 'A',
            scope: {
                hide: '@btnClickArguments'
            },
            link: function ($scope, element, attrs) {
                element.bind('click', function () {
                    alert('Você clicou em mim (arguments), passando o argumento como ' + $scope.hide + '!');
                    var el = angular.element(element);
                    el.text('Obrigado pelo click!');
                });
            }
        }
    }
}());