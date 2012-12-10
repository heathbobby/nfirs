Ext.define('AM.controller.Controller', {
    extend: 'Ext.app.Controller',
    views: [
        'Navigation', 'Dashboard'
    ],
    init: function() {
        this.control({
           'Navigation a':{
			   click:this.navClick
		   }
        });
    },

    navClick: function() {
        console.log('Navigation a clicked');
    },
    dashboard:function(){
        this.render('Dashboard');
    }
});