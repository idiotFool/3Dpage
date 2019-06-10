define([
    "angular",
    "./controllers/index",
    "uiRouter"
], function(angular){
    return angular.module('myApp', [
        "ui.router",
        "app.controllers"
    ])
});

