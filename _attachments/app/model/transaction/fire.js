Ext.define('AM.model.transaction.Fire', {
    extend: 'AM.model.transaction.Transaction',
    fields: [
	 {name:'recordType', type:'int', defaultValue:1100},
	 {name:'numberOfResidentialUnits', type:'int'},
	 {name:'notResidentialFlag', type:'boolean'},
	 {name:'numberOfBuildingsInvolved', type:'int'},
	 {name:'acresBurned', type:'int'},
	 {name:'lessThanOneAcre', type:'boolean'},
	 {name:'onSiteMaterials'}, //Multiple Coded.
	 {name:'materialStorageUse'}, //Coded
	 {name:'areaOfOrigin'}, //Coded
	 {name:'heatSource'}, //Coded
	 {name:'itemFirstIgnited'}, //Coded
	 {name:'confinedToOrigin'}, //Coded
	 {name:'typeOfMaterial'}, //Coded
	 {name:'causeOfIgnition'}, //Coded
	 {name:'contributedToIgnitionFactors'}, //Coded
	 {name:'humanFactors'}, //Coded
	 {name:'ageOfPerson', type:'float'},
	 {name:'sexOfPerson'}, //Coded
	 {name:'equipmentInvolved'}, //Coded
	 {name:'mobilePropertyInvolved'}, //Coded
	 {name:'suppressionFactors'} //Coded Multiple
	]
});