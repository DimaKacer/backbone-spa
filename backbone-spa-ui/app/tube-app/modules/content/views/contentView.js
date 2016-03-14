module.exports = (function () {
    'use strict';

    var contentTpl = require('tpl!../templates/content');
    //    var VideoListModule = require('../../videoList/');

    var ContentView = Backbone.View.extend({
        el: '#main-article',
        template: contentTpl,
        initialize: function (options) {
            _.extend(this,options);
            this.render();
            
//            this.listenTo(Backbone.Events, 'page:home', this.getContentHomePage);
//            this.listenTo(Backbone.Events, 'page:my-channel', this.getContentOtherPage);
//            this.listenTo(Backbone.Events, 'page:trending', this.getContentOtherPage);
//            this.listenTo(Backbone.Events, 'page:subscriptions', this.getContentOtherPage);
//            this.listenTo(Backbone.Events, 'page:history', this.getContentOtherPage);
//            this.listenTo(Backbone.Events, 'page:watch-later', this.getContentOtherPage);
        },
        //        initModules: function () {
        //            this.initVideoListModule();
        //        },
        //        initVideoListModule: function () {
        //            var videoList = new VideoListModule();
        ////            console.log(videoList);
        //            //videoList.videoListView.extend({test:'This is test msg'});
        //            return videoList;
        //        },
        getContentOtherPage: function () {
            this.$el.html('Empty content!');
        },
        getContentHomePage: function () {
            this.render();
        },
        render: function () {
            this.$el.html(this.template);
            console.log('On load event = ', this.onLoadEvent);
            var that = this;
            setTimeout(function () {
                console.log('Trigger event show:listVideo');
                Backbone.Events.trigger('show:listVideo')
            }, 2000);
            setTimeout(function () {
                console.log('Trigger event ', that.onLoadEvent);
                Backbone.Events.trigger(that.onLoadEvent);
            }, 4000);

            return this;
        }
    });

    return ContentView;

})();
