module.exports = (function () {
    'use strict';

    var Module = function(options) {
        if (!options) {
            options = {};
        }

        _.extend(this, options, {});

    };

    // for (var subViewId in this.subViews) {

    _.extend(NestedView.prototype, Backbone.View.prototype, {

    });

    return Module;

})();




module.exports = (function() {
    'use strict';

    var MainMenuRouter = require('./router/router');
    var MainMenuView = require('./views/mainMenuView');



    var TubeModule = Backbone.View.extend({
        initialize: function (options) {
            if (!options) {
                options = {};
            }
            _.extend(this, options, {});
        },
        extend: function () {
               console.log(55555555)
        }
    });


    // var TubeModule = function(options) {
    //     if (!options) {
    //         options = {};
    //     }
    //     _.extend(this, options, {});
    // };

    // TubeModule.prototype = {
    //     initialize: function () {
    //         console.log(55555555)
    //     },
    //     extend: function (elem) {
    //         console.log(elem)
    //     }
    // };

    var MainMenuModule = TubeModule.extend({
        layoutView: {
    //     //    view: MainMenuView
    //         // options: {
    //         //     'dd5': '555'.
    //         //     'dd2': '222'
    //         // }
        }
     });


    console.log(TubeModule)



    // var MainMenuModule = function () {
    //     var mainMenuRouter = new MainMenuRouter();

    //     return {
    //         mainMenuView: new MainMenuView({router: mainMenuRouter})
    //     };
    // };



    // // Create Git Hub Listener Module
    // var GitHubListenerModule = Module.extend({
    //     name: 'Git Hub Listener Module',
    //     layoutView: {
    //         viewClass: ListView,
    //         options: {
    //             data: listMockData
    //         }
    //     }
    // });




    return MainMenuModule;

})();
+++













/*
    var BaseModule = {};

    BaseModule.prototype = function () {
        constructor: function() {
            this.subviews = {};

            Backbone.View.apply(this, arguments);
        }
    };

    console.log(BaseView);
    
    return BaseModule;
*/




/*

var MyModel = function( attributes, options ) {
  Backbone.Model.apply( this, arguments );
  this.specialInitializer();
};

MyModel.extend = Backbone.Model.extend;

_.extend( MyModel.prototype, Backbone.Model.prototype, {
  specialInitializer: function() {
    // called after the users 'initialize'
    console.log("MyModel initialized.", this);
  },
  otherNewMethod: function() {
    // this is just like any other instance method,
    // just as if Backbone.Model implemented it
  }
} );
*/






/*

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.fullName = function() {
  return this.firstName + ' ' + this.lastName;
};

*/








/*
    var BaseView = Backbone.View.extend({
        constructor: function() {
            // Define the subviews object off of the prototype chain
            this.subviews = {};

            // Call the original constructor
            Backbone.View.apply(this, arguments);
        }
    });
    console.log(BaseView);

// Notice that we haven't changed any code for ContentView or HeaderView

    var ContentView = BaseView.extend({
        initialize: function() {
            this.subviews.mainMenu = new MainMenuView
        }
    });

    // var HeaderView = BaseView.extend({
    //     initialize: function() {
    //         this.subviews.sidebar = new MenuView();
    //     }
    // });

    var content = new ContentView();
    //var header = new HeaderView();

    console.log(content)

*/

/*
    var Module = function(options) {
        if (!options) {
            options = {};
        }

        _.extend(this, options, {});
        _.extend(this, Backbone.Events);
        
        this._initializeCoreEvents();
    };
    
*/



/*
    var BaseView = Backbone.View.extend();

    var ContentView = BaseView.extend({
        subviews: {},

        initialize: function() {
            this.subviews.sidebar = new SidebarView()
        }
    });

    var HeaderView = BaseView.extend({
        subviews: {},

        initialize: function() {
            this.subviews.menu = new MenuView();
        }
    });
*/






  Home          ----> /
  My Channel    ----> /:channel
  Trending      ----> /:feed/:trending
  Subscriptions ----> /:feed/:subscriptions
  History       ----> /:feed/:history
  Watch Later   ----> /:playlist










  
/*

var MyModel = function( attributes, options ) {
  Backbone.Model.apply( this, arguments );
  this.specialInitializer();
};

MyModel.extend = Backbone.Model.extend;

_.extend( MyModel.prototype, Backbone.Model.prototype, {
  specialInitializer: function() {
    // called after the users 'initialize'
    console.log("MyModel initialized.", this);
  },
  otherNewMethod: function() {
    // this is just like any other instance method,
    // just as if Backbone.Model implemented it
  }
} );
*/













/*

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.fullName = function() {
  return this.firstName + ' ' + this.lastName;
};

*/








/*
    var BaseView = Backbone.View.extend({
        constructor: function() {
            // Define the subviews object off of the prototype chain
            this.subviews = {};

            // Call the original constructor
            Backbone.View.apply(this, arguments);
        }
    });
    console.log(BaseView);

// Notice that we haven't changed any code for ContentView or HeaderView

    var ContentView = BaseView.extend({
        initialize: function() {
            this.subviews.mainMenu = new MainMenuView
        }
    });

    // var HeaderView = BaseView.extend({
    //     initialize: function() {
    //         this.subviews.sidebar = new MenuView();
    //     }
    // });

    var content = new ContentView();
    //var header = new HeaderView();

    console.log(content)

*/

/*
    var Module = function(options) {
        if (!options) {
            options = {};
        }

        _.extend(this, options, {});
        _.extend(this, Backbone.Events);
        
        this._initializeCoreEvents();
    };
    
*/

/*
    var BaseView = Backbone.View.extend();

    var ContentView = BaseView.extend({
        subviews: {},

        initialize: function() {
            this.subviews.sidebar = new SidebarView()
        }
    });

    var HeaderView = BaseView.extend({
        subviews: {},

        initialize: function() {
            this.subviews.menu = new MenuView();
        }
    });

*/
