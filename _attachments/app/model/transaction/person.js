Ext.define('AM.model.transaction.Person', {
    extend: 'AM.model.transaction.Transaction',
    fields: [
	 {name:'recordType', type:'int', defaultValue:1050}, //1055
	 {name:'personSequenceNumber', type:'int'},
	 {name:'namePrefix'},//Coded
	 {name:'firstName', type:'string'},
	 {name:'middleInitial', type:'string'},
	 {name:'lastName', type:'string'},
	 {name:'nameSuffix'}, //Coded
	 {name:'businessName', type:'string'},
	 {name:'phone', type:'int'},
	 {name:'streetNumberOrMilepost', type:'string'},
	 {name:'streetPrefix'}, //Coded
	 {name:'streetOrHighwayName', type:'string'},
	 {name:'streetType', type:'string'}, //Coded
	 {name:'streetSuffix'}, //Coded
	 {name:'postOfficeBox', type:'string'},
	 {name:'apartment', type:'string'},
	 {name:'city', type:'string'},
	 {name:'state', type:'string'}, //Coded
	 {name:'zip', type:'int'}
	]
});