Ext.define('AM.model.transaction.Equipment', {
    extend: 'AM.model.transaction.Transaction',
    fields: [
	 {name:'recordType', type:'int', defaultValue:1130},
	 {name:'equipmentBrand', type:'string'},//Coded
	 {name:'equipmentModel', type:'string'}, //Coded
	 {name:'equipmentSerialNumber', type:'string'},
	 {name:'equipmentYear', type:'string'},
	 {name:'equipmentPower'}, //Coded
	 {name:'equipmentPortability'} //Coded
	]
});