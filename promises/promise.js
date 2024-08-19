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
    if (typeof val === "Function") {
      onResolve(returnVal);
      called = true;
    }
  }

  function reject(val) {
    rejected = true;
    returnVal = val;
    if (typeof val === "Function") {
      onReject(returnVal);
      called = true;
    }
  }

  this.then = function (callback) {
    onResolve = callback;
    if (fulfilled && !called) {
      called = true;
      onResolve(value);
    }
    return this;
  };

  this.catch = function (callback) {
    onReject = callback;
    if (rejected && !called) {
      called = true;
      onReject(value);
    }
    return this;
  };

  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

const promiseExecutor = new customPromise((resolve, reject) => {
  setTimeout(() => {
    console.log("called");
  }, 2000);
});

promiseExecutor
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
