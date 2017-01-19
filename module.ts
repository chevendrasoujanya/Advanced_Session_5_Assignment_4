export module operationsModule {
	export class myMathOperations {
		addition(a, b) {
			console.log("Result of Addition " + a + " and " + b + " is : " + (a+b));
		}

		subtraction(a, b) {
			console.log("Result of Subtraction " + a + " and " + b + " is : "+ (a-b));	
		}

		multiplication(a, b) {
			console.log("Result of Multiplication " + a + " and " + b + " is : " + (a*b));
		}

		division(a, b) {
			console.log("Result of Division " + a + " and " + b + " is : " + (a/b));
		}
	}
}

