Ext.define('AM.view.incident.Incident', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.incident',
	autoScroll: true,
	layout: 'border',
    title: 'Incident',
    bodyStyle: { padding:'5px' },
    initComponent: function() {
        //this.addEvents('menuClick');
        this.items = [
			{ region:'center', itemId:'incidentCntnr', xtype:'panel', layout:'card', activeItem:0, items:[
				{ xtype:'basicincident', itemId:'basic', title:'Basic' },
				{ xtype:'supplementalincident', itemId:'supplemental', title:'Supplemental' },
				{ xtype:'fireincident', itemId:'fire', title:'Fire' } //,
                /*{ xtype:'structurefireincident', itemId:'structureFire', title:'Structure Fire' },
                { xtype:'firecasualtyincident', itemId:'fireServiceCasualty', title:'Fire Service Casualty' },
                { xtype:'casualtyincident', itemId:'civilianCasualty', title:'Casualty' },
                { xtype:'emsincident', itemId:'ems', title:'EMS' },
                { xtype:'hazmatincident', itemId:'hazmat', title:'HazMat' },
				{ xtype:'wildlandincident', itemId:'wildland', title:'Wildland Fire' },
				{ xtype:'apparatusincident', itemId:'apparatus', title:'Apparatus' },
				{ xtype:'personnelincident', itemId:'personnel', title:'Personnel' },
				{ xtype:'arsonincident', itemId:'arson', title:'Arson' }*/
			]},
			{
				xtype: 'menu',
				region : 'west',
				floating: false,
				split: true,
				width: 127,
				defaults: {
					scope: this,
					handler: this.onMenuItemClick
				},
				items: [{
					text: 'Basic',
					uri: 'basic'
				},{
					text: 'Supplemental',
					uri: 'supplemental'
				},
				{
					text: 'Fire',
					uri: 'fire'
				},{
                    text: 'Structure Fire',
                    uri: 'structureFire'
                },{
                    text: 'Fire Service Casualty',
                    uri: 'fireServiceCasualty'
                },{
                    text: 'Civilian Casualty',
                    uri: 'civilianCasualty'
                },{
                    text: 'EMS',
                    uri: 'ems'
                },{
                    text: 'HazMat',
                    uri: 'hazmat'
                },{
                    text: 'Wildland Fire',
                    uri: 'wildland'
                },{
                    text: 'Apparatus',
                    uri: 'apparatus'
                },{
                    text: 'Personnel',
                    uri: 'personnel'
                },{
                    text: 'Arson',
                    uri: 'arson'
                }
                ]
			}
		];
        this.buttons = [
            {
                text: 'Save',
                action: 'save'
            },
            {
                text: 'Cancel',
                scope: this,
                handler: this.close
            }
        ];
        
        this.callParent();
        this.incidentCntnr = this.down('#incidentCntnr');
    },
    onMenuItemClick: function(item)
    {
		//console.log(arguments);
		//Ext.ux.Router.redirect(item.uri);
		this.incidentCntnr.layout.setActiveItem(item.uri);
		//this.incidentCntnr.setActiveTab(item.uri);
    }
});