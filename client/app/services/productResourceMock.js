var app;
(function (app) {
    var common;
    (function (common) {
        var mockResource = angular
            .module("productResourceMock", ["ngMockE2E"]);
        mockResource.run(mockRun);
        mockRun.$inject = ["$httpBackend"];
        function mockRun($httpBackend) {
            var items = [];
            var item;
            item = new app.domain.Item(1, "Wine Name 1", 35, "Wine Grapes 1", "India", "Kerala", "notes about Wine Name1", "bootstrap/pics/calera.jpg");
            items.push(item);
            item = new app.domain.Item(2, "Wine Name 2", 35, "Wine Grapes 2", "India", "Kerala", "notes about Wine Name2", "bootstrap/pics/calera.jpg");
            items.push(item);
            item = new app.domain.Item(3, "Wine Name 3", 35, "Wine Grapes 3", "India", "Kerala", "notes about Wine Name3", "bootstrap/pics/calera.jpg");
            items.push(item);
            item = new app.domain.Item(4, "Wine Name 4", 35, "Wine Grapes 4", "India", "Kerala", "notes about Wine Name4", "bootstrap/pics/calera.jpg");
            items.push(item);
            item = new app.domain.Item(5, "Wine Name 5", 35, "Wine Grapes 5", "India", "Kerala", "notes about Wine Name5", "bootstrap/pics/calera.jpg");
            items.push(item);
            var itemUrl = "/api/items";
            $httpBackend.whenGET(itemUrl).respond(items);
            var editingRegex = new RegExp(itemUrl + "/[0-9][0-9]*", '');
            $httpBackend.whenGET(editingRegex).respond(function (method, url, data) {
                var item = { "productid": 0 };
                var parameters = url.split('/');
                var length = parameters.length;
                var id = +parameters[length - 1];
                if (id > 0) {
                    for (var i = 0; i < items.length; i++) {
                        if (items[i].productid == id) {
                            item = items[i];
                            break;
                        }
                    }
                }
                return [200, item, {}];
            });
            // Catch all for testing purposes
            $httpBackend.whenGET(/api/).respond(function (method, url, data) {
                return [200, items, {}];
            });
            // Pass through any requests for application files
            $httpBackend.whenGET(/app/).passThrough();
        }
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
