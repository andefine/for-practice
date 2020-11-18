"use strict";
var StackBaseArray = /** @class */ (function () {
    function StackBaseArray() {
        this.items = [];
    }
    StackBaseArray.prototype.push = function (element) {
        this.items.push(element);
    };
    StackBaseArray.prototype.pop = function (element) {
        return this.items.pop();
    };
    StackBaseArray.prototype.peek = function () {
        return this.items[this.items.length - 1];
    };
    StackBaseArray.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    StackBaseArray.prototype.size = function () {
        return this.items.length;
    };
    StackBaseArray.prototype.clear = function () {
        this.items = [];
    };
    return StackBaseArray;
}());
