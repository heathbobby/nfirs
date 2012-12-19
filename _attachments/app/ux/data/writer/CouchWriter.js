Ext.define('Ext.ux.data.writer.CouchWriter',{
	extend:'Ext.data.writer.Writer',
	alias:'writer.couchWriter',

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
	},

	writeValue: function(data, field, record){
				var name = field[this.nameProperty] || field.name,
						dateFormat = this.dateFormat || field.dateWriteFormat || field.dateFormat,
						value = record.get(field.name);
						
				if (field.serialize) {
						data[name] = field.serialize(value, record);
				} else if (field.type === Ext.data.Types.DATE && dateFormat && Ext.isDate(value)) {
						data[name] = Ext.Date.format(value, dateFormat);
				} else {
						data[name] = value;
				}
		},

	writeRecords: function(request, data){
		 var root = this.root;
				
				if (this.allowSingle && data.length == 1) {
						// convert to single object format
						data = data[0];
				}
				
				if (this.encode) {
						if (root) {
								// sending as a param, need to encode
								request.params[root] = Ext.encode(data);
						} else {
								//<debug>
								Ext.Error.raise('Must specify a root when using encode');
								//</debug>
						}
				} else {
						// send as jsonData
						request.jsonData = request.jsonData || {};
						if (root) {
								request.jsonData[root] = data;
						} else {
								request.jsonData = data;
						}
				}
				return request;
	}
});