"use strict";
exports.__esModule = true;
function getProduct(product) {
    return product;
}
console.log(getProduct("hello"));
console.log(getProduct(222));
console.log(getProduct(true));
function getProductTwo(product) {
    return product;
}
console.log(getProductTwo(false));
// ================================================================ Gererics With Arrow Fuctions =================================================================
var getProductThree = function (product) {
    return product;
};
console.log(getProductThree("hello"));
console.log(getProductThree(222));
console.log(getProductThree(true));
var getProductFour = function (product) {
    return product;
};
function getProperty(obj, key) {
    return obj[key];
}
var myObj = { a: 1, b: 2, c: 3, d: 4 };
// console.log(getProperty(myObj , "m")); /Argument of type '"m"' is not assignable to parameter of type '"a" | "b" | "c" | "d"'.ts(2345)
console.log(getProperty(myObj, "d"));
var Sellable = /** @class */ (function () {
    function Sellable() {
        this.item = [];
    }
    Sellable.prototype.AddItem = function (item) {
        this.item.push(item);
    };
    return Sellable;
}());
var sellableObj = new Sellable();
sellableObj.AddItem("a");
sellableObj.AddItem(1);
console.log(sellableObj.item);
