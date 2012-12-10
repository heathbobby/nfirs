Ext.define('AM.model.transaction.FileAttached', {
    extend: 'AM.model.transaction.Transaction',
    fields: [
	 {name:'recordType', type:'int', defaultValue:1110},
	 {name:'preFirePlanAvailableFlag', type:'boolean'}, //Coded
	 {name:'reportsAttached'} //Coded
	]
});