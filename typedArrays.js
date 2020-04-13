// Data Structures in JS

//Typed Arrays
//Assign how much memory you want to give an array


//3 length Int16Array
var i8 = new Int16Array(3);
console.log(i8);

//Create an Int16Array differently
var byteSize = 6; //Must be a multiple of 2
var buffer = new ArrayBuffer(byteSize);
var i8View = new Int16Array(buffer);
console.log(buffer.byteLength); //Returns 6 
console.log(i8View.byteLength); // Returns 6

console.log(i8View); // Returns [0, 0, 0]

//Buffers are general purpose objects that just carry data.
//You cannot access them normally. To access them, you need to create a view.

i8View[0] = 42;
console.log(i8View); // Returns [42, 0, 0]

//Typed arrays do not have some of the methods traditional arrays have
// such as .pop() or .push(). Typed arrays also fail Array.isArray().

let byteSize = 64;
let buffer = new ArrayBuffer(byteSize);
let i32View = new Int32Array(buffer);