Ext.define('Ext.ux.form.field.GridField',{
	extend: 'Ext.form.field.Text',
	alias: 'widget.gridfield',
	grid:undefined,
	fieldMappings:{
		itemselect:{ },
		actions:{ }
	},
	initComponent:function(){
		this.callParent(this,arguments);
		console.log(this);
		//this.grid.on('itemclick',this.onActionClick,this);
	},
	onActionClick:function(){

		console.log('onClick',arguments);	
	}
});