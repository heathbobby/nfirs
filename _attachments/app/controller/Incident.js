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
		'incident.List'
	],
	models:['incident.Incident','incident.Basic'],
	stores:['incident.Incident'],
	init: function() {
		this.control({
			'basicincident button[action=save]': {
				click: this.updateIncident
			},
			'incidentlist':{
				itemdblclick: function(){ Ext.ux.Router.redirect('incident/' + record.getId() + '/edit'); }
			},
			'incidentlist button':{
				click: function(){ Ext.ux.Router.redirect('incident/create'); }
			}
		});
	},

	updateIncident:function(button){
		var form = button.up('form'),
		record = form.getRecord(),
		values = form.getValues();
		record.set(values);
	},
	//Actions
	list: function(){
		this.render('incident.List');
	},
	edit: function(){
		this.render('incident.Incident');
	},
	create: function(){
		this.render('incident.Incident');	
	}
});