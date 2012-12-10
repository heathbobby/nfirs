Ext.define('AM.view.Dashboard', {
    extend: 'Ext.panel.Panel',
    alias:'widget.dashboard',
    layout:'vbox',
    items:[
        {xtype:'panel', title:'Notifications', height:150, width:300 },
        {xtype:'panel', title:'Incidents', height:300, width:300, }
    ],
//inits
    initComponent: function()
    {   
        this.callParent();
    }
    
//listeners
});