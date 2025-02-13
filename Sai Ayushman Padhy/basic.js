// Using the const keyword, we cannot reassign the value of these variables.
const AccountName = "RisingBeastVector"; //constant variable
const AccountGmail = "saiayushmanp45@gmail.com"; //constant variable

// Using let keyword, we can reassign the value of these variables.
let name = "Sai Ayushman Padhy"; //String type variable
let regd = 2401109457; //Number type variable
let branch = "ETC"; //String type variable
let isStudent = true; //Boolean type variable

// Used to print the value of the variables
console.log(name); // Used to print the value of the variable name
console.log(regd); // Used to print the value of the variable regd
console.log(branch); // Used to print the value of the variable branch
console.log(isStudent); // Used to print the value of the variable isStudent



/* console.log() => Outputs values, variables, objects, or expressions to the console (visible in browser DevTools or Node.js).
                    Helps track the flow of code execution and inspect values at specific points. */

// Print Simple Messages
console.log("Hello, World!"); // Output: Hello, World!

// Print Variables
console.log(regd); // Output: 2401109457

// Print Multiple Variables
console.log(name, branch); // Output: Sai Ayushman Padhy ETC

// Print Expressions
console.log(10 + 5); // Output: 15

// Track Variable Changes
let x = 5;
x += 1;
console.log("After increment :", x); // Output: 6

// Debug Conditional Logic
let age = 17;
if (age >= 18) 
{
  console.log("You are eligible to vote!");
} 
else 
{
  console.log("You are not eligible to vote!"); // Output: You are not eligible to vote!
}



/* Single Quotes => Used for basic strings.
                    Helpful to print double quotes inside the string. */
console.log('Hello, "Sai Ayushman Padhy" !'); // Output: Hello, "Sai Ayushman Padhy" !




/* Double Quotes => Used for basic strings.
                    Helpful to print single quotes inside the string. */
console.log("Hello, 'Sai Ayushman Padhy' !"); // Output: Hello, 'Sai Ayushman Padhy' !



/* Template Literals => Used for multi-line strings.
                        Embedding variables/expressions inside strings with ${}. */
let info = `My Name is Sai Ayushman Padhy,
            I am a student of ETC branch.`;
console.log(`Hello, ${name}!`); // Output: Hello, Sai Ayushman Padhy!



/* Triple Quotes => ''' or """.
                    Not supported in JavaScript. */
/*console.log('''Hello, Sai Ayushman Padhy!'''); // Error: Unexpected string
console.log("""Hello, Sai Ayushman Padhy!"""); // Error: Unexpected string */