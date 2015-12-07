( function() {

    'use strict';

    angular.module('sceneGrid')
        .directive('sceneGridItems', function() {
            return {
                restrict: 'E',
                templateUrl: './scene-grid/scene-grid.html',
                controller: function($scope) {
                    var thatAppState = $scope.appState;

                    this.displayColorDetail = function(currentColor, $event) {
                        $event.stopPropagation();
                        thatAppState.currentDetailColor = currentColor;
                        thatAppState.updateDetailColor();
                        thatAppState.isColorDetailDisplayed = true;
                    };

                    this.reloadSceneGrid = function() {
                        console.log("reload");
                        thatAppState.historyColors = ["c8e1e6","eff0ec","7e8690","44aac2","3b363e","90b0ad","aa8f52","a786a0","cd2e4d"];
                    };
                },
                controllerAs: 'sceneGridItems'
            };

        });

}());