define(["./app"], function(app){
    return app.config(function($stateProvider){
        $stateProvider.
        state('view1', {
            url: "./view1",
            templateUrl: 'static/tpl/nav.html',
            controller: 'navController'
        }).
        state('view2', {
            url: "./view2",
            templateUrl: 'static/tpl/cesiumContainer.html',
            controller: 'mainController'
        })
    })
});