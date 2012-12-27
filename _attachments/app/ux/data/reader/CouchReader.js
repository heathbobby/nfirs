Ext.define('Ext.ux.data.reader.CouchReader', {
	extend: 'Ext.data.reader.Json',
	alias: 'reader.couchReader',
	idProperty: '_id',
	root: 'rows',
	record: 'doc',
	successProperty: 'ok',
	totalProperty: 'total_rows',
	
	readRecords: function(data) {
		if (!Ext.isDefined(data.rows)) {
			var wrappedData = {
				rows: [{ doc: data }]
			};
			return this.callParent([wrappedData]);
		} else {
			return this.callParent([data]);
		}
	}
});
