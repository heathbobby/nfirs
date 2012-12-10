Ext.define('AM.model.transaction.Transaction', {
    extend: 'Ext.data.Model',
    fields: [
	 {name:'NFIRSVersion', type:'float'},
	 {name:'fireDeptId', type:'string'},
	 {name:'fireDeptState'}, //coded
	 {name:'alarmDate', type:'int'},
	 {name:'incidentNumber', type:'int'},
	 {name:'exposureNumber', type:'int'},
	 {name:'recordType', type:'int'},
	 {name:'transactionType'}, //coded
	 {name:'fireDeptStation'} //coded
	]
});