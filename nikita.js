// use of (') single,(") Double,('") triple and (`) back tick
// const is a  keyword in JavaScript used for declaring constants. The value of a const variable cannot be reassigned after initialization.

const regdno= "2401109444"; // the value of regdno cannot cannot be modified/changed

// The let keyword is used to declare a block-scoped local variable i.e. Variables declared with let have their scope in the block for which they are defined
// the value of the variable declared with can be changed over time
let name= "Nikita"; // the value of name can be changed
let branch= "ETC"; //  string type of variable 
let phoneno= 55676889087;

// console.log is used to print the value of the variables
console.log(name); // Used to print the value of the variable name
console.log(branch); // Used to print the value of the variable branch
console.log(phoneno); // Used to print the value of the variable phoneno

//examples 
console.log(name); // output: Nikita
console.log(13+5); // output: 18
console.log("Hello cdd"); // output: Hello cdd

// single quotes (')
// used to print double quotes inside the string
console.log('Hello, "everyone" !'); // output: Hello, "everyone" !
console.log('hello'); // output: hello

// double quotes (" ")
// used to print single quotes inside the string
console.log("Hello, 'everyone' !"); // output: Hello, 'everyone' !
console.log('hello'); // output: hello

//Note: function of single and double quotes are usually same for basic strings


// Triple Quotes (''') or (""").
// triple quotes Not supported in JavaScript 
console.log('''Hello !'''); // Error: Unexpected string
console.log("""Hello !"""); // Error: Unexpected string 

// backticks(`): known as termplate literals
// ` is used to define multi-line strings directly within your code.
// Embedding variables/expressions inside strings with ${}.

let hobby= ` reading ,
cooking , 
and sleeping `; 
console.log(`hello from ${name}`); // output: hello from Nikita
