Ext.define('AM.view.transaction.Address', {
	extend: 'Ext.panel.Panel',
	alias:'widget.addressView',
	//model: 'AM.model.transaction.Address',
	defaults: {xtype:'textfield'},
	bodyStyle:{padding:'5px'},
	layout: 'vbox',
	items: [
		{ fieldLabel:'Record Type', name:'recordType', xtype:'hidden', type:'int', defaultValue:1010},
		{ fieldLabel:'Census Tract', name:'censusTract', type:'string'},
		{ xtype: 'combo', fieldLabel:'Location Type', name:'locationType', store:'dictionary.locationType',
			displayField:'desc',
			valueField:'id',
			triggerAction:'all',
			queryMode:'remote'
		}, //Coded
		{ fieldLabel:'Number or Milepost', name:'numberOrMilepost', type:'string'},
		{ xtype: 'combo', fieldLabel:'Street Prefix', name:'streetPrefix', store:'dictionary.streetPrefix',
			displayField:'desc',
			valueField:'id',
			triggerAction:'all',
			queryMode:'remote'
		},
		{ fieldLabel:'Street Or Highway Name', name:'streetOrHighwayName', type:'string'},
		{ xtype:'combo', fieldLabel:'Street Type', name:'streetType', store:'dictionary.streetType',
			displayField:'desc',
			valueField:'id',
			triggerAction:'all',
			queryMode:'remote'
		}, //Coded
		{ xtype:'combo', fieldLabel:'Street Suffix', name:'streetSuffix', store:'dictionary.streetSuffix',
			displayField:'desc',
			valueField:'id',
			triggerAction:'all',
			queryMode:'remote'
		}, //Coded
		{ fieldLabel:'Apartment Number', name:'apartmentNumber', type:'string'},
		{ fieldLabel:'City', name:'city', type:'string'},
		{ xtype:'combo', fieldLabel:'State', name:'state', store:'dictionary.stateTerritoryAbbreviations',
			displayField:'desc',
			valueField:'id',
			triggerAction:'all',
			queryMode:'remote'
		}, //Coded
		{ fieldLabel:'Zip', name:'zip', type:'int'},
		{ fieldLabel:'Cross Street Direction or National Grid', name:'crossStreetDirectionsOrNationalGrid', type:'string'}
	]
});