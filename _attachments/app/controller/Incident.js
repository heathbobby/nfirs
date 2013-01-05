Ext.define('AM.controller.Incident', {
	extend: 'Ext.app.Controller',
	views: [
		'incident.Incident',
		'incident.Basic',
		'transaction.Address',
		'transaction.Aid',
		'transaction.Authority',
		'transaction.Person',
		'transaction.SpecialStudy',
		'incident.Supplemental',
		'incident.Fire',
		'incident.List',
		'user.List'
	],
	models:['incident.Incident','incident.Basic'],
	stores:[
		'Users',
		'incident.Incident',
		'dictionary.ActionsTaken',
		'dictionary.aidGivenOrReceived',
		'dictionary.detector',
		'dictionary.hazardousMaterialsReleased',
		'dictionary.incidentType',
		'dictionary.locationType',
		'dictionary.mixedUseProperty',
		'dictionary.namePrefix',
		'dictionary.nameSuffix',
		'dictionary.propertyUse',
		'dictionary.streetType', 
		'dictionary.streetPrefixOrSuffix', 
		'dictionary.stateTerritoryAbbreviations'
	],
	refs:[
		{ ref:'list', selector:'incidentlist'},
		{ ref:'incident', selector:'incident'}
	],
	init: function() {
		this.control({
			
			'incidentlist':{
				itemdblclick: this.onListRowDblClick,// function(){ Ext.ux.Router.redirect('incident/' + record.getId() + '/edit'); },
				rowcreate: this.create,
				rowedit: this.edit,
				scope:this
			},
			'incident':{
				cancel:this.list
			},
			'incident button[action=save]': {
				click: this.updateIncident
			}
		});
		this.getUsersStore().load();
	},

	updateIncident:function(button){
		var form = button.up('form'),
		record = form.getRecord(),
		values = form.getValues();
		console.log(values);
		record.set(values);
		record.save({ callback:this.list, scope:this });
	},
	onListRowDblClick: function(gridView, record, item, index, event, eventOptions )
	{
		this.edit( { id:record.getId() } );
		//Ext.ux.Router.redirect('users/' + record.getId() + '/edit');
	},
	//Actions
	list: function(){
		this.getIncidentIncidentStore().load();
		this.render('incident.List');
	},
	edit: function(params){
		var me = this,
			view,
			store = this.getIncidentIncidentStore(),
			record = store.getById(params.id) || Ext.create('AM.model.incident.Incident');
		if(!record)
		{    
			return;
		}
		this.render('incident.Incident');
		this.getIncident().down( 'form' ).loadRecord( record );
	},
	create: function(){
		console.log('incident.create',arguments);
		this.render('incident.Incident');	
	}
});