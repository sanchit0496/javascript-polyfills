const person = {
    name: "Aryan",

    marks: 100
}

function greet(subject){
    console.log(`${this.name} scored ${this.marks} marks in ${subject}`)
}

Function.prototype.customCall = function(context  = {}, ...args){

    context = context || window

    context.fn = this

    const res = context.fn(...args)
    delete context.fn

    return res;
}


greet.call(person, 'maths')
greet.customCall(person, 'maths')