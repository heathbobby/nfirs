Ext.define('AM.model.transaction.Authority', {
	extend: 'AM.model.transaction.Transaction',
	fields: [
		{name:'authorityPersonnelId', type:'string'},
		{name:'authorityFirstName'}, //Coded
		{name:'authorityMiddleInitial', type:'string'},
		{name:'authorityLastName'}, //Coded
		{name:'authorityRank', type:'int'},
		{name:'authorityAssignment'}, //Coded
		{name:'authorityDate', type:'int'}
	]
});