console.log('hello')


const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2500, 'yeah')
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 4500, 'yeah')
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 6500, 'yeah')
})

const promise4 = new Promise((resolve, reject) => {
    
    setTimeout(resolve, 8500, 'yeah')
})


Promise.customAll = function(promiseList){
    return new Promise((resolve, reject) => {
        console.log(promiseList)    
        let fulfilledCount = 0
        let result= []
        promiseList.forEach((promise) => {
            promise
            .then((res) => {
                fulfilledCount++
                result.push(res)
                if(fulfilledCount === promiseList.length){
                    return resolve(result)
                }
            })
            .catch((err) => reject(err))    
        });

    })
}


Promise.customAll([promise1, promise2,promise3,promise4])
.then((res) => console.log(res))

Promise.all([promise1, promise2,promise3,promise4])
.then((res) => console.log(res))