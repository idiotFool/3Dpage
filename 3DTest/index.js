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
            /*material : new Cesium.PolylineDashMaterialProperty({
                color: Cesium.Color.CYAN,  // 青色; 蓝绿色
                dashPattern: 43690.0,
                dashLength: 50
            })*/
        }
    })

    /*dashLine.polyline.material = Cesium.Material.fromType('PolylineDash', {
        color : new Cesium.Color(1.0, 0.0, 0.0, 1.0)
    })*/


    viewer.scene.primitives.add(new Cesium.Primitive({
        geometryInstances: new Cesium.GeometryInstance({
            geometry : new Cesium.PolylineGeometry({
                positions : Cesium.Cartesian3.fromDegreesArrayHeights([
                    -75, 45, 500000,
                    -125, 45, 500000
                ]),
                width : 10.0,
                vertexFormat : Cesium.PolylineMaterialAppearance.VERTEX_FORMAT
            })
        }),
        appearance: new Cesium.PolylineMaterialAppearance({
            material:Cesium.Material.fromType('PolylineDash')
        })
    }));

    viewer.zoomTo(dashLine);
})
