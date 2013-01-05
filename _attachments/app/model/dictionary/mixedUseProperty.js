Ext.define('AM.model.dictionary.mixedUseProperty', {
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
			read:'/couchdb/nfirs/_design/metadata/_view/mixed_use_property'
		}
	}
});