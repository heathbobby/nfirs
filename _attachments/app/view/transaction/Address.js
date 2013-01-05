Ext.define('AM.view.transaction.Address', {
	extend: 'Ext.panel.Panel',
	alias:'widget.addressView',
	model: 'AM.model.transaction.address',
	defaults: { xtype:'textfield', labelStyle:'font-weight:bold'},
	bodyStyle:{ padding:'5px' },
	layout: {
		type: 'vbox',
		align: 'stretch',
		defaultMargins:'0 0 0 5'
	},
	initComponent:function(){
		this.items= [
			{ fieldLabel:'Record Type', name:'recordType', hidden:true, type:'int', defaultValue:1010},
			{ fieldLabel:'Census Tract', name:'censusTract', type:'string', width:250 },
			{ xtype: 'combo', fieldLabel:'Location Type', name:'locationType', store:Ext.StoreManager.lookup('dictionary.locationType'),
				width: 250,
				displayField:'desc',
				valueField:'id',
				triggerAction:'all',
				typeAhead: true,
				forceSelection: true,
				queryMode:'local'
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
					{ fieldLabel:'Number or Milepost', name:'numberOrMilepost', width:150, type:'string' },
					{ xtype: 'combo', fieldLabel:'Street Prefix', name:'streetPrefix', store:Ext.StoreManager.lookup('dictionary.streetPrefixOrSuffix'),
						width: 100,
						displayField:'desc',
						valueField:'id',
						triggerAction:'all',
						typeAhead: true,
						forceSelection: true,
						queryMode:'local', 
						padding: '0 0 0 5'
					},
					{ fieldLabel:'Street Or Highway Name', name:'streetOrHighwayName', type:'string', flex:2, margins: '0 0 0 5' },
					{ xtype:'combo', fieldLabel:'Street Type', name:'streetType', store:Ext.StoreManager.lookup('dictionary.streetType'),
						flex:1,
						displayField:'desc',
						valueField:'id',
						triggerAction:'all',
						typeAhead: true,
						forceSelection: true,
						queryMode:'local',
						padding: '0 0 0 5'
					}, //Coded
					{ xtype:'combo', fieldLabel:'Street Suffix', name:'streetSuffix', store:Ext.StoreManager.lookup('dictionary.streetPrefixOrSuffix'),
						width: 100,
						displayField:'desc',
						valueField:'id',
						triggerAction:'all',
						typeAhead: true,
						forceSelection: true,
						queryMode:'local', 
						padding: '0 0 0 5'
					}
				]
			}, //Coded
			{ fieldLabel:'Apartment Number', name:'apartmentNumber', type:'string', width:200 },
			{ xtype:'fieldcontainer',
				fieldLabel:'City, State, Zip',
				layout:'hbox',
				defaultType: 'textfield',
				fieldDefaults: {
					labelAlign: 'top',
					labelWidth: 100,
					labelStyle: 'font-weight:bold',
					labelSeparator:''
				},
				items:[

					{ fieldLabel:'City', name:'city', type:'string', width:250 },
					{ xtype:'combo', fieldLabel:'State', name:'state', store:Ext.StoreManager.lookup('dictionary.stateTerritoryAbbreviations'),
						width: 100,
						displayField:'desc',
						valueField:'id',
						triggerAction:'all',
						typeAhead: true,
						forceSelection: true,
						queryMode:'local', 
						padding: '0 0 0 5'
					}, //Coded
					{ fieldLabel:'Zip', name:'zip', type:'int', padding: '0 0 0 5', width:100 }
				]
			},
			{ fieldLabel:'Cross Street Direction or National Grid', name:'crossStreetDirectionsOrNationalGrid', type:'string'}
		];

		this.callParent(arguments);
	}
});