//Class Declaration
var ItemCtrl = (function () {
    function ItemCtrl(dataAccessService, $window) {
        var _this = this;
        this.dataAccessService = dataAccessService;
        this.$window = $window;
        this.title = "Product List";
        this.items = [];
        var itemResource = dataAccessService.getItemResource();
        itemResource.query(function (data) {
            _this.items = data;
        });
    }
    //Function for deleting item     
    ItemCtrl.prototype.deleteItem = function (index) {
        var deletedItem = this.items[index];
        this.items.splice(index, 1);
        var resource = this.dataAccessService.getItemResource();
        resource.delete({ productid: deletedItem.productid });
        this.$window.alert("Wine Deleted");
    };
    ItemCtrl.prototype.showItem = function (index) {
        this.selectedItem = this.items[index];
    };
    ItemCtrl.prototype.showHide = function () {
        this.isvisible = this.isvisible ? false : true;
    };
    ItemCtrl.prototype.editItem = function (editItem) {
        var _this = this;
        console.log(editItem);
        var resource = this.dataAccessService.getItemResource();
        resource.update({ id: editItem.id }, editItem);
        var itemResource = this.dataAccessService.getItemResource();
        itemResource.query(function (data) {
            _this.items = data;
        });
        this.$window.alert("Wine Updated");
    };
    ItemCtrl.$inject = ["dataAccessService", "$window"];
    return ItemCtrl;
}());
angular
    .module("myApp")
    .controller("ItemCtrl", ItemCtrl);
