module.exports = (function() {
    'use strict';

    //var Module = Backbone.Module = function (attributes) {
    var Module = Backbone.Module = function (attributes) {
        var attrs = attributes || {};
        _.extend(this, attrs, {});
        this.init.apply(this, arguments);
    };

    // _.extend(Model.prototype, Events, {
    //     init: function(key, val, options) {

    Module.prototype.init = function (opts) {

        if (('name' in opts)) {
            console.log(opts['name'])
        }

        if (('router' in opts)) {
            this.getRouter(opts['router']);
            //console.log(opts['router'])
        }

        if (('layoutView' in opts)) {
            console.log(opts['layoutView'])
        }
    };

    Module.prototype.getRouter = function(opts) {
        console.log(opts)
        console.log(this.router)
        //console.log(this.routes)
        //return Backbone.Router.extend(this.routes)
    };

        //var len = keys.length;


        // console.log(
        // Object.keys(opts, _.each (key) {
            // console.log(keys)
            // console.log(len)
        // })
        // .hasOwnProperty('title')
        //); // console: ['0', '1', '2']

//if (this.layoutView) {
/*
        console.log(opts.router);
        console.log(this.router);
        this.router = opts.router || {};
        console.log(this.router);
        if (!_.isEmpty(this.router)) {
            this.getRouter();
        }
*/

    Module.prototype.getNameModule = function(opts) {
        console.log();
    };

    Module.prototype.getView = function(opts) {
        console.log();
    };

    Module.prototype.getLayoutView = function(opts) {
        console.log(opts);
    };


    Module.extend = Backbone.Model.extend();

    return Module;

})();
