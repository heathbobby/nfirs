Ext.define('AM.model.transaction.Remarks', {
    extend: 'AM.model.transaction.Transaction',
    fields: [
	 {name:'recordType', type:'int', defaultValue:1040},
	 {name:'remarks', type:'string'}
	]
});