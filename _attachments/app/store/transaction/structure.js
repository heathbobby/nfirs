Ext.define('AM.model.transaction.Structure', {
    extend: 'AM.model.transaction.Transaction',
    fields: [
	 {name:'recordType', type:'int', defaultValue:1200},
	 {name:'structureType'}, //Coded
	 {name:'structureStatus'}, //Coded
	 {name:'buildingHeightStoriesAboveGrade', type:'int'},
	 {name:'buildingHeightStoriesBelowGrade', type:'int'},
	 {name:'buildingLength', type:'int'},
	 {name:'buildingWidth', type:'int'},
	 {name:'totalSquareFeet', type:'int'},
	 {name:'fireOrigin', type:'int'},
	 {name:'fireSpread'}, //Coded
	 {name:'numberOfStoriesWithDamageMinor', type:'int'},
	 {name:'numberOfStoriesWithDamageSignificant', type:'int'},
	 {name:'numberOfStoriesWithDamageHeavy', type:'int'},
	 {name:'numberOfStoriesWithDamageExtreme', type:'int'},
	 {name:'noFlameSpreadSameAsFirstUnknown', type:'boolean'},
	 {name:'itemContributingToSpread'},//Coded
	 {name:'typeOfMaterialContributingToSpread'},//Coded
	 {name:'detectorPresence'},//Coded
	 {name:'detectorType'},//Coded
	 {name:'detectorPower'},//Coded
	 {name:'detectorOperation'},//Coded
	 {name:'detectorEffectiveness'},//Coded
	 {name:'detectorFailureReason'}, //Coded
	 {name:'AESPresence'}, //Coded
	 {name:'AESType'}, //Coded
	 {name:'AESOperation'}, //Coded
	 {name:'numberOfSprinklersOperating', type:'int'},
	 {name:'AESFailureReason'} //Coded
	]
});