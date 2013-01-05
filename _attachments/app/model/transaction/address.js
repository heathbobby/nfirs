Ext.define('AM.model.transaction.address', {
	extend: 'AM.model.transaction.transaction',
	fields: [
		{name:'recordType', type:'int', defaultValue:1010},
		{name:'censusTract', type:'string'},
		{name:'locationType'}, //Coded
		{name:'numberOrMilepost', type:'string'},
		{name:'streetPrefix'}, //Coded
		{name:'streetOrHighwayName', type:'string'},
		{name:'streetType'}, //Coded
		{name:'streetSuffix'}, //Coded
		{name:'apartmentNumber', type:'string'},
		{name:'city', type:'string'},
		{name:'state'}, //Coded
		{name:'zip', type:'int'},
		{name:'crossStreetDirectionsOrNationalGrid', type:'string'}
	]
});