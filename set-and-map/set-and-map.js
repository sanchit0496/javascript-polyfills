console.log('hello')  


// this is for set of JS
function customSet(){
    this.items = {}
}

customSet.prototype._hash = function(value) {
    return JSON.stringify(value);
};

customSet.prototype.add = function(value){
    const hash = this._hash(value)
    this.items[hash] = value
}

customSet.prototype.has = function(value){
    const hash = this._hash(value)
    return this.items.hasOwnProperty(hash)
}

customSet.prototype.delete = function(value){
    const hash = this._hash(value)
    if(this.has(value)){
        delete this.items[hash]
        return true;
    }
    return false
}

customSet.prototype.clear = function(){
    this.items = {}
}

customSet.prototype.size = function(){
    return Object.keys(this.items).length
}

customSet.prototype.values = function(){
    return Object.keys(this.items).map(key => this.items[key])
}

customSet.prototype._hash = function(value){
    return JSON.stringify(value)
}

let hs = new customSet()

hs.add(1);
hs.add(2);
hs.add(2); 
console.log(hs.values()); 

console.log(hs.size());
console.log(hs.has(1)); 
hs.delete(1);
console.log(hs.has(1)); 

hs.clear();
console.log(hs.size()); 



// this is for map of JS

function customMap(){
    this.items = {}
}

customMap.prototype._hash = function(key) {
    return JSON.stringify(key);
};

customMap.prototype.set = function(key, value) {
    const hash = this._hash(key)
    this.items[hash] = value
}

customMap.prototype.get = function(key, value){
    const hash = this._hash(key)
    return this.items.hasOwnProperty(hash) ? this.items[hash] : undefined
}

customMap.prototype.has = function(key){
    const hash = this._hash(key)
    return this.items.hasOwnProperty(hash)
}

customMap.prototype.delete = function(key){
    const hash = this._hash(key)
    if(this.has(key)){
        delete this.items[hash]
        return true
    }
    return false
}

customMap.prototype.clear = function() {
    this.items = {};
};

customMap.prototype.size = function() {
    return Object.keys(this.items).length;
};

let hm = new customMap();
hm.set('name', 'John');
hm.set({ id: 1 }, 'Object as a key');
console.log(hm.get('name')); 
console.log(hm.get({ id: 1 })); 
console.log(hm.has('name')); 
hm.delete('name');
console.log(hm.has('name')); 
hm.clear();
console.log(hm.size()); 