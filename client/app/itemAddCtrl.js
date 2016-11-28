//Class definition for adding items
var ItemAddCtrl = (function () {
    function ItemAddCtrl(dataAccessService, $window) {
        this.dataAccessService = dataAccessService;
        this.$window = $window;
        this.items = [];
        this.title = "Product List";
    }
    //Function Definition for adding items
    ItemAddCtrl.prototype.addItem = function () {
        var item = new app.domain.Item(this.item.productid, this.item.name, this.item.price, this.item.grapes, this.item.country, this.item.region, this.item.notes, this.item.url);
        this.item.name = this.item.grapes = this.item.country = this.item.region = this.item.notes = this.item.url = "";
        this.item.productid = this.item.price = undefined;
        this.items.push(item);
        var resource = this.dataAccessService.getItemResource();
        resource.save(item); //Saving item to db
        this.$window.alert("New Wine Added");
    };
    ItemAddCtrl.$inject = ["dataAccessService", "$window"];
    return ItemAddCtrl;
}());
angular
    .module("myApp")
    .controller("ItemAddCtrl", ItemAddCtrl);
