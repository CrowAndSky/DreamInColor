( function() {
    'use strict';

    var sceneGrid = function($scope) {
        $scope.bootStrapColors = ["90A6BE","2A426A","DB843C","8C7A41","EDD779","BE4931","FBB07D","8CBF3E","65BAAD"];
    };

    angular.module('dreamInColor', ['colorList', 'sceneGrid'])
        .controller('DreamInColorApp', function($scope) {
            $scope.appState =
            {
                testString: "testString",
                bootStrapColors: ["000", "2A426A", "DB843C", "8C7A41", "EDD779", "BE4931", "FBB07D", "8CBF3E", "65BAAD"]
            }
            //$scope.bootStrapColors = ["90A6BE","2A426A","DB843C","8C7A41","EDD779","BE4931","FBB07D","8CBF3E","65BAAD"];
        })


}());