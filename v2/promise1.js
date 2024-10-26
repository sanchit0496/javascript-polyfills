function customPromise(executor){
    console.log(executor)

    let onResolve = () => {}
    let onReject = () => {}
    let called = false
    let rejected = false
    let fulfilled = false
    let returnVal

    function resolve(res){
        called = true
        fulfilled = true

        if(called && fulfilled){
            returnVal = res
            onResolve(returnVal)
        }
    }

    this.then = function(callback){
        onResolve = callback
        if(fulfilled){
            onResolve(returnVal)
        }
        return this
    }

    function reject(err){
        called = true
        rejected = true

        if(called && rejected){
            returnVal = err
            onReject(returnVal)
        }
    }

    this.catch = function(callback){
        onReject = callback
        if(rejected){
            return onReject(returnVal)
        }
        return this
    }


    console.log(this)

    
    
    
    
    
    
    
    try {
        executor(resolve, reject)
    } catch (error) {
        console.log(error)
    }

}

const promise = new customPromise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/todos/10')
    .then((res) => {
        resolve(res)
    })
    .catch((err) => {

        reject(err)
    })
})


promise.then((res) => console.log(res)).catch((err) => console.log(err))