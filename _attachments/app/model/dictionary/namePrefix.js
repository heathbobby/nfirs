Ext.define('AM.model.dictionary.NamePrefix', {
	extend: 'AM.model.dictionary.Dictionary',
	proxy: { 
		type: 'rest', 
		url: '/couchdb/nfirs',
		reader: {
			type:'json',
			root:'rows',
			record:'value'
		},
		api: {
			read:'/couchdb/nfirs/_design/metadata/_view/name_prefix'
		}
	}
});