require(["../Cesium-1.57/Source/Cesium.js"], (Cesium) => {
    const viewer = new Cesium.Viewer("cesiumContainer");

    const dashLine = viewer.entities.add({
        name : '蓝色虚线',
        polyline : {
            positions : Cesium.Cartesian3.fromDegreesArrayHeights([
                -75, 45, 500000,
                -125, 45, 500000
            ]),
            width : 2,
            material : new Cesium.PolylineDashMaterialProperty({
                color: Cesium.Color.CYAN,  // 青色; 蓝绿色
                dashPattern: 43690.0,
                dashLength: 50
            })
        }
    })

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

    viewer.zoomTo(dashLine);
})
