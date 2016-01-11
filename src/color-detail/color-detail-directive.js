( function() {

    'use strict';

    angular.module('colorDetail')
        .directive('colorDetail', function() {
            return {
                restrict: 'E',
                templateUrl: './color-detail/color-detail.html',
                controller: function($http, $scope) {
                    var thatAppState = $scope.appState;

                    thatAppState.updateDetailColor();

                    this.isColorOnlyDisplayed = false;

                    this.hideDetailView = function(newColor) {
                        thatAppState.isColorDetailDisplayed = false;
                    };

                    this.addToFavorites = function(newColor) {
                        thatAppState.updateDetailColor();
                        thatAppState.favoriteColors.unshift(newColor);
                        thatAppState.isColorDetailDisplayed = false;
                        console.log("appState.isColorOnlyDisplayed: " + thatAppState.isColorOnlyDisplayed);
                        console.log(thatAppState.currentDetailColorRGBA);
                        console.log(thatAppState.currentDetailColorRGBzeroA);
                    };

                    //this.setColorOnlyDisplayed = function(newColor) {
                    //    thatAppState.isColorOnlyDisplayed = true;
                    //    //thatAppState.favoriteColors.unshift(newColor);
                    //    //thatAppState.isColorDetailDisplayed = false;
                    //    console.log("appState.isColorOnlyDisplayed: " + thatAppState.isColorOnlyDisplayed);
                    //};





                    /*

                    this.initDetail = function() {
                        console.log("ran initDetail");
                        $http.get('http://www.sherwin-williams.com/color-visualization/services/color/SW/all').
                            success(function(data, status, headers, config) {
                                console.log("data success");
                                //$scope.posts = data;
                                console.log(data);
                            }).
                            error(function(data, status, headers, config) {
                                console.log("error");
                                // log error
                        });

                    }

                    */



                },
                controllerAs: 'colorDetail'
            };

        });
}());