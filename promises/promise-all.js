function customPromise(executor) {
    let onResolve;
    let onReject;
    let fulfilled = false;
    let rejected = false;
    let called = false;
    let returnVal;
  
    function resolve(val) {
      fulfilled = true;
      returnVal = val;
      if (typeof onResolve === "function") {
        onResolve(returnVal);
        called = true;
      }
    }
  
    function reject(val) {
      rejected = true;
      returnVal = val;
      if (typeof onReject === "function") {
        onReject(returnVal);
        called = true;
      }
    }
  
    this.then = function (callback) {
      onResolve = callback;
      if (fulfilled && !called) {
        called = true;
        onResolve(returnVal);
      }
      return this;
    };
  
    this.catch = function (callback) {
      onReject = callback;
      if (rejected && !called) {
        called = true;
        onReject(returnVal);
      }
      return this;
    };
  
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }
  
  // this take care of finally method
  customPromise.prototype.finally = function(callback){
      return this.then(
          value => {
              callback()
              return value
          },
          reason => {
              callback()
              throw reason
          }
      )
  }


  // adding custom promise all 

  customPromise.all = function(promiseArray){
    return new customPromise((resolve, reject) => {{
        let results = []
        let completedPromises = 0 

        if(promiseArray.length === 0){
            return resolve([])
        }

        promiseArray.forEach((promise, index) => {
            promise.then((value) => {
                results[index] = value
                completedPromises++

                if(completedPromises === promiseArray.length){
                    resolve(results)
                }
            }),
            ((reason) => {
                reject(reason)
            })
        });
    }})
  }


  // calling promises 

  const promise1 = new customPromise((resolve, reject) => {
    setTimeout(resolve, 100, 'one');
  });
  
  const promise2 = new customPromise((resolve, reject) => {
    setTimeout(resolve, 200, 'two');
  });
  
  const promise3 = new customPromise((resolve, reject) => {
    setTimeout(resolve, 500, 'three');
  });
  
  customPromise.all([promise1, promise2, promise3])
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })