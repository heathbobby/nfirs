Ext.define('AM.view.admin.Admin' ,{
    extend: 'Ext.panel.Panel',
	itemId: 'admin',
    alias: 'widget.adminpanel',
    title: 'Admin',
    layout:'border',
    items:[
        /*{
            region:'center',
            xtype:'datadictionarylist',
            store:'dictionary.ActionsTaken',
			title:'Actions Taken'
        },
		{
            region:'center',
            xtype:'datadictionarylist',
            store:'dictionary.detector',
			title:'Detector'
        },
		{
            region:'center',
            xtype:'datadictionarylist',
            store:'dictionary.hazardousMaterialsReleased',
			title:'Hazardous Materials Released'
        },*/
		{
            region:'center',
            xtype:'datadictionarylist',
            store:'dictionary.aidGivenOrReceived',
			title:'Aid Given Or Received'
        }
		
    ],
    initComponent: function() {
        this.callParent(arguments);
    }
});