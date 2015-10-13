( function() {

'use strict';

angular.module('favoriteList')
    .directive('favoriteListItems', function() {
        return {
            restrict: 'E',
            templateUrl: './favorite-list/favorite-list.html',
            controller: function($scope) {
                var thatAppState = $scope.appState;

                this.displayFavoritesViewer = function(focusFavorite) {
                    console.log("displayFavoritesViewer");
                    thatAppState.isFavoritesViewerDisplayed = true;
                    thatAppState.favoriteInFocus = focusFavorite;
                };
            },
            controllerAs: 'favoriteListItems'
    };

});

}());