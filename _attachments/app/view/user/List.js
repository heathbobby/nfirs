Ext.define('AM.view.user.List' ,{
	extend: 'Ext.grid.Panel',
	alias: 'widget.userlist',
	title: 'All Users',
	store:'Users',
	menu:undefined,
	contextMenu:undefined,

	initComponent: function() {
		this.addEvents( { 'rowdelete':true, 'rowedit':true } );
		this.columns = [
			{ header: 'Id',  dataIndex: 'personnelId' },
			{ header: 'First Name',  dataIndex: 'firstName',  flex: 1 },
			{ header: 'Last Name',  dataIndex: 'lastName',  flex: 1 },
			{ header: 'Rank', dataIndex: 'rank', flex: 1 }
		];
		this.dockedItems = this.dockedItems || [
			{ xtype:'toolbar', items:['->', 
					{ xtype:'button', text:'New User', itemId:'newUser'}
				]
			}];
		this.callParent( arguments );

		this.contextMenu = Ext.apply({}, this.contextMenu || {}, {
			xtype:'menu',
			items:[
				{ text:'Edit', handler:this.editRecord, scope:this },
				{ text:'Delete', handler:this.deleteRecord, scope:this }
			]
		});

		this.addListener( 'itemcontextmenu', this.getRowContextMenu, this );
	},

	getRowContextMenu: function(view, record, item, index, e, eventOptions) {
		this.contextMenu = ( typeof( this.contextMenu ) !== 'object' && this.contextMenu instanceof 'Ext.menu.Menu') ? this.contextMenu : Ext.create('Ext.menu.Menu',this.contextMenu);
		var menu = this.contextMenu;
		menu.items.each(function(menuItem, index, len){ menuItem.handler = Ext.bind(menuItem.handler, this, [ view, record, item, index], true ); }, this);
		menu.showAt( e.getXY() );
		e.preventDefault();
	},

	deleteRecord: function(menuItem, e, gridView, record, item, index ){ this.fireEvent('rowdelete', { "id" : record.getId() }, record, gridView, index);  },

	editRecord: function(menuItem, e, gridView, record, item, index ){ this.fireEvent('rowedit', { "id" : record.getId() }, record, gridView, index ); }
});