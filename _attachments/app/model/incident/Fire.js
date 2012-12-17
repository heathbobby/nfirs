Ext.define('AM.model.incident.Fire', {
    extend: 'Ext.data.Model',
    fields: [
	 {name:'recordType', type:'int', defaultValue:1100},
	 {name:'transactionType', type:'int'},
	 {name:'numberOfResidentialUnits', type:'int'},
	 {name:'notResidentialFlag', type:'boolean'}, 
	 {name:'numberOfBuildingsInvolved', type:'int'},
	 {name:'acresBurned', type:'int'},
	 {name:'lessThanOneAcre', type:'boolean'},
	 {name:'onSiteMaterials', type:'string' }, //Multiple (3) Coded
	 {name:'materialStorageUse', type:'string' },//Multiple (*) Codedname:'shift', type:'string'},
	 {name:'areaOfOrigin', type:'string' }, //Coded
	 {name:'heatSource', type:'string' }, //Coded
	 {name:'itemFirstIgnited', type:'string' }, //Coded
	 {name:'confinedToOrigin', type:'string' }, //Coded
	 {name:'typeOfMaterial', type:'string' }, //Coded
	 {name:'causeOfIgnition', type:'string' }, //Coded
	 {name:'contributedToIgnitionFactors', type:'string' }, // Multiple (2) Coded
	 {name:'humanFactors', type:'string' }, //Multiple (8) Coded
	 {name:'ageOfPerson', type:'float' },
	 {name:'sexOfPerson', type:'string' }, //Coded
	 {name:'equipmentInvolved', type:'string' }, //Coded
	 {name:'mobilePropertyInvolved', type:'string' }, //Coded
	 {name:'suppressionFactors', type:'string' } //Multiple (3) Coded
	]
});