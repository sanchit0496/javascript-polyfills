console.log('hello')


Object.customCreate = function(proto){
    console.log(proto)
    function tempFunc(){}
    tempFunc.prototype = proto
    return new tempFunc()
}

const proto = {
    name:  'hello'
}

const obj = Object.customCreate(proto)
console.log(obj.name)