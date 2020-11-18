"use strict";
var StackBaseObject = /** @class */ (function () {
    function StackBaseObject() {
        this.count = 0;
        this.items = {};
    }
    StackBaseObject.prototype.push = function (element) {
        this.items[this.count] = element;
        this.count++;
    };
    StackBaseObject.prototype.pop = function () {
        if (this.count === 0) {
            return undefined;
        }
        this.count--;
        var result = this.items[this.count];
        delete this.items[this.count];
        return result;
    };
    StackBaseObject.prototype.size = function () {
        return this.count;
    };
    StackBaseObject.prototype.isEmpty = function () {
        return this.count === 0;
    };
    StackBaseObject.prototype.peek = function () {
        if (this.count === 0) {
            return undefined;
        }
        return this.items[this.count - 1];
    };
    StackBaseObject.prototype.clear = function () {
        this.count = 0;
        this.items = {};
    };
    StackBaseObject.prototype.toString = function () {
        if (this.isEmpty()) {
            return '';
        }
        var objString = "" + this.items[0];
        for (var i = 1; i < this.count; i++) {
            objString = objString + "," + this.items[i];
        }
        return objString;
    };
    return StackBaseObject;
}());
var stack = new StackBaseObject();
console.log(Object.getOwnPropertyNames(stack));
console.log(Object.keys(stack));
console.log(stack.items);
var decimalToBinary = function (decNumber, base) {
    if (base === void 0) { base = 2; }
    if (!(base >= 2 && base <= 36)) {
        return '';
    }
    var digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var number = decNumber;
    var rem;
    var stack = new StackBaseObject();
    while (number > 0) {
        rem = Math.floor(number % base);
        stack.push(rem);
        number = Math.floor(number / base);
    }
    var binStr = '';
    while (!stack.isEmpty()) {
        binStr = "" + binStr + digits[stack.pop()];
    }
    return binStr;
};
console.log(decimalToBinary(100345, 8));
