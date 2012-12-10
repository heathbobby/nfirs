Ext.define('AM.model.transaction.Aid', {
    extend: 'AM.model.transaction.Transaction',
    fields: [
	 {name:'recordType', type:'int', defaultValue:1020},
	 {name:'FDIDReceivingAid', type:'string'},
	 {name:'FDIDStateReceivingAid'}, //Coded
	 {name:'incidentNumberOfFDIDREceivingAid', type:'int'}
	]
});