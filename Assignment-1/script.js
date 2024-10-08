/////CREATING VARIABLES////


// Using var
var firstName = "bhavani";
var lastName = "shankar";
var age = 20;

console.log("Using var:");
console.log("First Name:", firstName);
console.log("Last Name:", lastName);
console.log("Age:", age);

// Using let
let city = "New York";
let country = "USA";

console.log("\nUsing let:");
console.log("City:", city);
console.log("Country:", country);

// Using const
const PI = 3.14159;

console.log("\nUsing const:");
console.log("PI:", PI);



/////////////VARIABLE SCOPE/////
///global vs local//

// Global variable
var globalVar = " global variable";

function outerFunction() {
   
    var outerVar = " the outer function";

    function innerFunction() {
        
        var innerVar = " in the inner function";

       
        console.log("Inside innerFunction:");
        console.log("Global variable:", globalVar); 
        console.log("Outer function variable:", outerVar); 
        console.log("Inner function variable:", innerVar); 
    }

    innerFunction();

  
    console.log("\nInside outerFunction:");
    console.log("Global variable:", globalVar); 
    console.log("Outer function variable:", outerVar); 
}

outerFunction();


console.log("\nOutside all functions:");
console.log("Global variable:", globalVar); 




//////////implication////
function scopeDemo() {
    // var example
    if (true) {
        var varVariable = "a var variable";
        console.log("Inside block with var:", varVariable); 
    }
    console.log("Outside block with var:", varVariable);


     // const example
     if (true) {
        const constVariable = "I am a const variable";
        console.log("Inside block with const:", constVariable); 
    }
    }


    // let example
    if (true) {
        let letVariable = "I am a let variable";
        console.log("Inside block with let:", letVariable); 
    }  

scopeDemo();



//////////ARITHEMATIC OPERATORS///


let a = 10;
let b = 5;

// Addition
let addition = a + b;
console.log("Addition: " + a + " + " + b + " = " + addition);

// Subtraction
let subtraction = a - b;
console.log("Subtraction: " + a + " - " + b + " = " + subtraction);

// Multiplication
let multiplication = a * b;
console.log("Multiplication: " + a + " * " + b + " = " + multiplication);

// Division
let division = a / b;
console.log("Division: " + a + " / " + b + " = " + division);

// Modulus
let modulus = a % b;
console.log("Modulus: " + a + " % " + b + " = " + modulus);


let complexExpression1 = (a + b) * b;
console.log("Complex Expression 1: (" + a + " + " + b + ") * " + b + " = " + complexExpression1);

let complexExpression2 = a + (b * b);
console.log("Complex Expression 2: " + a + " + (" + b + " * " + b + ") = " + complexExpression2);


let complexExpression3 = (a - b) / (b + 2);
console.log("Complex Expression 3: (" + a + " - " + b + ") / (" + b + " + 2) = " + complexExpression3);



///////COMPARISON OPERATOR////

let a = 7;
let b = 7;
let c = '7';

console.log("a == b:", a == b);         
console.log("a === b:", a === b);       
console.log("a != c:", a != c);         
console.log("a !== c:", a !== c);       
console.log("a < b:", a < b);           
console.log("a <= b:", a <= b);         
console.log("a > b:", a > b);           
console.log("a >= b:", a >= b);        


//////////LOGICAL OPERATORS///


let x = 10;
let y = 5;
let z = 10;
let isTrue = true;
let isFalse = false;

// Logical AND (&&): Returns true if both operands are true
let andCondition1 = (x > y) && (x === z);
let andCondition2 = (x < y) && (x === z);

console.log("AND Condition 1 (x > y && x === z):", andCondition1); 
console.log("AND Condition 2 (x < y && x === z):", andCondition2); 

// Logical OR (||): Returns true if at least one of the operands is true
let orCondition1 = (x > y) || (x === z);
let orCondition2 = (x < y) || (x === z);

console.log("OR Condition 1 (x > y || x === z):", orCondition1); 
console.log("OR Condition 2 (x < y || x === z):", orCondition2); 

// Logical NOT (!): Returns true if the operand is false, and false if the operand is true
let notCondition1 = !isTrue;
let notCondition2 = !isFalse;

