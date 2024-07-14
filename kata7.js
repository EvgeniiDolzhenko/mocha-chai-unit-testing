
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

function fizzbuzz7(n){
  let res = []
  let newArray = []
  for(let i =1; i<=n; i++){
    res.push(i)
  }
  
  for(let k = 0; k<res.length; k++){
    if(res[k] % 5 === 0 && res[k] % 3 === 0 ) {
      newArray.push('FizzBuzz') }
    else if(res[k] % 5 === 0){
      newArray.push('Buzz')
    } else if(res[k] % 3 === 0 ){
      newArray.push('Fizz')
    } else {
      newArray.push(res[k])
    }
  }
  
  return newArray
}

var greet = function(name) {
  let res =''
  for(let i = 1; i<name.length;i++){
    res = res + name[i].toLowerCase()
  }
  return 'Hello '+ name[0].toUpperCase()+res+'!'

};

function vowelIndices(w){
  let vowels = ['a','e','i','o','u','y']
  let word = w.toLowerCase().split('')
  const res = []
  for(let i = 0; i < word.length; i++){
    for(let k = 0; k <vowels.length; k++){
      if(word[i] === vowels[k] ) res.push(i+1)
    }
  }
  return res
}

function getEvenNumbers(a){
  const result = a.filter((n)=> n%2===0)
  return result
}

function inAscOrder(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
          return false;
      }
  }
  return true;
}

function flattenAndSort(a) {
  return a.flat().sort((a,b)=>a-b)
}

function reverseNumber(n) {
  let str = n.toString().split('').reverse().join('')
  if(n>0) return +str
  if(n==0) return 0
  if(n<0) return -Number(str.slice(0, -1))
}

function solution(str, ending){
  let slice = str.slice(-(ending.length))
  if(ending === slice || ending.length === 0 ) return true
  return false
}


module.exports = {inAscOrder,solution,reverseNumber,flattenAndSort,greet,solve, removeDuplicateWords,largestPairSum,evenNumbers,smallEnough,fizzbuzz7,vowelIndices, getEvenNumbers} 