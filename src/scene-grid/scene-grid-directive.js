( function() {

    'use strict';

    angular.module('sceneGrid')
        .directive('sceneGridItems', function() {
            return {
                restrict: 'E',
                templateUrl: './scene-grid/scene-grid.html',
                controller: function($scope) {
                    $scope.bootStrapColors2 = ["90A6BE","2A426A","DB843C","BE4931","FBB07D","8CBF3E","65BAAD"];
                }
            };

        });

}());