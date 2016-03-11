module.exports = (function () {
    'use strict';

    var AppRouter = Backbone.Router.extend({
        routes: {
            ':page': 'showPage',
            ':page/:id': 'showPage2'
        },
        showPage: function (page) {
            // console.log(page)
            Backbone.Events.trigger(page);
        },
        showPage2: function (page, id) {
            // console.log(id)
            // console.log(page)
            Backbone.Events.trigger(page+':'+id);
        },
    });

    return AppRouter;

})();
