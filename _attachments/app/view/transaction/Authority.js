Ext.define('AM.view.transaction.Authority', {
	extend: 'Ext.panel.Panel',
	alias:'widget.authorityView',
	defaults:{ xtype:'textfield' },
	layout:'vbox',
	items: [
		{ fieldLabel:'PersonnelId', name:'authorityPersonnelId', type:'string' },
		{ fieldLabel:'First Name', name:'authorityFirstName' }, //Coded
		{ fieldLabel:'Middle Initial', name:'authorityMiddleInitial', type:'string' },
		{ fieldLabel:'Last Name', name:'authorityLastName' }, //Coded
		{ fieldLabel:'Rank', name:'authorityRank', type:'int' },
		{ fieldLabel:'Assignment', name:'authorityAssignment' }, //Coded
		{ fieldLabel:'Date', name:'authorityDate', type:'int' }
	]
});