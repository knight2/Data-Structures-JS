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

class Set {
    constructor() {
        // Collection will hold our set
        this.collection = [];
    }

    //This method will check for the presence of an element and return
    // true or false
    has (element){
        return this.collection.indexOf(element) !== -1;
    }

    //This method will return all the values in the set
    values(){
        return this.collection;
    }


    //Method that adds a value to the set as long
    //as the data does not already exist.
    add(data){
        if (this.has(data)){
            return false;
        }
        this.collection.push(data);
        return true;
    }


    //removes a value from the set collection if it already exiss
    remove(data){

        if (this.collection.indexOf(data) !== -1){
            this.collection.slice(this.collection.indexOf(data), 1);
            return true;
        };
        return false;
    }

    //Method returns the size of the collection
    size(){
        return this.collection.length();
    }

}