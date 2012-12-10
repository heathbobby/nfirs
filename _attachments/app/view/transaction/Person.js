Ext.define('AM.view.transaction.Person', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.personView',
	defaults:{ xtype:'textfield' },
	items: [
		{ fieldLabel:'Record Type', name:'recordType', type:'int', defaultValue:1050}, //1055
		{ fieldLabel:'Person Sequence Number', name:'personSequenceNumber', type:'int'},
		{ fieldLabel:'Name Prefix', name:'namePrefix'},//Coded
		{ fieldLabel:'First Name', name:'firstName', type:'string'},
		{ fieldLabel:'Middle Initial', name:'middleInitial', type:'string'},
		{ fieldLabel:'Last Name', name:'lastName', type:'string'},
		{ fieldLabel:'Name Suffix', name:'nameSuffix'}, //Coded
		{ fieldLabel:'Business Name', name:'businessName', type:'string'},
		{ fieldLabel:'Phone', name:'phone', type:'int'},
		{ fieldLabel:'Street Number or Milepost', name:'streetNumberOrMilepost', type:'string'},
		{ fieldLabel:'Stree Prefix', name:'streetPrefix'}, //Coded
		{ fieldLabel:'Street Or Highway Name', name:'streetOrHighwayName', type:'string'},
		{ fieldLabel:'Street Type', name:'streetType', type:'string'}, //Coded
		{ fieldLabel:'Stret Suffix', name:'streetSuffix'}, //Coded
		{ fieldLabel:'Post Office Box', name:'postOfficeBox', type:'string'},
		{ fieldLabel:'Apartment', name:'apartment', type:'string'},
		{ fieldLabel:'City', name:'city', type:'string'},
		{ fieldLabel:'State', name:'state', type:'string'}, //Coded
		{ fieldLabel:'Zip', name:'zip', type:'int'}
	]
});