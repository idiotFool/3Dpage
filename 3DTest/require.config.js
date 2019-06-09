require.config({
    paths : {
        "angular": "static/lib/angular/angular",
        "domReady": "static/lib/require/domReady",
        "uiRouter": "static/lib/angular/angular-ui-router",
        "cesium": "../Cesium/Cesium",
        /* "domReady" : "static/lib/require/domReady",
       "controllerModel": "static/modules/controllers",
       "mainController": "static/modules/mainController",
       "navController": "static/modules/navController",
       "cesiumController": "static/modules/entityController",
       "jquery": "static/lib/jquery-2.1.1/jquery.min"*/
    },
    shim : {
        "angular" : {
            exports : "angular"
        },
        "cesium": {
            exports: "Cesium"
        },
        "uiRouter": {
            deps : ["angular"]
        }
    },
    deps: [
        './bootstrap.js'  //kick start application
    ]
});

