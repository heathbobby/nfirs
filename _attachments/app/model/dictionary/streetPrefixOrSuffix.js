Ext.define('AM.model.dictionary.streetPrefixOrSuffix', {
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
			read:'/couchdb/nfirs/_design/metadata/_view/street_prefix_or_suffix'
		}
	}
});