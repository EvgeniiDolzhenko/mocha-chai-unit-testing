function moveZeros(arr) {
    let nonZero = []
    let zero = []
      for(let i =0 ; i < arr.length; i++){
        if(arr[i] === 0){
          zero.push(arr[i])
        } else {
          nonZero.push(arr[i])
        }
      }
      let res = nonZero.concat(zero)
      return res
    }


    module.exports = {moveZeros}