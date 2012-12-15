Ext.define('AM.model.dictionary.hazardousMaterialsReleased', {
	extend: 'AM.model.dictionary.dictionary',
	proxy: { 
		type: 'rest', 
		url: '/couchdb/nfirs',
		reader: {
			type:'json',
			root:'rows',
			record:'value'
		},
		api: {
			read:'/couchdb/nfirs/_design/metadata/_view/hazardous_materials_released'
		}
	}
});