console.log("NOT Condition 1 (!isTrue):", notCondition1); 
console.log("NOT Condition 2 (!isFalse):", notCondition2); 

// Combining logical operators
let combinedCondition = (x > y) && !(x === z || y === 5);
console.log("Combined Condition ((x > y) && !(x === z || y === 5)):", combinedCondition); 




////////DATA TYPES////

////////////PRIMITIVE DATATYPES///

// Number
let num = 42;
console.log("Value of num:", num);              
console.log("Type of num:", typeof num);

// String
let str = "Hello, world!";
console.log("Value of str:", str);        
console.log("Type of str:", typeof str);           

// Boolean
let boolTrue = true;
let boolFalse = false;
console.log("Value of boolTrue:", boolTrue);       
console.log("Type of boolTrue:", typeof boolTrue);
console.log("Value of boolFalse:", boolFalse);     
console.log("Type of boolFalse:", typeof boolFalse); 

// Null
let emptyValue = null;
console.log("Value of emptyValue:", emptyValue);   
console.log("Type of emptyValue:", typeof emptyValue); 

// Undefined
let notDefined;
console.log("Value of notDefined:", notDefined);  
console.log("Type of notDefined:", typeof notDefined); 


////////////////OBJECT DATA TYPE////////

// Create an object with properties and methods
let car = {
    make: "AUDI",
    model: "A6",
    year: 2024,
    mileage: 35,

    getDescription: function() {
        return `${this.year} ${this.make} ${this.model}`;
    },


    addMileage: function(miles) {
        this.mileage += miles;
    },

    
    displayInfo: function() {
        return `Description: ${this.getDescription()}, Mileage: ${this.mileage}`;
    }
};

// Accessing properties
console.log("Make:", car.make);
console.log("Model:", car.model);      
console.log("Year:", car.year);    
console.log("Mileage:", car.mileage); 

// Calling methods
console.log("Car Description:", car.getDescription()); 
console.log("Car Info:", car.displayInfo());          

// Modifying properties
car.make = "Honda";
car.year = 2024;

// Calling methods after modifying properties
console.log("Updated Car Description:", car.getDescription());
console.log("Updated Car Info:", car.displayInfo());          

// Using method to add mileage
car.addMileage(500);
console.log("Updated Car Info after adding mileage:", car.displayInfo()); 



///////////////////TYPE CONVERSION AND COERCION///

//////////EXPLICIT TYPE CONVERSION///

// Number() conversion
console.log(Number("123"));  // Outputs: 123
console.log(Number(false));  // Outputs: 0
console.log(Number(true));   // Outputs: 1
console.log(Number(null));   // Outputs: 0
console.log(Number("abc"));  // Outputs: NaN
console.log(Number(undefined));  // Outputs: NaN

// String() conversion
console.log(String(undefined));  // Outputs: "undefined"
console.log(String(false));  // Outputs: "false"
console.log(String(123));  // Outputs: "123"
console.log(String(true));  // Outputs: "true"
console.log(String(null));  // Outputs: "null"

// Boolean() conversion
console.log(Boolean(123));  // Outputs: true
console.log(Boolean(""));  // Outputs: false
console.log(Boolean(undefined));  // Outputs: false
console.log(Boolean(0));  // Outputs: false
console.log(Boolean("abc"));  // Outputs: true
console.log(Boolean(null));  // Outputs: false


/////////IMPLICIT COERION///////////
/////ARITHEMATIC OPERATOR///

let x = "4";
let y = 3;
let z = x + y; // z will be "43" (string concatenation)
let w = x - y; // w will be 2 (implicit conversion to numbers)
console.log(z);
console.log(w);


///////COMPARISON OPERATOR////
let a = "10";
let b = 10;
console.log(a == b); // true (implicit conversion to numbers)
console.log(a === b); // false (strict equality, no type conversion)




/////////////Strings and Template Literals///

/////////1.String manipulation/////

////CONCATENATE STRING USING + operator////
const s1="bhavani";
const s2="shankar";
console.log(s1+ ' '+s2); 

// Outputs: kartik stylite

