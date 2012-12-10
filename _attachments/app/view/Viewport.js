Ext.define('AM.view.Viewport', {
    extend: 'Ext.container.Viewport',

//config options
    id: 'viewport',
    layout: 'border',

//inits
    initComponent: function()
    {
        this.items = [{
			region:"north",
			xtype:'panel',
			contentEl:'header',
			height:170,
			bodyBorder:false,
			border:false,
            dockedItems:[{ dock:'bottom', xtype:'navView', id:'mainNav', bodyCls:'nav' }]
		},{
            region: 'center',
            xtype: 'panel',
            layout:'card',
            id: 'main_tabpanel',
            defaults: {closable: true}
        }];
        
        this.callParent();
    }
    
    //listeners 
});