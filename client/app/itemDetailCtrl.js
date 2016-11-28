var app;
(function (app) {
    var itemDetail;
    (function (itemDetail) {
        //Class definition for viewing specific item
        var ItemDetailCtrl = (function () {
            //For viewing the details for each item
            function ItemDetailCtrl($routeParams, dataAccessService) {
                var _this = this;
                this.$routeParams = $routeParams;
                this.dataAccessService = dataAccessService;
                this.title = "Product Detail";
                //Retrieving Id for viewing each item
                var id = $routeParams.productid;
                var itemResource = dataAccessService.getItemResource();
                itemResource.get({ productid: id }, function (data) {
                    _this.item = data;
                });
            }
            ItemDetailCtrl.$inject = ["$routeParams", "dataAccessService"];
            return ItemDetailCtrl;
        }());
        angular
            .module("myApp")
            .controller("ItemDetailCtrl", ItemDetailCtrl);
    })(itemDetail = app.itemDetail || (app.itemDetail = {}));
})(app || (app = {}));
