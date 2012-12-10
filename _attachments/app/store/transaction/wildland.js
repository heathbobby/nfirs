Ext.define('AM.model.transaction.Wildland', {
    extend: 'AM.model.transaction.Transaction',
    fields: [
	 {name:'recordType', type:'int', defaultValue:1300},
	 {name:'latitude', type:'float'},
	 {name:'longitude', type:'float'},
	 {name:'township', type:'int'},
	 {name:'northSouth'},//Coded
	 {name:'range', type:'int'},
	 {name:'eastWest'}, //Coded
	 {name:'section', type:'int'},
	 {name:'subsection'}, //Coded
	 {name:'meridian'}, //Coded
	 {name:'areaType'}, //Coded
	 {name:'wildlandFireCause'},//Coded
	 {name:'humanFactorsContributing'},//Coded
	 {name:'factorsContributingToIgnitionFactors'},//Coded
	 {name:'fireSuppressionFactors'},//Coded
	 {name:'heatSource'},//Coded
	 {name:'mobilePropertyType'},//Coded
	 {name:'equipmentInvolvedInIgnition'},//Coded
	 {name:'NFDRSWeatherStationId', type:'string'},
	 {name:'weatherType'},//Coded
	 {name:'windDirection'},//Coded
	 {name:'windSpeed', type:'int'},
	 {name:'airTemperature', type:'int'},
	 {name:'relativeHumidity', type:'int'},
	 {name:'fuelMoisture', type:'int'},
	 {name:'fireDangerRating'},//Coded
	 {name:'numberOfBuildingsInvolved', type:'int'},
	 {name:'numberOfBuildingsThreatened', type:'int'},
	 {name:'totalAcresBurned', type:'float'},
	 {name:'primaryCropBurned1', type:'string'},
	 {name:'primaryCropBurned2', type:'string'},
	 {name:'primaryCropBurned3', type:'string'},
	 {name:'undeterminedAcresBurnedPcnt', type:'int'},
	 {name:'taxPayingAcresBurnedPcnt', type:'int'},
	 {name:'nonTaxPayingAcresBurnedPcnt', type:'int'},
	 {name:'cityTownVillageLocalAcresBurnedPcnt', type:'int'},
	 {name:'countyOrParishAcresBurnedPcnt', type:'int'},
	 {name:'stateOrProvinceAcresBurnedPcnt', type:'int'},
	 {name:'federalAcresBurnedPcnt', type:'int'},
	 {name:'foreignAcresBurnedPcnt', type:'int'},
	 {name:'militaryAcresBurnedPcnt', type:'int'},
	 {name:'otherAcresBurnedPcnt', type:'int'},
	 {name:'propertyManagementOwnership'},//Coded
	 {name:'federalAgencyCode', type:'string'},
	 {name:'NFDRSFuelModelAtOrigin'},//Coded
	 {name:'personResponsibleForFire'},//Coded
	 {name:'gender'},//Coded
	 {name:'age', type:'float'},
	 {name:'activityOfPerson'},//Coded
	 {name:'horizontalDistanceFromRow', type:'int'},
	 {name:'typeOfRow'},//Coded
	 {name:'elevation', type:'int'},
	 {name:'relativePositionOnSlope'},//Coded
	 {name:'aspect'},//Coded
	 {name:'flameLength', type:'int'},
	 {name:'rateOfSpread', type:'int'}
	]
});