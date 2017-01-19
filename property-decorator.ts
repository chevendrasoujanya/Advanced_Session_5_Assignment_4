function myPropertyDecorator(target, name) {
	console.log("My Target is: " + target);
	console.log("My Property Name: " + name);

	Object.defineProperty(target, name, {value: 'Soujanya'});
}

function mySecondPropertyDecorator(target, designation) {
	console.log("My Target is: " + target);
	console.log("My Property Name: " + designation);

	Object.defineProperty(target, designation, {value: 'Software Engineer'});
}

class myPropertyDecoratorExample {
	@myPropertyDecorator
	name: string;
	@mySecondPropertyDecorator
	designation: string;
}

let obj = new myPropertyDecoratorExample();
console.log(obj.name);
console.log(obj.designation);