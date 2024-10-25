let arr = [1,2,3,4,[5,6]]
let arr1 = arr.flat(1)

console.log(arr1)

Array.prototype.customFlat = function(depth){
      let ret = []
     
      function flatten(inputArr, depth){
          inputArr.forEach((el) => {
            if(depth > 0){
                flatten(el, depth-1)
            }else{
                ret.push(el)
            }      
          })
      }
     
     
        if(!Array.isArray(this)){
            throw("aint an array bro")  
        }
        else{
            flatten(arr1, depth-1)
        }

      return ret;
}

let arr2 = arr.customFlat(1)

console.log('arr2', arr2)
