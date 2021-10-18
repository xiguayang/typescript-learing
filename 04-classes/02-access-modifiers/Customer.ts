class Customer{
    //properties
    // private firstName: string;
    // private lastName: string;
    private _firstName: string;
    private _lastName: string;
    //constructor
    constructor(theFirst:string, theLast:string){
        this._firstName=theFirst;
        this._lastName=theLast;
        }
    public getFirstName():string{
        return this._firstName;
    }
    public setFirstName(theFirst:string): void{
            this._firstName=theFirst;
    }

    public get lastName():string{
        return this._lastName;
    }
    public set lastName(value:string){
        this._lastName=value;
    }
}
let myCustomer = new Customer("Bala", "Hei");
console.log(myCustomer);
myCustomer.setFirstName("Ryan");
console.log(myCustomer.getFirstName());

myCustomer.lastName="Z";
console.log(myCustomer.lastName);


