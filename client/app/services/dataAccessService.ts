module app.common {
    interface IDataAccessService {
        //Define custom method
        getItemResource():ng.resource.IResourceClass<IItemResource>;    
    }
    interface IItemResource 
             extends ng.resource.IResource<app.domain.IItem> { 
    }
    interface IItemResourceClass extends ng.resource.IResourceClass<IItemResource> {
       //Define method for updation
        update(IItem) : app.domain.IItem;
    }  
    export class DataAccessService implements IDataAccessService{
    
         static $inject=["$resource"]
         constructor(private $resource:ng.resource.IResourceService){
         }
         getItemResource():ng.resource.IResourceClass<IItemResource>{

              return this.$resource("/api/items/:productid", {}, {
                	transformResponse: function(data, headers) {
                    return angular.fromJson(data);
                },
				post: {method:'POST'},
				query: {method: 'GET', isArray: true },
				'update': {method: 'PUT',params: { id:"@id" }},
				'delete': {method:'DELETE', params: { productid:"@productid" }}
          });        
       }
    }
angular
         .module("common.services")
         .service("dataAccessService",DataAccessService);       
}