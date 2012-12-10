Ext.define('AM.model.transaction.Basic', {
    extend: 'Ext.data.Model', //'AM.model.transaction.Transaction',
    fields: [
	 {name:'recordType', type:'int', defaultValue:1005},
	 {name:'addressOnWildlandFlag', type:'boolean'},
	 {name:'aidGivenOrRecieved'}, //Coded
	 {name:'alarmDateTime', type:'int'},
	 {name:'arrivalDateTime', type:'int'},
	 {name:'incidentControlledDateTime', type:'int'},
	 {name:'lastUnitClearedDateTime', type:'int'},
	 {name:'shift', type:'string'},
	 {name:'alarms', type:'string'},
	 {name:'district', type:'string'},
	 {name:'actionsTaken'}, //Coded
	 {name:'resourceFormUsedFlag', type:'boolean'},
	 {name:'suppressionApparatus', type:'int'},
	 {name:'EMSApparatus', type:'int'},
	 {name:'otherApparatus', type:'int'},
	 {name:'suppressionPersonnel', type:'int'},
	 {name:'EMSPersonnel', type:'int'},
	 {name:'otherPersonnel', type:'int'},
	 {name:'resourcesIncludeMutualAid', type:'boolean'},
	 {name:'propertyLoss', type:'int'},
	 {name:'contentsLoss', type:'int'},
	 {name:'propertyValue', type:'int'},
	 {name:'contentsValue', type:'int'},
	 {name:'fireServiceDeaths', type:'int'},
	 {name:'otherDeaths', type:'int'},
	 {name:'fireServiceInjuries', type:'int'},
	 {name:'otherInjuries', type:'int'},
	 {name:'detectorAlertedOccupants'},//Coded
	 {name:'hazardousMaterialReleased'},//Coded
	 {name:'mixedUse'},//Coded
	 {name:'propertyUse'},//Coded
	]
});