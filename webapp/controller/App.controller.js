sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";

	return Controller.extend("LogaliUI5/Customer.controller.App", {

		onShowHello: function () {
			var sHello = this.getView().getModel("i18n").getResourceBundle().getText("sayHello");
			var sName = this.getView().getModel().getProperty("/recipient/name");
			var sMsg = sHello.concat(" ").concat(sName);

			MessageToast.show(sMsg);
		}
	});
});