Ext.define('AM.view.transaction.Authority', {
	extend: 'Ext.panel.Panel',
	alias:'widget.authorityView',
	defaults:{ xtype:'textfield', labelStyle:'font-weight:bold' },
	layout: {
		type: 'vbox',
		align: 'stretch'
	},
	items: [
		{ xtype:'hidden', fieldLabel:'PersonnelId', name:'authorityPersonnelId', type:'string' },
		{ 
			xtype:'fieldcontainer',
			fieldLabel:'Name',
			layout:'hbox',
			defaultType: 'textfield',
			fieldDefaults: {
				labelAlign: 'top',
				labelWidth: 100,
				labelStyle: 'font-weight:bold',
				labelSeparator:''
			},
			items:[
				{ fieldLabel:'First', name:'authorityFirstName', flex:1 },
				{ fieldLabel:'MI', name:'authorityMiddleInitial', type:'string', width:30, margins: '0 0 0 5' },
				{ fieldLabel:'Last', name:'authorityLastName', flex:2, margins: '0 0 0 5' }
			]
		}, //Coded
		{ fieldLabel:'Rank', name:'authorityRank', type:'int' },
		{ fieldLabel:'Assignment', name:'authorityAssignment' }, //Coded
		{ xtype:'datefield', fieldLabel:'Date', name:'authorityDate', type:'int' }
	]
});