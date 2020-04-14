// Queue Class
//Queues are similar to stacks, as a collection of elements
// Unlike stacks, queues use First-In-First-Out
//Elements added to the queue are pushed to the end
//Only the element at the front is allowed to be removed
//You can use an array but we want to limit control.

function Queue(){
    var collection = [];
    this.print = function(){
        console.log(collection);
    };

    this.enqueue = function(item){
        collection.push(item);
    };

    this.dequeue = function(){
        return collection.shift();
    };

    this.front = function(){
        return collection[0];
    };

    this.size = function(){
        return collection.length;
    };

    this.isEmpty = function(){
        return collection.length === 0;
    };
}

//Priority Queue
//Special type of queue in which items may have additional information
//which specifies their priority
//Items with higher priority will override all others

function PriorityQueue(){
    this.collection = [];
    this.printCollection = function(){
        console.log(collection);
    };
}