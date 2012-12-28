Ext.define('AM.view.user.Edit', {
	extend: 'Ext.window.Window',
	alias: 'widget.useredit',

	title: 'Edit User',
	layout: 'fit',
	bodyStyle:'padding:4px;',
	autoShow: true,

	initComponent: function() {
		this.items = [
			{
				xtype: 'form',
				items: [
					{ xtype: 'textfield', 
						name:'docType', 
						fieldLabel:'Doc Type', 
						value:'personnel',
						hidden:true
					},
					{
						xtype: 'textfield',
						name : 'personnelId',
						fieldLabel: 'Personnel Id'
					},
					{
						xtype: 'textfield',
						name : 'firstName',
						fieldLabel: 'First Name'
					},{
						xtype: 'textfield',
						name : 'lastName',
						fieldLabel: 'Last Name'
					},{
						xtype: 'textfield',
						name : 'rank',
						fieldLabel: 'Rank'
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