//Interface definition for adding items
interface IItemAddCtrlModel {
    title:string;
    items: app.domain.IItem[];
    item : app.domain.IItem;
    addItem():void;
}
//Class definition for adding items
class ItemAddCtrl implements IItemAddCtrlModel {
    title:string;
    items:app.domain.IItem[]=[];
    item: app.domain.IItem;
    static $inject=["dataAccessService","$window"];
    constructor(private dataAccessService: app.common.DataAccessService,private $window: ng.IWindowService){
        this.title= "Product List";           
    }
    //Function Definition for adding items
    addItem():void{
            
            var item=new app.domain.Item(this.item.productid,this.item.name,this.item.price,this.item.grapes,this.item.country,this.item.region,this.item.notes,this.item.url);
            this.item.name=this.item.grapes=this.item.country=this.item.region=this.item.notes=this.item.url="";
            this.item.productid=this.item.price=undefined;
            this.items.push(item);
            let resource = this.dataAccessService.getItemResource();
            resource.save(item);//Saving item to db
            this.$window.alert("New Wine Added");
    }
 
}
angular
      .module("myApp")
      .controller("ItemAddCtrl",
          ItemAddCtrl);