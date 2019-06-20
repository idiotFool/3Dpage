define(["./app", "angular"], function(app, angular){
    return app.config(function($stateProvider){
        const statesList=[{
            name:'bm',
            url: "bm.html",
            templateUrl: "static/tpl/bm.html",
            controller: "bmController"
        }, {
            name:'jm',
            url: "jm.html",
            templateUrl: "static/tpl/jm.html",
            controller: ""
        }, {
            name:'vol',
            url: "vol.html",
            templateUrl: "static/tpl/vol.html",
            controller: ""
        }, {
            name:'entity',
            url: "entity.html",
            templateUrl: "static/tpl/entity.html",
            controller: "entityController"
        }];

        angular.forEach(statesList, function(state) {
            $stateProvider.state(state.name, {
                url: state.url,
                templateUrl: state.templateUrl,
                controller: state.controller,
                controllerAs: ""
            });
        });
    })

});