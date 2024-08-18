Array.prototype.customIncludes = function (inputElement) {
  console.log(inputElement, this);
  for(let i = 0; i < this.length; i++){
    if(this[i] === inputElement){
        return true
    }
  }
  return false
};


let arr = [1, 2, 3, 4, 5];

let retVal = arr.customIncludes(1);
console.log(retVal);
