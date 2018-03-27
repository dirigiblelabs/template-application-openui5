sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("HeavensKitchen.controller.View1", {
		onInit : function(){
			//TODO remove this and set it to the body in the index.html
			var element = document.getElementsByTagName("BODY")[0];
    		element.classList.add("sapUiSizeCompact");
			
			// instantiate the View
			var myView = this.getView(); 
			
			// create a Model and assign it to the View
			var oModel = new sap.ui.model.json.JSONModel();
			oModel.loadData("model/entity.json"); // to load data to the model
			myView.setModel(oModel);
			
			//identificate if this is add or edit
			this.bAdd = undefined;
		},
		onAddItem: function(){
			var oModel = new sap.ui.model.json.JSONModel();
			this.openDialog(oModel);
			this.bAdd = true;
		},
		onEditItem: function(oEvent){
			var oModel = new sap.ui.model.json.JSONModel(oEvent.getSource().getBindingContext().getObject());
			this.openDialog(oModel);	
			this.bAdd = false;
		},
		onDeleteItem: function(oEvent){
			var iId = oEvent.getSource().getBindingContext().getProperty("id");
			sap.m.MessageBox.confirm("Do you really want to delete this item?", {
			    title: "Confirm",                                  // default
			    onClose: function(oAction) {
			    	if (oAction === sap.m.MessageBox.Action.DELETE){
			    		this.deleteItem(iId);
			    	}
			    	
			    }.bind(this),                                     // default
			    styleClass: "",                                       // default
			    initialFocus: null,                                   // default
			    textDirection: sap.ui.core.TextDirection.Inherit,     // default
			    actions: [sap.m.MessageBox.Action.DELETE, sap.m.MessageBox.Action.CANCEL]
		    });	
		},
		openDialog: function(oModel){
			this.getView().setModel(oModel, "dialog");

			if (!this._oDialog) {
				this._oDialog = new sap.ui.xmlfragment("HeavensKitchen.view.AddEditDialog", this);
				this.getView().addDependent(this._oDialog);
			}
			this._oDialog.open();	
		},
		handleSaveDialog: function(){
			var oView = this.getView(),
				oDialogModel = oView.getModel("dialog"),
				sName = oDialogModel.getProperty("/name"),
				sDescription = oDialogModel.getProperty("/description"),
				iPrice = oDialogModel.getProperty("/price"),
				oModel = oView.getModel(),
				aProducts = oModel.getProperty("/");
				
			if (this.bAdd) {
				aProducts.push({
				name: sName,
				description: sDescription,
				price: iPrice
			});	
			}	

			oModel.refresh();
			this._oDialog.close();
		},
		handleCloseDialog: function(){
			this._oDialog.close();
		},
		deleteItem: function(iId){
			var oModel = this.getView().getModel(),
				aData =	oModel.getProperty("/ProductCollection"),
				iIndex = aData.findIndex(function(oObject){
					return oObject["id"] === iId;
				});
				
				aData.splice(iIndex, 1);
				oModel.refresh();
			}
	});
});