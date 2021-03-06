"use strict";
var Customer = /** @class */ (function () {
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
    function Customer(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
var myCustomer = new Customer("Bala", "Hei");
myCustomer.lastName = "Z";
console.log(myCustomer.lastName);
