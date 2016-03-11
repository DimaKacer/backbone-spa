module.exports = (function () {
    'use strict';

    var contentTpl = require('tpl!../templates/content');
    var VideoListModule = require('../../videoList/');

    var ContentView = Backbone.View.extend({
        el: '#main-article',
        template: contentTpl,
        initialize: function (options) {
            console.log(options);
            this.listenTo(Backbone.Events, 'page:home', this.getContentHomePage);
            this.listenTo(Backbone.Events, 'page:my-channel', this.getContentOtherPage);
            this.listenTo(Backbone.Events, 'page:trending', this.getContentOtherPage);
            this.listenTo(Backbone.Events, 'page:subscriptions', this.getContentOtherPage);
            this.listenTo(Backbone.Events, 'page:history', this.getContentOtherPage);
            this.listenTo(Backbone.Events, 'page:watch-later', this.getContentOtherPage);
        },
        initModules: function () {
            this.initVideoListModule();
        },
        initVideoListModule: function () {
            return new VideoListModule();
        },
        getContentOtherPage: function () {
            this.$el.html('Empty content!');
        },
        getContentHomePage: function () {
            this.render();
        },
        render: function () {
            this.$el.html(this.template);
            this.initModules();
            return this;
        }
    });

    return ContentView;

})();
