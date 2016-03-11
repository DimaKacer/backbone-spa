module.exports = (function () {
    'use strict';

    var HeaderModule = require('../modules/header/');
    var SearchModule = require('../modules/search/');
    var SideBarModule = require('../modules/sidebar/');
    var ContentModule = require('../modules/content/');

    var TubeAppTpl = require('tpl!../templates/tube-app-view');

    var TubeAppView = Backbone.View.extend({
        el: '#app-view',
        template: TubeAppTpl,
        modules: {

        },
        initialize: function (options) {
            this.router = options.router;
            this.render();
        },
        initModules: function () {
            this.modules.headerModule = new HeaderModule();
            this.modules.searchModule = new SearchModule();
            this.modules.sidebarModule = new SideBarModule();
            this.modules.contentModule = new ContentModule();

            // var headerModule = Module.extend({
            //     layoutView: {
            //         headerModule: new HeaderModule()
            //     }
            // });
        },
        render: function () {
            this.$el.html(this.template());
            //this.initModules();
            return this;
        }
    });

    return TubeAppView;

})();
