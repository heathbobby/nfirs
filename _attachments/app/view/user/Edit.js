Ext.define('AM.view.user.Edit', {
	extend: 'Ext.window.Window',
	alias: 'widget.useredit',

	title: 'Edit User',
	layout: 'fit',
	autoShow: true,

	initComponent: function() {
		var store = Ext.create('AM.store.dictionary.ActionsTaken',{});
		store.on('load',function(){console.log(arguments);},this);
		this.items = [
			{
				xtype: 'form',
				items: [
					{
						xtype: 'textfield',
						name : 'firstname',
						fieldLabel: 'First Name'
					},{
						xtype: 'textfield',
						name : 'lastName',
						fieldLabel: 'Last Name'
					},{
						xtype: 'textfield',
						name : 'rank',
						fieldLabel: 'Rank'
					},{
						xtype: 'combo',
						name : 'actionsTaken',
						fieldLabel: 'Actions Taken',
						store:'dictionary.ActionsTaken',
						displayField:'desc',
						valueField:'id',
						triggerAction:'all',
						queryMode:'remote'
					}
				]
			}
		];

		this.buttons = [
			{
				text: 'Save',
				action: 'save'
			},
			{
				text: 'Cancel',
				scope: this,
				handler: this.close
			}
		];

		this.callParent(arguments);
	}
});