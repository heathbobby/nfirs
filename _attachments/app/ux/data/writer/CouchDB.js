Ext.define('Ext.ux.data.writer.CouchDB',{
	extend:'Ext.data.writer.Writer',
	getRecordData: function(record, operation) {
		var isPhantom = record.phantom === true,
				writeAll = this.writeAllFields || isPhantom,
				fields = record.fields,
				fieldItems = fields.items,
				data = {},
				clientIdProperty = record.clientIdProperty,
				changes,
				field,
				key,
				value,
				f, fLen;

		if (writeAll) {
				fLen = fieldItems.length;

				for (f = 0; f < fLen; f++) {
						field = fieldItems[f];
						if (field.persist) {
								this.writeValue(data, field, record);
						}
				}
		} else {
				// Only write the changes
				changes = record.getChanges();
				for (key in changes) {
						if (changes.hasOwnProperty(key)) {
								field = fields.get(key);
								if (field.persist) {
										this.writeValue(data, field, record);
								}
						}
				}
		}
		if (isPhantom) {
				if (clientIdProperty && operation && operation.records.length > 1) {
						// include clientId for phantom records, if multiple records are being written to the server in one operation.
						// The server can then return the clientId with each record so the operation can match the server records with the client records
						data[clientIdProperty] = record.internalId;
				}
		} else {
				// always include the id for non phantoms
				data[record.idProperty] = record.getId();
		}

		return data;
	}
});