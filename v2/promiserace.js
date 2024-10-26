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


Promise.customRace = function(promiseList){
    return new Promise((resolve, reject) => {
        console.log(promiseList)    

        promiseList.forEach((promise) => {
            promise
            .then((res) => {
                resolve(res)
            })
            .catch((err) => reject(err))    
        });

    })
}


Promise.customRace([promise1, promise2,promise3,promise4])
.then((res) => console.log(res))

Promise.race([promise1, promise2,promise3,promise4])
.then((res) => console.log(res))