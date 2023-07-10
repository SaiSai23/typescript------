"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function showTitle() {
    console.log("My website Tiltle");
}
showTitle();
function getText(txt) {
    console.log("show: ".concat(txt));
}
getText("have fun");
function sumNumber(n1, n2) {
    return n1 + n2;
}
var res = sumNumber(23, 96);
console.log("\u0E1C\u0E25\u0E1A\u0E27\u0E01\u0E40\u0E17\u0E48\u0E32\u0E01\u0E31\u0E1A ".concat(res));
function sumBMI(w1, h1) {
    return w1 / (h1 * h1);
}
var bmi = sumBMI(57, 1.58);
console.log("\u0E04\u0E48\u0E32BMI\u0E40\u0E17\u0E48\u0E32\u0E01\u0E31\u0E1A ".concat(bmi));
var sumNumber00 = function (n0, n00) { return n0 + n00; };
var resSum = sumNumber00(36, 84);
console.log("\u0E1C\u0E25\u0E1A\u0E27\u0E01\u0E40\u0E17\u0E48\u0E32\u0E01\u0E31\u0E1A ".concat(resSum));
// class 
var Rectagle = /** @class */ (function () {
    function Rectagle() {
    }
    Rectagle.prototype.calRec = function () {
        return this.w * this.h;
    };
    return Rectagle;
}());
var rect = new Rectagle();
rect.h = 67;
rect.w = 74;
console.log("\u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48 4 \u0E40\u0E2B\u0E25\u0E35\u0E48\u0E22\u0E21\u0E40\u0E17\u0E48\u0E32\u0E01\u0E31\u0E1A ".concat(rect.calRec()));
