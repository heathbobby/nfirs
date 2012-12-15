Ext.define('AM.view.Navigation', {
    extend: 'Ext.panel.Panel',
    alias:'widget.navView',
//config options
    bodyCls:'nav',
    height: 50,
    layout: 'fit',
    template: '<ul><tpl for="."><li><a href="{href}">{text}</a></li></tpl></ul>',
    data:[{href:"#",text:"Home"},{href:"#incidents",text:"Incidents"}, {href:'#users', text:'Users'}],
//inits
    initComponent: function()
    {
        this.template = Ext.create('Ext.XTemplate', this.template);
        this.callParent();
    },
    onRender:function(cmp, eOpts){
        this.callParent(this);
        this.template.overwrite(this.body, this.data);
    },
//listeners 
    onMenuItemClick: function(item)
    {
        Ext.ux.Router.redirect(item.uri);
    }
});