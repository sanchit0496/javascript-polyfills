const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'hello')

})

function customPromise(executor){
    console.log(executor)

    let onResolve = () => {}
    let onReject = () => {}
    let called = false
    let retVal
    let fulfilled = false
    let rejected = false

    function resolve(val){
        fulfilled = true
        called = true
        if(called && fulfilled){
            retVal = val
            onResolve(val)
        }
    }

    function reject(err){
        rejected = true
        called = true
        if(rejected && called){
            retVal = err
            onReject(retVal)
        }
    }

    this.then = function(callback){
        onResolve = callback
        if(fulfilled){
            onResolve(retVal)
        }
        return this
    }

    this.catch = function(callback){
        onReject = callback
        if(rejected){
            onReject(retVal)
        }
        
        return this
    }    
    console.log(this)





    try{
        executor(resolve, reject)
    }catch(err){

        console.log(err)
    }
}

customPromise.prototype.finally = function(callback){
    return this.then(
        (value) => {
            callback()
            return value
        },
        (reason) => {
            callback()
            throw reason
        }
    )
}

const customExecutor = new customPromise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/todos/10')
        .then((res) => res.json()) // Return the parsed JSON data
        .then((data) => resolve(data)) // Resolve with the parsed data
        .catch((err) => reject(err))
})



customExecutor
    .then((res) => console.log("Response:", res))
    .catch((err) => console.log("Error:", err))
    .finally(() => console.log("finally block executed"))