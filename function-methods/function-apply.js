console.log('hello')


Function.prototype.customApply = function(context, args){
    console.log(context,args)

    context = context || window
    let uniqueKey = Symbol('fn')
    
    context[uniqueKey] = this
    console.log(context);
    const result = args ? context[uniqueKey](...args) : context[uniqueKey]()
    return result
}

let greeting = function(greet) {
    console.log(greet)
    console.log(`${greet} ${this.name}`)
}

let obj = {
    name: 'Aryan'
}

greeting.customApply(obj, ['GoodMorning'])