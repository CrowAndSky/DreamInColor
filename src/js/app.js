( function() {
    'use strict';

    var sceneGrid = function($scope, $http) {
        this.bootStrapColors = ["90A6BE","2A426A","DB843C","8C7A41","EDD779","BE4931","FBB07D","8CBF3E","65BAAD"];
    };

    var colorList = function() {
        this.bootStrapColors = ["90A6BE","2A426A","DB843C","BE4931","FBB07D","8CBF3E","65BAAD"];
    };

    angular
        .module('dreamInColor', [])
        //.factory('closetColors',[closetColors])
        .controller('ColorList', ['$scope', '$http', colorList])
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