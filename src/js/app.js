( function() {
    'use strict';

    //var sceneGrid = function($scope) {
    //    $scope.bootStrapColors = ["90A6BE","2A426A","DB843C","8C7A41","EDD779","BE4931","FBB07D","8CBF3E","65BAAD"];
    //};

    angular.module('dreamInColor', ['colorList', 'favoriteList', 'sceneGrid', 'colorDetail'])
        .controller('DreamInColorApp', function($scope) {
            $scope.appState =
            {
                isColorDetailDisplayed: false,
                currentDetailColor: 'cdf',
                historyColors: ["D1CEBD","2F3F37","A9593A","EDD779","8CBF3E","9C8F76","e3ddd6","FBB07D","65BAAD"],
                favoriteColors: ['f00'],
                isFavoritesViewerDisplayed: false
            };
        })


}());