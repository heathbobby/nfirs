Ext.define('AM.model.User', {
	extend: 'Ext.data.Model',
	proxy: {
		type: 'couchProxy',
		url: '/couchdb',
		databaseName:'nfirs',
		designName:'personnel',
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

	},
	fields:[
			{ name:'id', mapping:'_id', type:'string' },
			{ name:'_rev', type:"string" },
			{ name:'docType', defaultValue:'personnel' },
			{ name:'firstName' },
			{ name:'lastName' },
			{ name:'middleInitial' },
			{ name:'personnelId' },
			{ name:'rank' }
	]
});