/////Access characters using indexing.//
const s3="shekar";
console.log(s3[0]); // Outputs: s
console.log(s3[4]); // Outputs: a
//console.log(s3[10]); // Outputs: undefined (index out of range)

//console.log(s3[-1]); // Outputs: undefined (negative index out of range)

/////////Find the length of a string////
const s4="ramu";
console.log(s4.length); // Outputs: 4


/////////Create substrings./////
const s5="rishi";
console.log(s5.slice(0, 1)); // Outputs: ri
console.log(s5.slice(4)); // Outputs: h

////////////2.Template literals://///

////Use template literals to embed expressions within strings.///
const name = "nani";
const age = 21;
console.log(`My name is ${name} and I am ${age} years old.`);
// Outputs: My name is nani and I am 21 years old.

////////Format strings using multi-line strings and interpolation.////
const firstName = 'bhavani';
const lastName = 'shankar';
const occupation = 'developer';
const company = 'IBM';

const introduction = `
  Hello, my name is ${firstName} ${lastName}.
  I am a ${occupation} at ${company}.
  I love working on interesting projects and collaborating with talented people.
`;

console.log(introduction);
// Outputs:
//   Hello, my name is bhavani shankar.
//   I am a developer an IBM.
//   I love working on interesting projects and collaborating with talented people.


///////////Decision Making Statements////
/////////1.If-else statements://///
//Write conditional statements using `if`, `else if`, and `else`Execute different code blocks based on conditions.
//
 const score = 85;
 if (score >= 90) {
   console.log("Excellent score");
 } else if (score >= 80) {
   console.log("Good score");
 } else {
   console.log("more to improve");
 }
 // Outputs: Good score
 // If the score is 85, it will print "Good score" because 85 is
 // greater than or equal to 80 but less than 90.

 
///////2.Switch statements://
//Create switch statements to compare a value against multiple cases. Execute different code blocks based on matching cases.
 const grade = 'A';
 switch (grade) {
    case 'A':
        console.log('Excellent');
        break;
    case 'B':
        console.log('Good');
        break;
    case 'C':
        console.log('Fair');
        break;
    default:
        console.log('nothing');
}
                    



///////////Use Strict//////
////1.Enable strict mode://
//Add `"use strict";` at the beginning of your script.Observe how strict mode enforces stricter rules and catches errors.//
`"use strict";`
// Outputs: TypeError: console is not defined
// This error occurs because `console` is not defined in strict mode.
// In non-strict mode, `console` would be `undefined` and the code would still
// run, but in strict mode, it throws an error


/////Function Call and Its Definition///
///1. Function declaration://
//Define functions with parameters.Call functions with arguments.//
function greet(name) {
    console.log(`Hello, ${name}!`);
    }
    greet('boys'); // Outputs: Hello, boys!


 ///2. Function expression://
 //   Create functions as expressions and assign them to variables. Call these functions.
 const greet = function(name) {
    console.log(`Hello, ${name}!`);
    }
    greet('boys'); // Outputs: Hello, boys!


/////////Passing Parameters to Functions//
//1. Passing arguments://
//Pass different types of values as arguments to functions. Access and use these arguments within the function.    
function greet(name, age) {
    console.log(`Hello, ${name}! I am ${age} years old.`);
    }
    greet('guys', 22); // Outputs: Hello, guys! I am 21 years old.

//2. Default parameters://
//Set default values for function parameters.Use these default values when arguments are not provided.
function greet(name = 'world', age = 21) {
    console.log(`Hello, ${name}! I am ${age} years old.`);
    }
    greet('guys'); // Outputs: Hello, guys! I am 21 years old.

///Return Statement//

1. Returning values://
//Use the `return` statement to return values from functions. Assign returned values to variables.
function add(a, b) {
    return a + b;
    }
    const result = add(50, 10);
    console.log(result); // Outputs: 60

//2. Chaining function calls://
//Call functions that return values and pass the returned values as arguments to other functions.//
function add(a, b) {
    return a + b;
    }
    function multiply(a, b) {
        return a * b;
        }
        const result = multiply(add(10, 10), 2);
        console.log(result); // Outputs: 200


        
