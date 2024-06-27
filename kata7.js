
function solve(s){
    let countLowerCase = 0
    let countUpperCase = 0
    for(let i = 0; i<s.length; i++){
      if(s[i] === s[i].toLowerCase() ){
         countLowerCase++
      }else{
      countUpperCase++
    } 
    } 

  if(countUpperCase>countLowerCase) return s.toUpperCase()
   return s.toLowerCase()
}

function removeDuplicateWords (s) {
  let arr = s.split(' ')
  return [...new Set(arr)].join(' ')
}

function largestPairSum (numbers) {
  let sortedNumber = numbers.sort((a,b)=> b-a)
  return sortedNumber[0]+sortedNumber[1]
}

function evenNumbers(array, number) {
  let res = []
  for(let i =  array.length-1; i >= 0 ; i--){
    if(array[i]%2===0){
      res.push(array[i])
      if(res.length===number){
        break;
      }
    }
  }
  return res.reverse()
}

function smallEnough(a, limit){
  let sortedA = a.sort((a,b)=>a-b)
  if(sortedA[sortedA.length-1]>limit) return false
  return true
}

module.exports = {solve, removeDuplicateWords,largestPairSum,evenNumbers,smallEnough} 