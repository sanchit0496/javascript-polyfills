const promise1 = new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((res) => {
        resolve(res)
    }).catch((err) => {
        reject(err)
    })
})

const promise2 = new Promise((resolve, reject) => {
    fetch('https://jsonplacehol.typicode.com/todos/10')
    .then((res) => {
        
        resolve(res)
    })
    .catch((err) => {
        
        reject(err)
    })
})

promise1.then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})

promise2.then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})

// doing other promise methods for practice here 
const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 'hello there');  
})

const promise5 = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, 'hello world');  
})

const promise6 = new Promise((resolve, reject) => {
    setTimeout(reject, 6000, 'rej one');  
})


const promise7 = new Promise((resolve, reject) => {
    setTimeout(reject, 8000, 'rej two');  
})




// promise all
Promise.all([promise4, promise5, promise6, promise7])
.then((res) => console.log(res))
.catch((err) => console.log(err))


// promise race
Promise.race([promise4, promise5, promise6, promise7])
.then((res) => console.log(res))
.catch((err) => console.log(err))

// promise any
Promise.all([promise4, promise5, promise6, promise7])
.then((res) => console.log(res))
.catch((err) => console.log(err))

// promise allSettled
Promise.allSettled([promise4, promise5, promise6, promise7])
.then((res) => console.log(res))
.catch((err) => console.log(err))
.finally(() => console.log('called'))