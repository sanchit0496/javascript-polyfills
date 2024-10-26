console.log('hello')


const promise1 = new Promise((resolve, reject) => {
    setTimeout(reject, 2500, 'yeah')
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(reject, 4500, 'yeah one')
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(reject, 6500, 'yeah')
})

const promise4 = new Promise((resolve, reject) => {
    
    setTimeout(reject, 8500, 'yeah')
})


Promise.customAny = function(promiseList){
    return new Promise((resolve, reject) => {
        let count = 0
        let res  = []
        console.log(promiseList)    

        promiseList.forEach((promise, index) => {
            promise
            .then((res) => {
                resolve(res)
            })
            .catch((err) => {
                count++
                res[index] =  err
            })    
            .finally(() => {
                if(count == promiseList.length){
                    reject(new AggregateError('lol'))
                }
            })
        });

    })
}


Promise.customAny([promise1, promise2,promise3,promise4])
.then((res) => console.log(res))
.catch((err) => console.log('lol'))





Promise.any([promise1, promise2,promise3,promise4])
.then((res) => console.log(res))
.catch((err) => console.log('lol'))
