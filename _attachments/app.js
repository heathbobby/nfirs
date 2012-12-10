Ext.Loader.setConfig({enabled: true});
Ext.application({
	appFolder: 'app',
	paths: { 'Ext.ux': 'app/ux' },
	requires: ['Ext.ux.Router'],
	autoCreateViewport: true,
	name: 'AM',
	controllers:['Controller','Users','Admin','Incident'],
	routes:{ 
		'/': 'controller#dashboard',
		'dashboard':'controller#dashboard',
		'incidents':'incident#list',
		'incident/create':'incident#create',
		'incident/:id/edit':'incident#edit',
		'users': 'users#list',
		'users/:id/edit': 'users#edit'
	},
	launch: function() {
		Ext.override(Ext.app.Controller, {
			render: function(view)
			{
				//take viewport
				var panel, target = Ext.getCmp('main_tabpanel');
				
				//load view
				if (Ext.isString(view)) {
					view = this.getView(view);
				}
				
				panel = target.child(view.xtype);
				if(panel){
					target.getLayout().setActiveItem(panel);
				}
				else {
					target.getLayout().setActiveItem(target.add(view));  
				}
			}
		});
		Ext.ux.Router.on({
			routemissed: function(uri)
			{
				Ext.Msg.show({
					title:'Error 404',
					msg: 'Route not found: ' + uri,
					buttons: Ext.Msg.OK,
					icon: Ext.Msg.ERROR
				});
			},
			beforedispatch: function(uri, match, params)
			{
				// console.log('beforedispatch ' + uri);
			},
			dispatch: function(uri, match, params, controller)
			{
				// console.log('dispatch ' + uri);
			}
		});
	}
});