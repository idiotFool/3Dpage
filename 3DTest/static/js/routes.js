define(["./app"], function(app){
    return app.config(function($stateProvider){
        $stateProvider.
        state("bm", {
            url: "./bm.html",
            templateUrl: "static/tpl/bm.html",
            controller: ""
        }).
        state("jm", {
            url: "./jm.html",
            templateUrl: "static/tpl/jm.html",
            controller: ""
        }).
        state("vol", {
            url: "./vol.html",
            templateUrl: "static/tpl/vol.html",
            controller: ""
        })
    })
});