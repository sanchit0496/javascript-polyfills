Array.prototype.customIncludes = function (inputElement, fromIndex) {
  console.log(inputElement, this);
  for(let i = fromIndex; i < this.length; i++){
    if(this[i] === inputElement){
        return true
    }
  }
  return false
};


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let retVal = arr.customIncludes(4,2);
console.log(retVal);
