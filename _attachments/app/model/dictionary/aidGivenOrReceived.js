Ext.define('AM.model.dictionary.aidGivenOrReceived', {
	extend: 'AM.model.dictionary.dictionary',
	proxy: { 
		type: 'rest', 
		url: '/couchdb/nfirs',
		limitParam: undefined,
		pageParam: undefined,
		startParam: undefined,
		reader: {
			type:'json',
			root:'rows',
			record:'value'
		},
		api: {
			read:'/couchdb/nfirs/_design/metadata/_view/aid_given_or_received'
		}
	}
});