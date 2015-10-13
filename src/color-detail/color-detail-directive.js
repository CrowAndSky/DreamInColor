( function() {

    'use strict';

    angular.module('colorDetail')
        .directive('colorDetail', function() {
            return {
                restrict: 'E',
                templateUrl: './color-detail/color-detail.html',
                controller: function($scope) {
                    var thatAppState = $scope.appState;

                    this.hideDetailView = function(newColor) {
                        thatAppState.isColorDetailDisplayed = false;
                    };

                    this.addToFavorites = function(newColor) {
                        thatAppState.favoriteColors.unshift(newColor);
                        thatAppState.isColorDetailDisplayed = false;
                    };

                },
                controllerAs: 'colorDetail'
            };

        });

}());