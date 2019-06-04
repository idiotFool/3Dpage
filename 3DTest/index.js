require([
    "../Cesium-1.57/Source/Cesium.js",
    "static/modules/measureAngle.js"
    ], (Cesium, measureAngle) => {
    const viewer = new Cesium.Viewer("cesiumContainer");

    const dashLine = viewer.entities.add({
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

    const solidLine = viewer.entities.add({
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

    const glowLine = viewer.entities.add({
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

    const arrowLine = viewer.entities.add({
        name: 'arrow line',
        polyline: {
            positions: Cesium.Cartesian3.fromDegreesArrayHeights([
                -75, 41, 500000,
                -125, 41, 500000
            ]),
            width: 10,
            material: new Cesium.PolylineArrowMaterialProperty(Cesium.Color.CYAN)
        }
    })

    const redBox = viewer.entities.add({
        name: 'box',
        position: Cesium.Cartesian3.fromDegrees(-100, 40, 500000),
        box: {
            dimensions: new Cesium.Cartesian3(400000.0, 400000.0, 300000.0),
            material: Cesium.Color.RED
        }
    });

    const ellipse = viewer.entities.add({
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

    const rect = viewer.entities.add({
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

    const positions = [[0, 2, 0], [0, 0, 0], [2, 0, 0]];
    console.log(measureAngle)
    measureAngle(positions)

    viewer.zoomTo(rect);
})
