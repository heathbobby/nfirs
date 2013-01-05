Ext.define('AM.model.dictionary.stateTerritoryAbbreviations', {
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
			read:'/couchdb/nfirs/_design/metadata/_view/state_territory_abbreviations'
		}
	}});