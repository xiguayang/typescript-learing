"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer_1 = require("./Customer");
var myCustomer = new Customer_1.Customer("Bala", "Hei");
myCustomer.lastName = "Z";
console.log(myCustomer.lastName);
