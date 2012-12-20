Ext.define('AM.model.incident.Arson', {
    extend: 'Ext.data.Model',
    fields: [
	 {name:'recordType', type:'int', defaultValue:1100},
	 {name:'transactionType', type:'int'},
	 {name:'test', type:'int'}
	]
});