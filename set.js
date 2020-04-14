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

//Perform a union on two sets
//A method in our Set will be called union
// This method should take another Set as an argument
// and return the union of the two sets, without duplicates.

function Set(){
    //collection will hold the set
    let collection = [];

    //has method will check for the presence of an element and return true or false
    this.has = function(element){
        return (collection.indexOf(element) !== -1);
    };

    //Values method will return values in set.
    this.values = function() {
        return collection;
    };

    //Add method will add an element to the set, if it is not a duplicate
    this.add = function(element){
        if (!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    };

    // Remove method will remove an element from a set
    this.remove = function(element){
        if (this.has(element)){
            let index = collection.indexOf(element);
            collection.splice(index, 1);
            return true;
        }
        return false;
    };

    // Size method will return the size of the set
    this.size = function(){
        return this.collection.length;
    }

    //Union method will combine two sets and return the union,
    // without duplicates
    this.union = function(anotherSet){
        const newSet = new Set();
        const addToSet = el => newSet.add(el);
        this.values().forEach(addToSet);
        anotherSet.values().forEach(addToSet);
        return newSet;
    }
}


//Intersection on Two Sets of Data
//Add method interset 
//Will represent all values that exist in both sets 
//Takes another set as an argument, returns the intersection of both

function Set() {
    // the var collection will hold the set
    var collection = [];
    // this method will check for the presence of an element and return true or false
    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    };
    // this method will return all the values in the set
    this.values = function() {
        return collection;
    };
   // this method will add an element to the set
    this.add = function(element) {
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    };
    // this method will remove an element from a set
    this.remove = function(element) {
        if(this.has(element)){
           var index = collection.indexOf(element);
            collection.splice(index,1);
            return true;
        }
        return false;
    };
    // this method will return the size of the collection
    this.size = function() {
        return collection.length;
    };
    // this method will return the union of two sets
    this.union = function(otherSet) {
        var unionSet = new Set();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(function(e){
            unionSet.add(e);
        });
        secondSet.forEach(function(e){
            unionSet.add(e);
        });
        return unionSet;
    };

    this.intersection = function(otherSet){
        let intersectionSet = new Set();
        let firstSet = this.values();
        firstSet.forEach(function(e){
            if (otherSet.has(e)){
                intersectionSet.add(e);
            };
        });
        return intersectionSet;
    };
}