define(["./app"], function(app){
    return app.config(function($stateProvider){
        $stateProvider.state('view1', {
            url: "./view1",
            templateUrl: 'tpl/nav.html',
            controller: 'navController'
        })
        .state('view2', {
            url: "./view2",
            templateUrl: 'tpl/cesiumContainer.html',
            controller: 'mainController'
        })
    })
});