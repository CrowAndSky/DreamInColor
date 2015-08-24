( function() {

'use strict';

angular.module('colorList')
    .directive('colorListItems', function() {
        return {
            restrict: 'E',
            templateUrl: './color-list/color-list.html',
            controller: function($scope) {
                $scope.bootStrapColors = ["90A6BE","2A426A","DB843C","BE4931","FBB07D","8CBF3E","65BAAD"];
            }
    };

});

}());