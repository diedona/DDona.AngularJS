(function () {
    'use strict';
    angular
        .module('app')
        .controller('MainController', MainController);

    MainController.$inject = [];
    function MainController() {
        var vm = this;
        vm.alertMessage = alertMessage;

        //////////////////////////////////////////////////////////////////////////

        function alertMessage(number) {
            for (var i = 0; i < number; i++) {
                alert('Mensagem ' + (i+1));
            }
        }
    }
}());