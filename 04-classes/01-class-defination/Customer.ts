class Customer{
    //properties
    firstName: string;
     lastName: string;
    //constructor
    constructor(theFirst:string, theLast:string){
        this.firstName=theFirst;
        this.lastName=theLast;
        }

}
    
let myCustomer = new Customer("Bala", "Hei");
console.log(myCustomer);
// myCustomer.firstName="Ryan";
// myCustomer.lastName="Z";


