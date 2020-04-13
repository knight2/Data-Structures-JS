//Stacks
// Last-In-First-Out

var homeworkStack = ["BIO12","HIS80","MAT122","PSY44"];
homeworkStack.pop();
homeworkStack.push('CS50');
console.log(homeworkStack);

//Stack Class
//Create a stack class with push and pop method, as well as peek ,isEmpty,
// and clear to the stack

function Stack(){
    var collection = [];
    this.print = function(){
        console.log(collection);
    };
    this.push = function(value){
        return collection.push(value);
    }
    this.pop = function(){
        return collection.pop();
    }
    this.peek = function(){
        return collection[collection.length - 1];
    }
    this.isEmpty = function(){
        return collection.length === 0;
    };
    this.clear = function(){
        collection.length = 0;
    };
}

