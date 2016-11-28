module app.domain {
  //Interface Definition for each item
   export interface IItem {
                
                id?:number;
                productid:number,
                name:string,
                price:number,
                grapes:string,
                country:string,
                region:string,
                notes: string,
                url:string
    }
//Class Definition for each item
export class Item implements IItem {

    constructor(public productid:number,
                public name:string,
                public price:number,
                public grapes:string,
                public country:string,
                public region:string,
                public notes:string,
                public url:string){

    }

}
}