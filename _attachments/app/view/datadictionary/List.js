Ext.define('AM.view.datadictionary.List' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.datadictionarylist',
    initComponent: function() {
        this.columns = [
            {header: 'Id',  dataIndex: 'id',  flex: 1},
            {header: 'Desc', dataIndex: 'desc', flex: 1}
        ];
        this.callParent(arguments);
		this.store.load();
    }
});