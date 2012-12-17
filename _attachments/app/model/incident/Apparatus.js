Ext.define('AM.model.incident.Apparatus', {
    extend: 'Ext.data.Model',
    fields: [
	 {name:'recordType', type:'int', defaultValue:1100},
	 {name:'transactionType', type:'int'}
	]
});