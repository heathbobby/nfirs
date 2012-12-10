Ext.define('AM.model.transaction.CivilianCasualty', {
    extend: 'AM.model.transaction.Transaction',
    fields: [
	 {name:'recordType', type:'int', defaultValue:1400},
	 {name:'civilianFireCasualtySequenceNumber', type:'float'},
	 {name:'firstName', type:'float'},
	 {name:'middleInitial', type:'int'},
	 {name:'lastName'},//Coded
	 {name:'nameSuffix', type:'int'},
	 {name:'gender'}, //Coded
	 {name:'age', type:'int'},
	 {name:'race'}, //Coded
	 {name:'ethnicity'}, //Coded
	 {name:'affiliation'}, //Coded
	 {name:'injuryDateAndTime'},//Coded
	 {name:'severity'},//Coded
	 {name:'causeOfInjury'},//Coded
	 {name:'humanFactors'},//Coded
	 {name:'conributingFactors'},//Coded
	 {name:'activityWhenInjured'},//Coded
	 {name:'locationAtTimeOfIncident'},//Coded
	 {name:'generalLocationAtTimeOfIncident', type:'string'},
	 {name:'storyAtStartOfIncident'},//Coded
	 {name:'storyWhenInjuryOccured'},//Coded
	 {name:'specificLocationAtTimeOfInjury', type:'int'},
	 {name:'primaryApparentSymptom', type:'int'},
	 {name:'primaryPartOfBodyInjured', type:'int'},
	 {name:'disposition', type:'int'}
	]
});