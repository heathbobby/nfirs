Ext.define('AM.controller.Admin', {
    extend: 'Ext.app.Controller',
    views: [
        'admin.Admin',
		'datadictionary.List'
    ],
    stores:['dictionary.ActionsTaken', 'dictionary.aidGivenOrReceived', 'dictionary.detector', 'dictionary.hazardousMaterialsReleased', 'dictionary.incidentType', 'dictionary.locationType', 'dictionary.mixedUseProperty', 'dictionary.namePrefix', 'dictionary.nameSuffix', 'dictionary.propertyUse', 'dictionary.stateTerritoryAbbreviations', 'dictionary.streetPrefixOrSuffix', 'dictionary.streetType'],
    init: function() {
        this.control( {
           'datadictionarylist': {
			   render:this.dataDictionaryList
		   }
        } );
    },

    dataDictionaryList: function() {
        //console.log('DataDictionaryList');
    }
});