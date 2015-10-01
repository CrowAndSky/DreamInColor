( function() {
    'use strict';

    //var sceneGrid = function($scope) {
    //    $scope.bootStrapColors = ["90A6BE","2A426A","DB843C","8C7A41","EDD779","BE4931","FBB07D","8CBF3E","65BAAD"];
    //};

    angular.module('dreamInColor', ['colorList', 'sceneGrid', 'colorDetail'])
        .controller('DreamInColorApp', function($scope) {
            $scope.appState =
            {
                testString: "testString",
                isColorDetailDisplayed: false,
                currentDetailColor: 'cdf',
                historyColors: ["000", "2A426A", "DB843C", "8C7A41", "EDD779", "BE4931", "FBB07D", "8CBF3E", "65BAAD"],
                favoriteColors: ["FBB07D", "8CBF3E", "65BAAD"]
            };


            $scope.testCont = function() {
                console.log("clicked it 2 ----");
            };
            //$scope.bootStrapColors = ["90A6BE","2A426A","DB843C","8C7A41","EDD779","BE4931","FBB07D","8CBF3E","65BAAD"];
        })


}());