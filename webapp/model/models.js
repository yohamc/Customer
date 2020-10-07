sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
], function (JSONModel, ResourceModel) {
	"use strict";

	return {
		createRecipient: function () {
			var oData = {
				recipient: {
					name: "Word"
				}
			};
			return new JSONModel(oData);
		}
	};
});