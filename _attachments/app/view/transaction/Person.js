Ext.define('AM.view.transaction.Person', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.personView',
	defaults:{ xtype:'textfield', labelStyle: 'font-weight:bold' },
	layout: {
		type: 'vbox',
		align: 'stretch'
	},
	items: [
		{ xtype:'hidden', fieldLabel:'Record Type', name:'recordType', type:'int', defaultValue:1050}, //1055
		{ xtype:'hidden', fieldLabel:'Person Sequence Number', name:'personSequenceNumber', type:'int'},
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
				{ fieldLabel:'Prefix', name:'namePrefix', width:75},//Coded
				{ fieldLabel:'First', name:'firstName', type:'string', margins: '0 0 0 5'},
				{ fieldLabel:'MI', name:'middleInitial', type:'string', width:30, margins: '0 0 0 5'},
				{ fieldLabel:'Last', name:'lastName', type:'string', margins: '0 0 0 5'},
				{ fieldLabel:'Suffix', name:'nameSuffix', width:75, margins: '0 0 0 5'} //Coded
			]
		},
		{ fieldLabel:'Business Name', name:'businessName', type:'string'},
		{ fieldLabel:'Phone', name:'phone', type:'int'},
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
					queryMode:'remote', margins: '0 0 0 5'
				},
				{ fieldLabel:'Street Or Highway Name', name:'streetOrHighwayName', type:'string', flex:1, margins: '0 0 0 5'},
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
		},
		{ fieldLabel:'Post Office Box', name:'postOfficeBox', type:'string'},
		{ fieldLabel:'Apartment', name:'apartment', type:'string'},
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
				{ fieldLabel:'City', name:'city', type:'string', flex:1},
				{ xtype:'combo', fieldLabel:'State', name:'state', store:'dictionary.stateTerritoryAbbreviations',
					displayField:'desc',
					valueField:'id',
					triggerAction:'all',
					queryMode:'remote', margins: '0 0 0 5'
				}, //Coded
				{ fieldLabel:'Zip', name:'zip', type:'int', margins: '0 0 0 5'}
			]
		}
	]
});