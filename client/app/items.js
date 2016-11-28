var app;
(function (app) {
    var domain;
    (function (domain) {
        //Class Definition for each item
        var Item = (function () {
            function Item(productid, name, price, grapes, country, region, notes, url) {
                this.productid = productid;
                this.name = name;
                this.price = price;
                this.grapes = grapes;
                this.country = country;
                this.region = region;
                this.notes = notes;
                this.url = url;
            }
            return Item;
        }());
        domain.Item = Item;
    })(domain = app.domain || (app.domain = {}));
})(app || (app = {}));
