( function() {
    'use strict';

    var sceneGrid = function( $scope, $http ) {
        this.bootStrapColors = ["90A6BE","2A426A","DB843C","8C7A41","EDD779","BE4931","FBB07D","8CBF3E","65BAAD"];
    };

    var closetColors = function( $scope, $http ) {
        this.bootStrapColors = ["90A6BE","2A426A","DB843C","8C7A41","EDD779","BE4931","FBB07D","8CBF3E","65BAAD"];
        $scope.allColors = ["90A6BE","2A426A","DB843C","8C7A41","EDD779","BE4931","FBB07D","8CBF3E","65BAAD","D1CEBD","2F3F37","A9593A","EDD779","8CBF3E","9C8F76","e3ddd6","d7493e","b9af5b","a6a99c","555c64","ebcfcb","b9af5b","3b363e","774642","c8e1e6","eff0ec","8ec800","7e8690","44aac2","3b363e","90b0ad","aa8f52","a786a0","cd2e4d","324038","cc8f84","d3c60f","1a3d61","453e41","91754d","b4a2b7","908c85","bc9c9e","91754d","4e4247","35468a","b93c7f","90A6BE","2A426A","DB843C","8C7A41","EDD779","BE4931","FBB07D","8CBF3E","65BAAD","D1CEBD","2F3F37","A9593A","EDD779","8CBF3E","9C8F76","e3ddd6","d7493e","b9af5b","a6a99c","555c64","ebcfcb","b9af5b","3b363e","774642","c8e1e6","eff0ec","7e8690","44aac2","3b363e","90b0ad","aa8f52","a786a0","cd2e4d"];

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
                    $scope.closestColorHexes.push( color.rgb.r + ', ' + color.rgb.g + ', ' + color.rgb.b );
                }
            } );
        };
    };


    var dreamInColor = angular.module('dreamInColor', [])
        .factory('closetColors',[closetColors])
        .controller('SceneGrid', ['$scope', '$http', sceneGrid]);

}());

/*

ng-show="model.state"
ng-hide="model.state"
ng-src="model.property"
{{ value | filter:options }}
    filters:
        currency
        date:'MM/dd/yyyy @ h:mma(p)'
        uppercase / lowercase
        limitTo: 8
        orderBy: 'property' ('-property' for descending order)

ng-click="expression"
    Tabbed UI example:
        ng-click="tab = this.index"
        bg-show="tab === this.index"
        ng-class="{ active:tab === this.index }"
        ng-init="tab = 1"





 app.controller('PanelController', function() {
     this.tab = 1;
     this.setTab = function(setTab) {
        this.tab = setTab;
     };
     this.isSet = function(checkTab) {
        return this.tab === checkTab;
     };
 });

<div ng-controller="PanelController as panel">
<li ng-class="{active: this.isSet(model.index)}">
    <a href ng-clcick="panel.setTab(model.index)">Copy</a>
</li>

 */