Ext.define('AM.model.incident.Incident', {
    extend: 'Ext.data.Model',
    fields: [
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
		type: 'rest', 
		url: '/couchdb/incidents',
		reader: {
			type:'json'
		}
	}
});