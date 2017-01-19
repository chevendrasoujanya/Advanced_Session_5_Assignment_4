"use strict";
var operationsModule;
(function (operationsModule) {
    var myMathOperations = (function () {
        function myMathOperations() {
        }
        myMathOperations.prototype.addition = function (a, b) {
            console.log("Result of Addition " + a + " and " + b + " is : " + (a + b));
        };
        myMathOperations.prototype.subtraction = function (a, b) {
            console.log("Result of Subtraction " + a + " and " + b + " is : " + (a - b));
        };
        myMathOperations.prototype.multiplication = function (a, b) {
            console.log("Result of Multiplication " + a + " and " + b + " is : " + (a * b));
        };
        myMathOperations.prototype.division = function (a, b) {
            console.log("Result of Division " + a + " and " + b + " is : " + (a / b));
        };
        return myMathOperations;
    }());
    operationsModule.myMathOperations = myMathOperations;
})(operationsModule = exports.operationsModule || (exports.operationsModule = {}));
