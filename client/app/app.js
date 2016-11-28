//Main Module Declaration
var app;
(function (app) {
    var main = angular.module("myApp", ["ngRoute", "common.services"]);
    //Configuring Routes
    main.config(routeConfig);
    routeConfig.$inject = ["$routeProvider"];
    function routeConfig($routeProvider) {
        $routeProvider
            .when("/", {
            templateUrl: "/app/tpl/ProductListItemView.html",
            controller: "ItemCtrl as vm"
        })
            .when("/showItem", {
            templateUrl: "/app/tpl/ProductListItemView.html",
            controller: "ItemCtrl as vm"
        })
            .when("/updateItem", {
            templateUrl: "/app/tpl/ProductEditView.html",
            controller: "ItemCtrl as vm"
        })
            .when("/itemDetail/:productid", {
            templateUrl: "/app/tpl/ProductDetailView.html",
            controller: "ItemDetailCtrl as vm"
        })
            .when("/addItem", {
            templateUrl: "/app/tpl/ProductView.html",
            controller: "ItemAddCtrl as vm"
        })
            .otherwise("/");
    }
})(app || (app = {}));
