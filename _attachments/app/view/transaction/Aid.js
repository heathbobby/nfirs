Ext.define('AM.view.transaction.Aid', {
	extend: 'Ext.panel.Panel',
	alias:'widget.aidView',
	//model: 'AM.model.transaction.Address',
	defaults: {xtype:'textfield'},
	bodyStyle:{padding:'5px'},
	layout: 'vbox',
	items: [
		{ fieldLabel:'Record Type', name:'recordType', xtype:'hidden', type:'int', defaultValue:1020},
		{ fieldLabel:'FDID Receiving Aid', name:'FDIDReceivingAid', type:'string'},
		{ fieldLabel:'FDID Stage Recieving Aid', name:'FDIDStateReceivingAid'}, //Coded
		{ fieldLabel:'Incident Number of FDID Receiving Aid', name:'incidentNumberOfFDIDReceivingAid', type:'int'}
	]
});