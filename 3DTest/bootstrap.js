define([
    'require',
    'angular',
    'app',
    'routes'
], function (require, ng) {
    'use strict';

    /*
     * place operations that need to initialize prior to app start here
     * using the `run` function on the top-level module
     */

    require(['domReady!'], function (document) {    //“The exclamation mark is required to tell Dojo not to execute the callback until the DOM is ready.”
        ng.bootstrap(document, ['myApp']);
    });
});