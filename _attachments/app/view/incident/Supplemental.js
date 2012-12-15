Ext.define('AM.view.incident.Supplemental', {
	extend: 'Ext.form.Panel',
	alias: 'widget.supplementalincident',
	autoScroll:true,
	title: 'Supplemental',
	bodyStyle:{padding:'5px'},
	items:[
		{xtype:'hidden', fieldLabel:'Record Type', name:'recordType', type:'int', defaultValue:1005},
		{xtype:'textfield', fieldLabel:'Address On Wildland', name:'addressOnWildlandFlag', type:'boolean'},
		{xtype: 'combo', fieldLabel:'Aid Given Or Recieved', name:'aidGivenOrRecieved', store:'dictionary.aidGivenOrReceived',
			displayField:'desc',
			valueField:'id',
			triggerAction:'all',
			queryMode:'remote'
		}, //Coded
		{xtype:'textfield', fieldLabel:'Alarm Date Time', name:'alarmDateTime', type:'int'},
		{xtype:'textfield', fieldLabel:'Arrival Date Time', name:'arrivalDateTime', type:'int'},
		{xtype:'textfield', fieldLabel:'Incident Controlled Date Time', name:'incidentControlledDateTime', type:'int'},
		{xtype:'textfield', fieldLabel:'Last Unit Cleared Date Time', name:'lastUnitClearedDateTime', type:'int'},
		{xtype:'textfield', fieldLabel:'Shift', name:'shift', type:'string'},
		{xtype:'textfield', fieldLabel:'Alarms', name:'alarms', type:'string'},
		{xtype:'textfield', fieldLabel:'District', name:'district', type:'string'},
		{xtype: 'combo', fieldLabel:'Actions Taken', name:'actionsTaken', store:'dictionary.ActionsTaken',
			displayField:'desc',
			valueField:'id',
			triggerAction:'all',
			queryMode:'remote'
		}, //Coded
		{xtype:'textfield', fieldLabel:'Resource Form Used', name:'resourceFormUsedFlag', type:'boolean'},
		{xtype:'textfield', fieldLabel:'Suppression Apparatus', name:'suppressionApparatus', type:'int'},
		{xtype:'textfield', fieldLabel:'EMS Apparatus', name:'EMSApparatus', type:'int'},
		{xtype:'textfield', fieldLabel:'Other Apparatus', name:'otherApparatus', type:'int'},
		{xtype:'textfield', fieldLabel:'Suppression Personnel', name:'suppressionPersonnel', type:'int'},
		{xtype:'textfield', fieldLabel:'EMS Personnel', name:'EMSPersonnel', type:'int'},
		{xtype:'textfield', fieldLabel:'Other Personnel', name:'otherPersonnel', type:'int'},
		{xtype:'textfield', fieldLabel:'Resources Include Mutual Aid', name:'resourcesIncludeMutualAid', type:'boolean'},
		{xtype:'textfield', fieldLabel:'Property Loss', name:'propertyLoss', type:'int'},
		{xtype:'textfield', fieldLabel:'Contents Loss', name:'contentsLoss', type:'int'},
		{xtype:'textfield', fieldLabel:'Property Value', name:'propertyValue', type:'int'},
		{xtype:'textfield', fieldLabel:'Contents Value', name:'contentsValue', type:'int'},
		{xtype:'textfield', fieldLabel:'Fire Service Deaths', name:'fireServiceDeaths', type:'int'},
		{xtype:'textfield', fieldLabel:'Other Deaths', name:'otherDeaths', type:'int'},
		{xtype:'textfield', fieldLabel:'Fire Service Injuries', name:'fireServiceInjuries', type:'int'},
		{xtype:'textfield', fieldLabel:'Other Injuries', name:'otherInjuries', type:'int'},
		/*{xtype: 'combo', fieldLabel:'Detector Alerted Occupants', name:'detectorAlertedOccupants'},//Coded*/
		{xtype: 'combo', fieldLabel:'Hazardous Material Released', name:'hazardousMaterialReleased', 
			store:'dictionary.hazardousMaterialsReleased',
			displayField:'desc',
			valueField:'id',
			triggerAction:'all',
			queryMode:'remote'
		},//Coded
		/*{xtype: 'combo', fieldLabel:'Mixed Use', name:'mixedUse'},//Coded*/
		{xtype: 'combo', fieldLabel:'Property Use', name:'propertyUse', store:'dictionary.propertyUse',
			displayField:'desc',
			valueField:'id',
			triggerAction:'all',
			queryMode:'remote'
		}//Coded
	],
	initComponent: function() {
		this.callParent(arguments);
	}
});