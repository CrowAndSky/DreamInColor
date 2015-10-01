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




                //this.testCont = function() {
                //    console.log("controller test");
                //};
                //
                //$scope.testString = "string1";
                //
                //this.localBootStrapColors = ["90A6BE","2A426A","DB843C","BE4931","FBB07D","8CBF3E","65BAAD"];
            },
            controllerAs: 'colorListItems'
    };

});

}());