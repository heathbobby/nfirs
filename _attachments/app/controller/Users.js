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
				itemdblclick: this.onListRowDblClick,
				rowedit: this.edit,
				rowdelete: this.destroy,
				scope:this
			},
			'userlist button':{
				click: this.create,
				scope:this
			},
			'useredit button[action=save]': {
				click: this.onBtnUpdateClick,
				scope:this
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
		var me = this,
			view,
			store = this.getUsersStore(),
			record = store.getById(params.id) || Ext.create('AM.model.User');
		if(!record)
		{    
			return;
		}
		view = Ext.widget( 'useredit', { width:500 } );
		view.down( 'form' ).loadRecord( record );
	},

	create: function(){
		view = Ext.widget( 'useredit', { width:500 });
		view.down( 'form' ).loadRecord( Ext.create('AM.model.User') );
	},

	destroy: function(params, record){
		var me = this,
			store = this.getUsersStore(),
			rec = record || store.getById(params.id);
			record.destroy();  
		
		this.list();
	},
	
//listeners
	onListRowDblClick: function(gridView, record, item, index, event, eventOptions )
	{
		this.edit( { id:record.getId() } );
		//Ext.ux.Router.redirect('users/' + record.getId() + '/edit');
	},

	onBtnUpdateClick: function(button)
	{
		var win = button.up('window'),
			form = win.down('form'),
			record = form.getRecord(),
			values = form.getValues();

		record.set(values);
		record.save({ callback:this.list, scope:this });
		win.close();
	}
});