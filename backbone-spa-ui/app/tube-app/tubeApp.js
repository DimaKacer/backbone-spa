module.exports = (function () {
    'use strict';

    var Module = require('./common/Module');
    var TubeAppView = require('./views/baseTubeAppView');
    var AppRouter = require('./router');





    // console.log(Backbone);
    // console.log(Module.extend);
    // console.log(Backbone.View.extend);
    // console.log(Backbone.Model.extend);

   // function init() {
        //var appRouter = new AppRouter();
        //var tubeAppView = new TubeAppView()

        // var tubeAppView = new TubeAppView({
        //     router: appRouter
        // });

        //var baseModule = Module.extend({
        var baseModule = new Module({
            name: 'Base module',
            router: {
                routerSetup: AppRouter,
                options: {}
            },
            layoutView: {
                viewSetup: TubeAppView,
                options: {}
            }
            // subModules: [
            //     module: {
            //         'SubModulesTubeApp': {
            //             moduleSetup: 'subModulesTubeApp',
            //             options: {}
            //         }
            //     }
            // ]
        });

        Backbone.history.start();
        // Backbone.history.start({pushState: true, root: '/'});

        return baseModule;

})();
