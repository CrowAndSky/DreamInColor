( function() {

    'use strict';

    angular.module('colorDetail')
        .directive('colorDetail', function() {
            return {
                restrict: 'E',
                templateUrl: './color-detail/color-detail.html',
                controller: function($scope) {
                    var thatAppState = $scope.appState;

                    thatAppState.updateDetailColor();

                    this.isColorOnlyDisplayed = false;

                    this.hideDetailView = function(newColor) {
                        thatAppState.isColorDetailDisplayed = false;
                    };

                    this.addToFavorites = function(newColor) {
                        thatAppState.updateDetailColor();
                        thatAppState.favoriteColors.unshift(newColor);
                        thatAppState.isColorDetailDisplayed = false;
                        console.log("test");
                        console.log(thatAppState.currentDetailColorRGBA);
                        console.log(thatAppState.currentDetailColorRGBzeroA);
                    };



                },
                controllerAs: 'colorDetail'




            };

        });

}());