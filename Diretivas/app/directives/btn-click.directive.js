(function () {
    'use strict';
    angular
        .module('app')
        .directive('btnClick', btnClick);

    btnClick.$inject = [];
    function btnClick() {
        return {
            restrict: 'A',
            link: function ($scope, element, attrs) {
                element.bind('click', function () {
                    alert('Você clicou em mim!');
                });
            }
        }
    }
}());