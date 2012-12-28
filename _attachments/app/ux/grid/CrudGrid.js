Ext.define('Ext.ux.grid.CrudGrid',{
	alias:'widget.crudgrid',
	extend: 'Ext.grid.Panel',
	contextMenu:undefined,
	constructor:function(config){
		config = Ext.apply({}, config, {
			dockedItems:[
				{ xtype:'toolbar', items:['->', 
						{ xtype:'button', text:'New', itemId:'newButton', handler:this.createRecord, scope:this }
					]
				}
			]
		});
		this.callParent( arguments );
	},

	initComponent: function() {
		this.addEvents( { 'rowdelete':true, 'rowedit':true, 'rowcreate':true } );
		
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

	editRecord: function(menuItem, e, gridView, record, item, index ){ this.fireEvent('rowedit', { "id" : record.getId() }, record, gridView, index ); },

	createRecord: function(button, e){ this.fireEvent('rowcreate'); }
});