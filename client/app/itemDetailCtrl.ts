module app.itemDetail{
    //Interface definition for viewing specific item
    interface IItemDetailModel{
        title:string;
        item:app.domain.IItem;
    }
    //Interface definition for retrieving item based on product id
     interface IItemParams extends ng.route.IRouteParamsService {
         productid:number;

     }
    //Class definition for viewing specific item
    class ItemDetailCtrl implements IItemDetailModel{
        title:string;
        item:app.domain.IItem;

        static $inject=["$routeParams","dataAccessService"];
        //For viewing the details for each item
        constructor(private $routeParams:IItemParams,
            private dataAccessService:app.common.DataAccessService){
            this.title="Product Detail";
            //Retrieving Id for viewing each item
            var id=$routeParams.productid;
            var itemResource=dataAccessService.getItemResource();
            itemResource.get({productid:id},(data:app.domain.IItem) => {
              this.item= data;      
            }); 
        }
    }
angular
      .module("myApp")
      .controller("ItemDetailCtrl",
          ItemDetailCtrl);
}