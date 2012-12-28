Ext.define('AM.model.incident.Incident', {
	extend: 'Ext.data.Model',
	fields: [
		{ name:'id', mapping:'_id', type:'string' },
		{ name:'_rev', type:"string" },
		{ name:'docType', defaultValue:'incident' },
		'NFIRSVersion',
		'fireDeptId',
		'fireDeptState',
		'alarmDate',
		'incidentNumber',
		'exposureNumber',
		'recordType',
		'transactionType',
		'fireDeptStation',
		{name:'BasicModule'}
	],
	associations:[{type:'hasOne', model:'incident.Basic' }],
	proxy: { 
		type: 'couchProxy',
		url: '/couchdb',
		databaseName:'nfirs',
		designName:'incident',
		viewName:'all',
		reader: {
			type:'couchReader',
			root:'rows',
			totalProperty: 'total_rows'
		},
		api: {
			read:'/couchdb/nfirs',
			create:'/couchdb/nfirs',
			update:'/couchdb/nfirs',
			destroy:'/couchdb/nfirs'
		},

	}
});