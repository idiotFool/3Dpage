require.config({
    paths : {
        "angular": "../lib/angular/angular",
        "domReady": "../lib/require/domReady",
        "uiRouter": "../lib/angular/angular-ui-router",
        "cesium": "../../../Cesium-1.57/Build/Cesium/Cesium",
        "jquery": "../lib/jquery-2.1.1/jquery.min",
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
        'static/js/bootstrap.js'  //kick start application
    ]
});

