Ext.define('AM.view.incident.Basic', {
	extend: 'Ext.form.Panel',
	alias: 'widget.basicincident',
	autoScroll:true,
	title: 'Basic',
	bodyPadding:5,
	defaults:{ bodyPadding:5, labelStyle: 'font-weight:bold' },
	items:[
		{ xtype:'textfield', hidden:true, fieldLabel:'Record Type', name:'recordType', type:'int', defaultValue:1005},
		{ xtype:'addressView', title:'Incident Address' },	
		{ xtype:'textfield', fieldLabel:'Address On Wildland', name:'addressOnWildlandFlag', type:'boolean'},
		{ xtype: 'combo', fieldLabel:'Aid Given Or Recieved', name:'aidGivenOrRecieved', store:'dictionary.aidGivenOrReceived',
			displayField:'desc',
			valueField:'id',
			triggerAction:'all',
			queryMode:'remote'
		}, //Coded
		{ xtype:'aidView', title:'Aid Given And Received' },
		{ xtype:'authorityView', title:'Officer in Charge' },
		{ xtype:'authorityView', title:'Member Making Report' },
		{ xtype:'personView', title:'Person(s) Involved' },
		{ xtype:'personView', title:'Incident Owner' },
		{ xtype:'specialStudyView', title:'Specials Studies' },
		{ xtype:'fieldcontainer', fieldLabel:'Alarm Date Time', layout:'hbox',
			items:[
				{ xtype:'datefield', name:'alarmDate' },
				{ xtype:'timefield', name:'alarmTime', increment:'30', margins: '0 0 0 5' }
			]
		},
		{ xtype:'fieldcontainer', fieldLabel:'Arrival Date Time', layout:'hbox', items:[
				{ xtype:'datefield', name:'arrivalDate' },
				{ xtype:'timefield', name:'arrivalTime', increment:'30', margins: '0 0 0 5' }
			]
		},
		{ xtype:'fieldcontainer', fieldLabel:'Incident Controlled Date Time', layout:'hbox', items:[
				{ xtype:'datefield', name:'incidentControlledDate' },
				{ xtype:'timefield', name:'incidentControlledTime', increment:'30', margins: '0 0 0 5' }
			]},
		{ xtype:'fieldcontainer', fieldLabel:'Last Unit Cleared Date Time', layout:'hbox', items:[
				{ xtype:'datefield', name:'lastUnitClearedDate' },
				{ xtype:'timefield', name:'lastUnitClearedTime', increment:'30', margins: '0 0 0 5' }
			]},
		{ xtype:'textfield', fieldLabel:'Shift', name:'shift', type:'string'},
		{ xtype:'textfield', fieldLabel:'Alarms', name:'alarms', type:'string'},
		{ xtype:'textfield', fieldLabel:'District', name:'district', type:'string'},
		{ xtype: 'combo', fieldLabel:'Actions Taken', name:'actionsTaken', store:'dictionary.ActionsTaken',
			displayField:'desc',
			valueField:'id',
			triggerAction:'all',
			queryMode:'remote'
		}, //Coded
		{ xtype:'textfield', fieldLabel:'Resource Form Used', name:'resourceFormUsedFlag', type:'boolean'},
		{ xtype:'textfield', fieldLabel:'Suppression Apparatus', name:'suppressionApparatus', type:'int'},
		{ xtype:'textfield', fieldLabel:'EMS Apparatus', name:'EMSApparatus', type:'int'},
		{ xtype:'textfield', fieldLabel:'Other Apparatus', name:'otherApparatus', type:'int'},
		{ xtype:'textfield', fieldLabel:'Suppression Personnel', name:'suppressionPersonnel', type:'int'},
		{ xtype:'textfield', fieldLabel:'EMS Personnel', name:'EMSPersonnel', type:'int'},
		{ xtype:'textfield', fieldLabel:'Other Personnel', name:'otherPersonnel', type:'int'},
		{ xtype:'textfield', fieldLabel:'Resources Include Mutual Aid', name:'resourcesIncludeMutualAid', type:'boolean'},
		{ xtype:'textfield', fieldLabel:'Property Loss', name:'propertyLoss', type:'int'},
		{ xtype:'textfield', fieldLabel:'Contents Loss', name:'contentsLoss', type:'int'},
		{ xtype:'textfield', fieldLabel:'Property Value', name:'propertyValue', type:'int'},
		{ xtype:'textfield', fieldLabel:'Contents Value', name:'contentsValue', type:'int'},
		{ xtype:'textfield', fieldLabel:'Fire Service Deaths', name:'fireServiceDeaths', type:'int'},
		{ xtype:'textfield', fieldLabel:'Other Deaths', name:'otherDeaths', type:'int'},
		{ xtype:'textfield', fieldLabel:'Fire Service Injuries', name:'fireServiceInjuries', type:'int'},
		{ xtype:'textfield', fieldLabel:'Other Injuries', name:'otherInjuries', type:'int'},
		/*{xtype: 'combo', fieldLabel:'Detector Alerted Occupants', name:'detectorAlertedOccupants'},//Coded*/
		{ xtype: 'combo', fieldLabel:'Hazardous Material Released', name:'hazardousMaterialReleased', 
			store:'dictionary.hazardousMaterialsReleased',
			displayField:'desc',
			valueField:'id',
			triggerAction:'all',
			queryMode:'remote'
		},//Coded
		/*{xtype: 'combo', fieldLabel:'Mixed Use', name:'mixedUse'},//Coded*/
		{ xtype: 'combo', fieldLabel:'Property Use', name:'propertyUse', store:'dictionary.propertyUse',
			displayField:'desc',
			valueField:'id',
			triggerAction:'all',
			queryMode:'remote'
		},//Coded
		{ xtype:'textarea', name:'remarks', fieldLabel:'Remarks' }
	],
	initComponent: function() {
		this.callParent(arguments);
	}
});