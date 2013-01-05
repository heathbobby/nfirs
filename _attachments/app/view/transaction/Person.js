Ext.define('AM.view.transaction.Person', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.personView',
	defaults:{ xtype:'textfield', labelStyle: 'font-weight:bold' },
	layout: {
		type: 'vbox',
		align: 'stretch'
	},

	initComponent:function(){
		this.items = [
			{ xtype:'textfield', hidden:true, fieldLabel:'Record Type', name:'recordType', type:'int', defaultValue:1050}, //1055
			{ xtype:'textfield', hidden:true, fieldLabel:'Person Sequence Number', name:'personSequenceNumber', type:'int'},
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
					{ xtype:'combo', fieldLabel:'Prefix', name:'namePrefix', width:75, store: Ext.StoreManager.lookup('dictionary.namePrefix'),
						displayField:'desc',
						valueField:'id',
						triggerAction:'all',
						typeAhead: true,
						forceSelection: true,
						queryMode:'local'
					},
					{ fieldLabel:'First', name:'firstName', type:'string', margins: '0 0 0 5', flex:1 },
					{ fieldLabel:'MI', name:'middleInitial', type:'string', width:30, margins: '0 0 0 5'},
					{ fieldLabel:'Last', name:'lastName', type:'string', margins: '0 0 0 5', flex:1 },
					{ xtype:'combo', fieldLabel:'Suffix', name:'nameSuffix', width:75, store: Ext.StoreManager.lookup('dictionary.nameSuffix'),
						displayField:'desc',
						valueField:'id',
						triggerAction:'all',
						typeAhead: true,
						forceSelection: true,
						queryMode:'local', margins: '0 0 0 5'}
				]
			},
			{ fieldLabel:'Business Name', name:'businessName', type:'string'},
			{ fieldLabel:'Phone', name:'phone', type:'int'},
			{ xtype:'addressView', title:'Address' },
		];
		this.callParent(arguments);
	}
});