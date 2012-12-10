Ext.define('AM.view.transaction.SpecialStudy', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.specialStudyView',
	defaults:{ xtype:'textfield' },
	items: [
		{ fieldLabel:'Record Type', name:'recordType', type:'int', defaultValue:1050},
		{ fieldLabel:'Sequence Number', name:'specialStudySequenceNumber', type:'int'},
		{ fieldLabel:'Identification Number', name:'specialStudyIdentificationNumber', type:'int'},
		{ fieldLabel:'Study Code', name:'specialStudyCode'} //Coded
	]
});