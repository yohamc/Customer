sap.ui.define([
	"sap/ui/core/UIComponent",
	"LogaliUI5/Customer/model/models",
	"sap/ui/model/resource/ResourceModel"
], function (UIComponent, models, ResourceModel) {

	return UIComponent.extend("LogaliUI5.Customer.Component", {
		
		metadata: {
			manifest: "json"
		},


		init: function () {
			//call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);

			//Set model on Views
			this.setModel(models.createRecipient());

			//Set i18n model on view
			var i18nModel = new ResourceModel({
				bundleName: "LogaliUI5.Customer.i18n.i18n"
			});

			this.setModel(i18nModel, "i18n");
		}
	});
});
