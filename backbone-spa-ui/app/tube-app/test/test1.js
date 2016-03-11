[11:36:31 AM] Valery Shvyndzikau: 

var ViewManager = {
    currentView : null,
    showView : function(view) {
        if (this.currentView !== null && this.currentView.cid != view.cid) {
            this.currentView.remove();
        }
        this.currentView = view;
        return view.render();
    }
}


[11:36:46 AM] Valery Shvyndzikau: -------------------------------------------
[11:36:47 AM] Valery Shvyndzikau: 

App.Router = Backbone.Router.extend({
    routes: {
        '' : 'index',
        'addnew' : 'addNew',
        'contacts/:id' : 'singleContact',
        'contacts/:id/edit' : 'editContact'
    },

    index: function(){
        var indexView ...
        ViewManager.showView(indexView);
    },

    addNew: function() {
        var addNewView ...
        ViewManager.showView(addNewView);
    },

    singleContact: function(id) {
        var singleContactView ...
        ViewManager.showView(singleContactView);
    },

    editContact: function(id) {
        var editContactView ...
        ViewManager.showView(editContactView);
    },

});
