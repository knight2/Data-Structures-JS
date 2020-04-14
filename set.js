// Sets in Javascript

//A set is an abstract data structure. Similar to an array
// But it cannot contain any duplicate values. 
//The typical use of a set is to simply check for
// the presence of an item.

const set1 = new Set([1,2,3,5,5,2,0]);
console.log(set1);
// output [1,2,3,5,0]
console.log(set1.has(1));
//output: true
console.log(set1.has(6));
// output: false
