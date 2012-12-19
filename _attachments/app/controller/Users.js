Ext.define('AM.controller.Users', {
	extend: 'Ext.app.Controller',
	views: ['user.List', 'user.Edit'],
	stores: ['Users'],
	models: ['User'],

//init
	init: function()
	{
		this.control({
		   'userlist': {
				itemdblclick: this.onListRowDblClick
			},
			'useredit button[action=save]': {
				click: this.onBtnUpdateClick
			},
			'userlist button':{
				click: function(){ Ext.ux.Router.redirect('users/create'); }
			}
			
		});
	},
	
//actions
	list: function()
	{
		this.getUsersStore().load();
		this.render('user.List');
	},

	edit: function(params)
	{
		var view,
			store = this.getUsersStore(),
			record = store.getById(params.id);
			
		if(!record)
		{    
			return;
		}
		
		view = Ext.widget('useredit');
		view.down('form').loadRecord(record);
	},

	create: function(){
		Ext.ux.Router.redirect('users/0/edit');
	},
	
//listeners
	onListRowDblClick: function(userList, record)
	{
		//console.log(record);
		Ext.ux.Router.redirect('users/' + record.get('id') + '/edit');
	},

	onBtnUpdateClick: function(button)
	{
		var win = button.up('window'),
			form = win.down('form'),
			record = form.getRecord(),
			values = form.getValues();

		record.set(values);
		win.close();
	}
});