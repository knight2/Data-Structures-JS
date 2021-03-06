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

    //modifiy enqueue to consider priority
    this.enqueue = function(item){
        collection.push(item);
    };


    //helper function to determine which item to remove
    this.findPriority = function(){
        let values = this.collection.map(function(keys){
            return keys[1];
        });

        var thePriority = Math.min.apply(null, values);
        return this.collection.find(element => element[1] === thePriority)
    };

    this.dequeue = function(){
        //set the item to be removed for highest priority
        let removeItem = this.findPriority();

        //Find the position to remove it from queue
        let removePosition = this.collection.indexOf(removeItem);
        this.collection.splice(removePosition, 1);

        //Return only the item without priority level
        return removeItem[0];
    };

    this.size = function(){
        return collection.length;
    };

    this.front = function(){
        return collection[0];
    };

    this.isEmpty = function(){
        return collection.length === 0;
    };
};


//Circular Queue
//Queue writes to the end of a collection and then
// beings overwriting itesm at the beginning of the collection
// Useful for situations like streaming media
//Once the queue is full new media data will overwrite
// old data.

class CircularQueue{
    constructor(size){
        this.queue = [];
        this.read = 0;
        this.write = 0;
        this.max = size -1;

        while (size > 0){
            this.queue.push(null);
            size--;
        }
    }

    print(){
        return this.queue;
    }

    enqueue(item){
        if (this.queue[this.write] === null){
            this.queue[this.write++] = item;

            if (this.write > this.max){
                this.write = 0;
            }
            return item;
        }
        return null;
    }

    dequeue(){
        if (this.queue[this.read] != null){
            let item = this.queue[this.read];
            this.queue[this.read++] = null;
            if (this.read > this.max){
                this.read = 0;
            }
            return item;
        }
        return null;
    }
}