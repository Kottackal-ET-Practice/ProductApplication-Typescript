//Interface Definition
interface IItemCtrlModel {
    title:string;
    items: app.domain.IItem[];
    item : app.domain.IItem;
    deleteItem(index : number):void;
    showHide():void;
    showItem(index:number):void;
    editItem(editItem:app.domain.IItem):void;
    isvisible:boolean;
    selectedItem:app.domain.IItem;
}
//Class Declaration
class ItemCtrl implements IItemCtrlModel {
    title:string;
    items:app.domain.IItem[];
    item : app.domain.IItem;
    isvisible:boolean;
    selectedItem:app.domain.IItem;
    static $inject=["dataAccessService","$window"];
    constructor(private dataAccessService: app.common.DataAccessService,private $window: ng.IWindowService){
        this.title= "Product List";
        this.items=[];
        var itemResource=dataAccessService.getItemResource();
        itemResource.query((data:app.domain.IItem[]) => {
              this.items= data;
              
        }); 
    } 
    //Function for deleting item     
    deleteItem(index : number) : void {
              let deletedItem = this.items[index];
              this.items.splice(index, 1);
              var resource = this.dataAccessService.getItemResource();
              resource.delete({productid : deletedItem.productid});
              this.$window.alert("Wine Deleted");
      } 
      showItem(index:number):void{
          this.selectedItem = this.items[index];
      }
      showHide():void{
           this.isvisible=this.isvisible ? false : true;
      }
      editItem(editItem:app.domain.IItem):void{
            console.log(editItem);
            var resource = this.dataAccessService.getItemResource();
            resource.update({id : editItem.id},editItem);
            var itemResource=this.dataAccessService.getItemResource();
                     itemResource.query((data:app.domain.IItem[]) => {
                            this.items= data;       
            }); 
            this.$window.alert("Wine Updated");
      }

}
angular
      .module("myApp")
      .controller("ItemCtrl",
          ItemCtrl);