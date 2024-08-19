Function.prototype.customBind = function(context, ...bindArgs){
    const originalFunction = this;  // Store the original function
    return function(...args) {
        return originalFunction.apply(context, [...bindArgs, ...args]);
    };
}


let greeting = function(greeting){
    let str = `${greeting} ${this.name}`
    console.log(str)
}

let obj = {
    name: 'Adi'
}

const greetCall = greeting.customBind(obj)
greetCall('GoodMorning')