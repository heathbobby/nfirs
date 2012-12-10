Ext.define('AM.view.incident.Fire', {
	extend: 'Ext.form.Panel',
	alias: 'widget.fireincident',
	autoScroll: true,
	title: 'Fire',
	bodyStyle: { padding:'5px' },
	items:[
		{ xtype:'hidden', fieldLabel:'Record Type', name:'recordType', type:'int', defaultValue:1100 },
		{ xtype:'textfield', fieldLabel:'Transaction Type', name:'transactionType', type:'int' },
		{ xtype:'textfield', fieldLabel:'Number of Residential Units', name:'numberOfResidentialUnits', type:'int' },
		{ xtype:'textfield', fieldLabel:'Not Residential', name:'notResidentialFlag', type:'boolean' },
		{ xtype:'textfield', fieldLabel:'Number of Buildings Involved', name:'numberOfBuildingsInvolved', type:'int' },
		{ xtype:'textfield', fieldLabel:'Acres Burned', name:'acresBurned', type:'int' },
		{ xtype:'textfield', fieldLabel:'Less Than One Acre', name:'lessThanOneAcre', type:'boolean' },
		{ xtype:'textfield', fieldLabel:'On Site Materials', name:'onSiteMaterials', type:'string' }, //Multiple (3) Coded
		{ xtype:'textfield', fieldLabel:'Material Storage Use', name:'materialStorageUse', type:'string' },//Multiple (*) Coded
		{ xtype:'textfield', fieldLabel:'Area Of Origin', name:'areaOfOrigin', type:'string' }, //Coded
		{ xtype:'textfield', fieldLabel:'Heat Source', name:'heatSource', type:'string' }, //Coded
		{ xtype:'textfield', fieldLabel:'Item First Ignited', name:'itemFirstIgnited', type:'string' }, //Coded
		{ xtype:'textfield', fieldLabel:'Confined to Origin', name:'confinedToOrigin', type:'string' }, //Coded
		{ xtype:'textfield', fieldLabel:'Type of Material', name:'typeOfMaterial', type:'string' }, //Coded
		{ xtype:'textfield', fieldLabel:'Cause of Ignition', name:'causeOfIgnition', type:'string' }, //Coded
		{ xtype:'textfield', fieldLabel:'Contributed To Ignition Factors', name:'contributedToIgnitionFactors', type:'string' }, // Multiple (2) Coded
		{ xtype:'textfield', fieldLabel:'Human Factors', name:'humanFactors', type:'string' }, //Multiple (8) Coded
		{ xtype:'textfield', fieldLabel:'Age Of Person', name:'ageOfPerson', type:'float' },
		{ xtype:'textfield', fieldLabel:'Sex Of Person', name:'sexOfPerson', type:'string' }, //Coded
		{ xtype:'textfield', fieldLabel:'Equipment Involved', name:'equipmentInvolved', type:'string' }, //Coded
		{ xtype:'textfield', fieldLabel:'Mobile Property Involved', name:'mobilePropertyInvolved', type:'string' }, //Coded
		{ xtype:'textfield', fieldLabel:'Suppression Factors', name:'suppressionFactors', type:'string' } //Multiple (3) Coded
		/*{xtype: 'combo', fieldLabel:'Hazardous Material Released', name:'hazardousMaterialReleased', 
			store:'dictionary.hazardousMaterialsReleased',
			displayField:'desc',
			valueField:'id',
			triggerAction:'all',
			queryMode:'remote'
		}*/
	],
	initComponent: function() {
		this.callParent(arguments);
	}
});