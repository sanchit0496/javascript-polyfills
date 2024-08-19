console.log('hello')


Function.prototype.customCall = function(context, ...args) {
    console.log(context, args);
    context = context || window
    const uniqueKey = Symbol('fn');
    context[uniqueKey] = this;
    const result = context[uniqueKey](...args)
    delete context[uniqueKey];  // Clean up
    return result
}

let reportCard = (marks,subject) => {
    console.log(`${marks} scored marks in ${subject} subject`)
}

let person = {
    name: 'Aryan'
}

reportCard.customCall(person, '100', 'Maths')