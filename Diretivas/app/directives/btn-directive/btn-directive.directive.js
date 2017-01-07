(function () {
    'use strict';
    angular
        .module('app')
        .directive('btnDirective', btnDirective);

    btnDirective.$inject = [];
    function btnDirective() {
        return {
            restrict: 'E',
            bindToController: {
                text: "@"
            },
            replace: true,
            templateUrl: 'app/directives/btn-directive/btn-tpl.html',
            controller: 'BtnDirectiveController as btnController'
        };
    }
}());