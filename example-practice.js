//  example usage for practice
Array.prototype.greeting = function(greet){
    console.log(greet)
}

let testArr = ['a', 'b']
testArr.greeting('hello')


// practice call apply and bind here 



// call
function greeting(name, location){
    console.log(this)
    let str  = `${name} from ${location} is a ${this.work}`
    console.log(str)
}
let profession = {
    work : 'Student'
}
greeting.call(profession,'Aryan', 'Delhi')


// apply 
let marksheet = function(subject, marks){
    console.log(this)
    let str = `${this.name} scored ${marks} marks in ${subject} subject`
    console.log(str)
}

let student = {
    name: 'Aditya'
}
marksheet.apply(student, ['maths', 100])

// bind
function sports(name, level){
    console.log(this)
    let str = `${name} plays ${level} level of ${this.sports}`
    console.log(str)
}

let sportsperson = {
    sports: 'Cricket'
}

const sportsCall = sports.bind(sportsperson)
sportsCall('Kids', 'International')