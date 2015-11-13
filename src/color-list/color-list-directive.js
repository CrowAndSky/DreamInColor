( function() {

'use strict';

angular.module('colorList')
    .directive('colorListItems', function() {
        return {
            restrict: 'E',
            templateUrl: './color-list/color-list.html',
            controller: function($scope) {
                var thatAppState = $scope.appState;

                this.setCurrentColor = function(newColor) {
                    //console.log("clkicked");
                    //console.log(newColor);
                    thatAppState.bootStrapColors = [newColor];
                };
                //appState.isColorDetailDisplayed" style="background-color:#{{appState.currentDetailColor

            },
            controllerAs: 'colorListItems'
    };

});

}());