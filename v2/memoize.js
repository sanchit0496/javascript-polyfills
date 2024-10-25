function add(a,b){
    return a+b
}
let val = add(1,5)
console.log(val)

Function.prototype.customMemoize = function(){
    console.log('this', this)
    const map = new Map()
    const currentFunc = this

    const retFunction = (...args) => {
        console.log('args', args)
        const key = JSON.stringify(args)

        if(map.has(key)){
            console.log('from catch')
            return map.get(key)
        }

        let curr = currentFunc(...args)
        map.set(key, curr)
        console.log(map)
        console.log('compute here')
        return curr;
    }
    return retFunction
}



const memoizedAdd = add.customMemoize()
let newVal = memoizedAdd(1,5)
console.log(newVal)

let newVal1 = memoizedAdd(1,5)
console.log(newVal1)