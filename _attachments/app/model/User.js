Ext.define('AM.model.User', {
	extend: 'Ext.data.Model',
	proxy: { 
		type: 'couchProxy', 
		url: '/couchdb/nfirs',
		reader: {
			type:'couchReader',
			root:'rows',
			record:'value',
			idProperty: '_id'
		},
		api: {
			read:'/couchdb/nfirs/_design/personnel/_view/all',
			create:'/couchdb/nfirs',
			update:'/couchdb/nfirs',
			destroy:'/couchdb/nfirs'
		},
		
	},
	fields:[
			{ name:'firstName' },
			{ name:'lastName' },
			{ name:'middleInitial' },
			{ name:'personnelId' },
			{ name:'rank' }
	]
});