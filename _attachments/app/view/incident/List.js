Ext.define('AM.view.incident.List' ,{
	extend: 'Ext.ux.grid.CrudGrid',
	alias: 'widget.incidentlist',
	//requires:['Ext.ux.grid.CrudGrid'],
	title: 'All Incidents',
	store:'incident.Incident',
	/*dockedItems:[
		{ xtype:'toolbar', items:['->', 
				{ xtype:'button', text:'New Incident', itemId:'newIncident'}
			]
		}
	],*/
	initComponent: function() {

		this.columns = [
			{header: 'Incident Number', dataIndex: 'incidentNumber', flex:1},
			{header: 'Alarm Date',  dataIndex: 'alarmDate',  flex: 1}
		];
		
		this.callParent(arguments);
	}
});