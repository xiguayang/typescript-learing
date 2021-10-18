"use strict";
var Customer = /** @class */ (function () {
    //constructor
    function Customer(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    Customer.prototype.getFirstName = function () {
        return this._firstName;
    };
    Customer.prototype.setFirstName = function (theFirst) {
        this._firstName = theFirst;
    };
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
console.log(myCustomer);
myCustomer.setFirstName("Ryan");
console.log(myCustomer.getFirstName());
myCustomer.lastName = "Z";
console.log(myCustomer.lastName);
