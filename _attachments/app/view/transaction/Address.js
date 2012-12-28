Ext.define('AM.view.transaction.Address', {
	extend: 'Ext.panel.Panel',
	alias:'widget.addressView',
	model: 'AM.model.transaction.Address',
	defaults: { xtype:'textfield', labelStyle:'font-weight:bold' },
	bodyStyle:{ padding:'5px' },
	layout: {
		type: 'vbox',
		align: 'stretch'
	},
	items: [
		{ fieldLabel:'Record Type', name:'recordType', hidden:true, type:'int', defaultValue:1010},
		{ fieldLabel:'Census Tract', name:'censusTract', type:'string'},
		{ xtype: 'combo', fieldLabel:'Location Type', name:'locationType', store:'dictionary.locationType',
			displayField:'desc',
			valueField:'id',
			triggerAction:'all',
			queryMode:'remote'
		}, //Coded
		{ 
			xtype:'fieldcontainer',
			fieldLabel:'Street',
			layout:'hbox',
			defaultType: 'textfield',
			fieldDefaults: {
				labelAlign: 'top',
				labelWidth: 100,
				labelStyle: 'font-weight:bold',
				labelSeparator:''
			},
			items:[
				{ fieldLabel:'Number or Milepost', name:'numberOrMilepost', type:'string'},
				{ xtype: 'combo', fieldLabel:'Street Prefix', name:'streetPrefix', store:'dictionary.streetPrefixOrSuffix',
					displayField:'desc',
					valueField:'id',
					triggerAction:'all',
					queryMode:'remote', 
					margins: '0 0 0 5'
				},
				{ fieldLabel:'Street Or Highway Name', name:'streetOrHighwayName', type:'string', flex:1, margins: '0 0 0 5' },
				{ xtype:'combo', fieldLabel:'Street Type', name:'streetType', store:'dictionary.streetType',
					displayField:'desc',
					valueField:'id',
					triggerAction:'all',
					queryMode:'remote', margins: '0 0 0 5'
				}, //Coded
				{ xtype:'combo', fieldLabel:'Street Suffix', name:'streetSuffix', store:'dictionary.streetPrefixOrSuffix',
					displayField:'desc',
					valueField:'id',
					triggerAction:'all',
					queryMode:'remote', margins: '0 0 0 5'
				}
			]
		}, //Coded
		{ fieldLabel:'Apartment Number', name:'apartmentNumber', type:'string'},
		{ xtype:'fieldcontainer',
			fieldLabel:'City, State Zip',
			layout:'hbox',
			defaultType: 'textfield',
			fieldDefaults: {
				labelAlign: 'top',
				labelWidth: 100,
				labelStyle: 'font-weight:bold',
				labelSeparator:''
			},
			items:[

				{ fieldLabel:'City', name:'city', type:'string', flex:1 },
				{ xtype:'combo', fieldLabel:'State', name:'state', store:'dictionary.stateTerritoryAbbreviations',
					displayField:'desc',
					valueField:'id',
					triggerAction:'all',
					queryMode:'remote', margins: '0 0 0 5'
				}, //Coded
				{ fieldLabel:'Zip', name:'zip', type:'int', margins: '0 0 0 5'}
			]
		},
		{ fieldLabel:'Cross Street Direction or National Grid', name:'crossStreetDirectionsOrNationalGrid', type:'string'}
	]
});