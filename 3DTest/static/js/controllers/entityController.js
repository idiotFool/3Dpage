define([
    "controllers/modules",
    "jquery"
], function(controllers){
    controllers.controller("entityController", function($rootScope, $scope){

        const scopeObj = {
            addPoint: function () {
                const point = $rootScope.viewer.entities.add({
                    name: "point",
                    position: Cesium.Cartesian3.fromDegrees(-100, 40, 0),
                    point: {
                        pixelSize: 50,
                        color: Cesium.Color.CYAN,
                        outlineWidth: 1
                    }
                });

                $rootScope.viewer.zoomTo(point);
            },
            addDashLine: function () {
                const dashLine = $rootScope.viewer.entities.add({
                    name : '蓝色虚线',
                    polyline : {
                        positions : Cesium.Cartesian3.fromDegreesArrayHeights([
                            -75, 45, 500000,
                            -125, 45, 500000
                        ]),
                        width : 2,
                        material: new Cesium.PolylineDashMaterialProperty({
                            color: Cesium.Color.CYAN,  // 青色; 蓝绿色
                            dashPattern: 43690.0,
                            dashLength: 50
                        })
                    }
                });

                $rootScope.viewer.zoomTo(dashLine);
            },
            addSolidLine: function () {
                const solidLine = $rootScope.viewer.entities.add({
                    name: 'solid line',
                    polyline: {
                        positions: Cesium.Cartesian3.fromDegreesArrayHeights([
                            -75, 43, 500000,
                            -125, 43, 500000
                        ]),
                        width: 2,
                        material: Cesium.Color.WHITE
                    }
                });

                $rootScope.viewer.zoomTo(solidLine);
            },
            addGlowLine: function () {
                const glowLine = $rootScope.viewer.entities.add({
                    name: 'glow line',
                    polyline: {
                        positions: Cesium.Cartesian3.fromDegreesArrayHeights([
                            -75, 39, 500000,
                            -125, 39, 500000
                        ]),
                        width: 10,
                        material: new Cesium.PolylineGlowMaterialProperty({
                            color: Cesium.Color.BEIGE,
                            outlineWidth: 5
                        })
                    }
                });
                $rootScope.viewer.zoomTo(glowLine);
            },
            addArrowLine(){
                const arrowLine = $rootScope.viewer.entities.add({
                    name: 'arrow line',
                    polyline: {
                        positions: Cesium.Cartesian3.fromDegreesArrayHeights([
                            -75, 41, 500000,
                            -125, 41, 500000
                        ]),
                        width: 10,
                        material: new Cesium.PolylineArrowMaterialProperty(Cesium.Color.CYAN)
                    }
                });

                $rootScope.viewer.zoomTo(arrowLine);
            },
            addBox: function () {
                const redBox = $rootScope.viewer.entities.add({
                    name: 'box',
                    position: Cesium.Cartesian3.fromDegrees(-100, 40, 500000),
                    box: {
                        dimensions: new Cesium.Cartesian3(400000.0, 400000.0, 300000.0),
                        material: Cesium.Color.RED
                    }
                });

                $rootScope.viewer.zoomTo(redBox);
            },
            addEllipse: function () {
                const ellipse = $rootScope.viewer.entities.add({
                    position: Cesium.Cartesian3.fromDegrees(-80, 42.0),
                    name: 'Red ellipse on surface with outline',
                    ellipse: {
                        semiMinorAxis: 300000.0,
                        semiMajorAxis: 300000.0,
                        height: 200000.0,
                        extrudedHeight: 300000,
                        fill: true,
                        material: "./static/images/kobe.jpg",
                        outline: true, //必须设置height，否则ouline无法显示
                        outlineColor: Cesium.Color.BLUE.withAlpha(0.5),
                    }
                });
                $rootScope.viewer.zoomTo(ellipse);
            },
            addRect: function () {
                const rect = $rootScope.viewer.entities.add({
                    name: "red rect",
                    polygon: {
                        hierarchy: Cesium.Cartesian3.fromDegreesArray([
                            -109.080842,45.002073,
                            -105.91517,45.002073,
                            -104.058488,44.996596,
                            -104.053011,43.002989,
                            -104.053011,41.003906,
                            -105.728954,40.998429,
                            -107.919731,41.003906,
                            -109.04798,40.998429,
                            -111.047063,40.998429,
                            -111.047063,42.000709,
                            -111.047063,44.476286,
                            -111.05254,45.002073]),
                        height: 0,
                        material: Cesium.Color.RED.withAlpha(0.5),
                        outline: true,
                        outlineColor: Cesium.Color.BLACK
                    }
                })
                $rootScope.viewer.zoomTo(rect);
            },
            addCylinder: function () {
                const cylinder = $rootScope.viewer.entities.add({
                    name: 'cylinder',
                    position: Cesium.Cartesian3.fromDegrees(-80, 40.0),
                    cylinder: {
                        heightReference: 0,
                        length: 500000,
                        topRadius: 5000,
                        bottomRadius: 5000,
                        material: Cesium.Color.CYAN
                    }
                })

                $rootScope.viewer.zoomTo(cylinder);
            }
        };

        for (let key of Object.keys(scopeObj)){
            $scope[key] = scopeObj[key]
        }
    });
});