Ext.define('AM.model.User', {
	extend: 'Ext.data.Model',
	proxy: { 
		type: 'rest', 
		url: '/couchdb/nfirs',
		reader: {
			type:'json',
			root:'rows',
			record:'value'
		},
		api: {
			read:'/couchdb/nfirs/_design/personnel/_view/all'
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