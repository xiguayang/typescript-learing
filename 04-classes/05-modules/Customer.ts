export class Customer{
    //properties
    // private firstName: string;
    // private lastName: string;
    // private _firstName: string;
    // private _lastName: string;
    // //constructor
    // constructor(theFirst:string, theLast:string){
    //     this._firstName=theFirst;
    //     this._lastName=theLast;
    //     }
    constructor(private _firstName:string,private _lastName:string){}


    get firstName():string{
        return this._firstName;
    }
    set firstName(value:string){
        this._firstName=value;
    }
     get lastName():string{
        return this._lastName;
    }
     set lastName(value:string){
        this._lastName=value;
    }
}



