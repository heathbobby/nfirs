Ext.define('AM.model.transaction.SpecialStudy', {
    extend: 'AM.model.transaction.Transaction',
    fields: [
	 {name:'recordType', type:'int', defaultValue:1050},
	 {name:'specialStudySequenceNumber', type:'int'},
	 {name:'specialStudyIdentificationNumber', type:'int'},
	 {name:'specialStudyCode'} //Coded
	]
});