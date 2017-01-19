var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function myPropertyDecorator(target, name) {
    console.log("My Target is: " + target);
    console.log("My Property Name: " + name);
    Object.defineProperty(target, name, { value: 'Soujanya' });
}
function mySecondPropertyDecorator(target, designation) {
    console.log("My Target is: " + target);
    console.log("My Property Name: " + designation);
    Object.defineProperty(target, designation, { value: 'Software Engineer' });
}
var myPropertyDecoratorExample = (function () {
    function myPropertyDecoratorExample() {
    }
    return myPropertyDecoratorExample;
}());
__decorate([
    myPropertyDecorator
], myPropertyDecoratorExample.prototype, "name", void 0);
__decorate([
    mySecondPropertyDecorator
], myPropertyDecoratorExample.prototype, "designation", void 0);
var obj = new myPropertyDecoratorExample();
console.log(obj.name);
console.log(obj.designation);
