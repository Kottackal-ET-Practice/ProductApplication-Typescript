var app;
(function (app) {
    var common;
    (function (common) {
        var DataAccessService = (function () {
            function DataAccessService($resource) {
                this.$resource = $resource;
            }
            DataAccessService.prototype.getItemResource = function () {
                return this.$resource("/api/items/:productid", {}, {
                    transformResponse: function (data, headers) {
                        return angular.fromJson(data);
                    },
                    post: { method: 'POST' },
                    query: { method: 'GET', isArray: true },
                    'update': { method: 'PUT', params: { id: "@id" } },
                    'delete': { method: 'DELETE', params: { productid: "@productid" } }
                });
            };
            DataAccessService.$inject = ["$resource"];
            return DataAccessService;
        }());
        common.DataAccessService = DataAccessService;
        angular
            .module("common.services")
            .service("dataAccessService", DataAccessService);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
