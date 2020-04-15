//Map Data Structures in JS

//Maps are data structures that store key-value pairs.
// In javascript these are available to us as objects.
//Maps provide rapid lookup of stored items based on key values

var Map = function(){
    this.collection = {};

    this.add = function(key, value){
        this.collection[key] = value;
    }

    this.remove = function(key, value){
        delete this.collection[key];
    };

    this.get  = function(key){
        return this.collection[key];
    };

    this.has = function(key){
        return this.collection[key] !== undefined;
    }

    this.values = function(){
        let ar = [];
        for (let v in this.collection){
            ar.push(this.collection[v]);
        };
        return ar;
    }

    this.size = function(){
        return Object.keys(this.collection).length;
    };

    this.clear = function(){
this.collection={}    }

};