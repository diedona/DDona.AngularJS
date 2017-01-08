(function () {
    'use strict';
    angular
        .module('app')
        .controller('BtnDirectiveController', BtnDirectiveController);

    BtnDirectiveController.$inject = [];
    function BtnDirectiveController() {
        var vm = this;
        vm.myClick = myClick;

        //////////////////////////////////////////////////////////////////////////

        function myClick() {
            vm.click();
        }
    }

}());