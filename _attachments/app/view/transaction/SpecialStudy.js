Ext.define('AM.view.transaction.SpecialStudy', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.specialStudyView',
	defaults:{ xtype:'textfield',  labelStyle:'font-weight:bold' },
	items: [
		{ fieldLabel:'Record Type', name:'recordType', xtype:'hidden', type:'int', defaultValue:1050},
		{ fieldLabel:'Sequence Number', name:'specialStudySequenceNumber', xtype:'hidden', type:'int'},
		{ fieldLabel:'Identification Number', name:'specialStudyIdentificationNumber', type:'int'},
		{ fieldLabel:'Study Code', name:'specialStudyCode'} //Coded
	]
});