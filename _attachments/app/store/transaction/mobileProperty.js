Ext.define('AM.model.transaction.MobileProperty', {
    extend: 'AM.model.transaction.Transaction',
    fields: [
	 {name:'recordType', type:'int', defaultValue:1110},
	 {name:'mobilePropertyType'},//Coded
	 {name:'mobilePropertyMake'}, //Coded
	 {name:'mobilePropertyModel', type:'string'},
	 {name:'mobilePropertyYear', type:'int'},
	 {name:'mobilePropertyLicensePlate', type:'string'},
	 {name:'mobilePropertyState'}, //Coded
	 {name:'mobilePropertyVINNumber', type:'string'}
	]
});