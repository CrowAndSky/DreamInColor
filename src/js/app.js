( function() {
    'use strict';

    // "90A6BE","2A426A","DB843C","8C7A41","EDD779","BE4931","FBB07D","8CBF3E","65BAAD","D1CEBD","2F3F37","A9593A", "EDD779","8CBF3E","9C8F76", "e3ddd6","d7493e","b9af5b","a6a99c","555c64",  "ebcfcb","b9af5b","3b363e","774642","c8e1e6","eff0ec","8ec800","7e8690","44aac2","3b363e","90b0ad","aa8f52","a786a0","cd2e4d","324038","cc8f84","d3c60f","1a3d61","453e41","91754d","b4a2b7","908c85","bc9c9e","91754d","4e4247","35468a","b93c7f","90A6BE","2A426A","DB843C","8C7A41","EDD779","BE4931","FBB07D","8CBF3E","65BAAD","D1CEBD","2F3F37","A9593A","EDD779","8CBF3E","9C8F76","e3ddd6","d7493e","b9af5b","a6a99c","555c64","ebcfcb","b9af5b","3b363e","774642","c8e1e6","eff0ec","7e8690","44aac2","3b363e","90b0ad","aa8f52","a786a0","cd2e4d"

    angular.module('dreamInColor', ['colorList', 'favoriteList', 'sceneGrid', 'colorDetail'])
        .controller('DreamInColorApp', function($scope) {
            $scope.appState =
            {
                isColorDetailDisplayed      : false,
                currentDetailColor          : 'cdf',
                maxColorListLength          : 9,
                isFavoritesViewerDisplayed  : false,
                historyColors               : ["c8e1e6","b9af5b","A9593A","9C8F76","555c64","8CBF3E","3b363e","65BAAD","aa8f52"],
                favoriteColors              : []
            };
        })

}());