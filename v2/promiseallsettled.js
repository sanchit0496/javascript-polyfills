console.log('hello')


const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2500, 'yeah')
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 4500, 'yeah')
})

const promise3 = new Promise((resolve, reject) => {

    setTimeout(reject, 6500, 'yeah')
})


const promise4 = new Promise((resolve, reject) => {    
    setTimeout(reject, 8500, 'yeah')
})


// [
//     {
//         "status": "fulfilled",
//         "value": "yeah"
//     },
//     {
//         "status": "fulfilled",
//         "value": "yeah"
//     },
//     {
//         "status": "rejected",
//         "reason": "yeah"
//     },
//     {
//         "status": "rejected",
//         "reason": "yeah"
//     }
// ]

Promise.customAllSettled = function(promiseList){
    return new Promise((resolve, reject) => {
        console.log(promiseList)    
        let count = 0
        let res = []

        promiseList.forEach((promise, index) => {
            promise
            .then((response) => {
                count++
                res[index] = {status: 'fulfilled', value: response}
            })
            
            .catch((err) => {
                count++
                res[index] = {status: 'rejected', reason: err}
            })
            .finally(() => {
                if(count === promiseList.length){
                    resolve(res)
                }
            })
        });
    })
}


Promise.customAllSettled([promise1, promise2,promise3,promise4])
.then((res) => console.log(res))

Promise.allSettled([promise1, promise2,promise3,promise4])
.then((res) => console.log(res))