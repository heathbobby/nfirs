Ext.define('AM.view.user.List' ,{
	extend: 'Ext.grid.Panel',
	alias: 'widget.userlist',
	title: 'All Users',
	store:'Users',
	dockedItems:[
		{ xtype:'toolbar', items:['->', 
				{ xtype:'button', text:'New User', itemId:'newUser'}
			]
		}
	],
	initComponent: function() {

		this.columns = [
			{header: 'First Name',  dataIndex: 'firstName',  flex: 1},
			{header: 'Last Name',  dataIndex: 'lastName',  flex: 1},
			{header: 'Rank', dataIndex: 'rank', flex: 1}
		];

		this.callParent(arguments);
	}
});