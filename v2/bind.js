const person = {
    name: "Aryan",

    marks: 100
}


function greet(subject1, subject2){
    console.log(`${this.name} has got ${this.marks} in ${subject1} and ${subject2} okay`)
}

Function.prototype.customBind = function(context = {}, ...args){  

    console.log(this)
    context = context || window
    context.fn = this
    context.fn([...args, ...newargs])


    return function(newargs){
        context.fn([...args, ...newargs])
    }
}

const bindGreet = greet.bind(person)
bindGreet('maths', 'sst')

const customBindGreet = greet.bind(person)
customBindGreet('maths', 'sst')