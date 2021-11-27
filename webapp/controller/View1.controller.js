sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("iitp.zday2104.controller.View1", {
			onInit: function () {
                let oModel =new sap.ui.model.json.JSONModel();
                oModel.loadData("../model/data.json");
                this.getView().setModel(oModel);


                let oModel2=new sap.ui.model.json.JSONModel();
                oModel2.loadData("../mdoel/exp.json");
                this.getView().setModel(oModel2,"exP");

			},onSelect (oEvent){
                let fly = oEvent.getParameter("listItem").getBindingContext().getPath();
                let oTable = this.byId("idTable");
                oTable.bindElement(fly);

            }, onData(oEvent){
                let oData = oEvent.getParameter("listItem").getBindingContext().getPath();
                let oTable = this.byId("idPanel");
                oTable.bindElement(oData);
                oTable.setExpanded(oData);
            }, onSelectCombo(oEvent){
                // let sPath=oEvent.getParameter("selectedItem").getSelectedKey();
                let oCombo=this.byId("idTable");  
                let sPath=oEvent.getParameter("selectedItem").getBindingContext().getPath();
                // alert(oCombo);
                oCombo.bindElement(sPath);

            }
		});
	});
