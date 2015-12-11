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





                    /*



                     ( function() {
                     "use strict";

                     var ColorClosestCtrl = function( $scope, $http ) {
                     $http.get( "lib/urn-colors.json" ).success( function( data ) {
                     $scope.allColors = data;
                     } );

                     $scope.closestColorHexes = [];

                     $scope.red = 208;
                     $scope.green = 206;
                     $scope.blue = 192;

                     var THRESHOLD = 25;

                     var calculateDifference = function(r1, g1, b1, r2, g2, b2) {
                     var deltaR = (( r1 - r2 ) * ( r1 - r2 )) * 0.60,
                     deltaG = (( g1 - g2 ) * ( g1 - g2 )) * 0.40,
                     deltaB = (( b1 - b2 ) * ( b1 - b2 )) * 0.10;

                     return Math.sqrt( deltaR + deltaG + deltaB );
                     };

                     $scope.calc = function() {
                     $scope.closestColorHexes = [];
                     angular.forEach( $scope.allColors, function( color, key ) {
                     if( calculateDifference( $scope.red, $scope.green, $scope.blue, color.rgb.r, color.rgb.g, color.rgb.b ) < THRESHOLD ) {
                     $scope.closestColorHexes.push( color.rgb.r + ", " + color.rgb.g + ", " + color.rgb.b );
                     }
                     } );
                     };
                     };

                     var app = angular.module( "app", []);

                     app.controller( "ColorClosestCtrl", [ "$scope", "$http", ColorClosestCtrl] );
                     }());



                     */
                },
                controllerAs: 'sceneGridItems'
            };

        });

}());