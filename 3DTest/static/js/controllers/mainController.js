define([
    "controllers/modules",
    "cesium"
], function(controllers, Cesium){
    controllers.controller("mainController", function($rootScope, $scope){
        $rootScope.viewer = new Cesium.Viewer("cesiumContainer", {
            fullscreenButton: false,
            homeButton: false,
            timeline: false,
            navigationHelpButton: false,
            sceneModePicker: false,
            baseLayerPicker: false,
            geocoder: false,
            animation: false,
        });
    })
});