const person = {
    name: "Aryan",

    marks: 100
}


function greet(subject1, subject2){
    console.log(`${this.name} has got ${this.marks} in ${subject1} and ${subject2}`)
}

Function.prototype.customApply = function(context = {}, args = []){

    console.log(this)
    context = context || window
    context.fn = this
    const res = context.fn(...args)
    delete context.fn

    return res
}

greet.apply(person, ['maths', 'sst'])
greet.customApply(person, ['maths', 'sst'])