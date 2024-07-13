const {
  greet,
  solve,
  removeDuplicateWords,
  largestPairSum,
  evenNumbers,
  flattenAndSort,
  smallEnough,
  inAscOrder,
  fizzbuzz7,
  vowelIndices,
  getEvenNumbers,
  reverseNumber,
} = require('../kata7')
const expect = require('chai').expect

describe('Fix string case', () => {
  //https://www.codewars.com/kata/5b180e9fedaa564a7000009a/train/javascript
  it('1 case', () => {
    expect(solve('code')).equal('code')
  })

  it('2 case', () => {
    expect(solve('CODe')).equal('CODE')
  })

  it('3 case', () => {
    expect(solve('COde')).equal('code')
  })

  it('4 case', () => {
    expect(solve('Code')).equal('code')
  })
})

describe('Remove duplicate words', () => {
  //https://www.codewars.com/kata/5b39e3772ae7545f650000fc/train/javascript
  it('1 case', () => {
    expect(
      removeDuplicateWords(
        'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
      )
    ).equal('alpha beta gamma delta')
  })

  it('2 case', () => {
    expect(removeDuplicateWords('a a a b b b')).equal('a b')
  })
})

describe('Largest pair sum in array', () => {
  //https://www.codewars.com/kata/5b39e3772ae7545f650000fc/train/javascript
  it('1 case', () => {
    expect(largestPairSum([10, 14, 2, 23, 19])).equal(42)
  })

  it('2 case', () => {
    expect(largestPairSum([-100, -29, -24, -19, 19])).equal(0)
  })

  it('3 case', () => {
    expect(largestPairSum([1, 2, 3, 4, 6, -1, 2])).equal(10)
  })

  it('4 case', () => {
    expect(largestPairSum([-10, -8, -16, -18, -19])).equal(-18)
  })
})

describe('Even numbers in an array', () => {
  //https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c
  it('Case 1', () => {
    expect(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)).deep.eq([4, 6, 8])
  })

  it('Case 2', () => {
    expect(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2)).deep.eq([-8, 26])
  })

  it('Case 3', () => {
    expect(evenNumbers([6, -25, , 7, 5, 5, 7, -3, 23], 1)).deep.eq([6])
  })
})

describe('Small enough? - Beginner', () => {
  //https://www.codewars.com/kata/57cc981a58da9e302a000214/train/javascript
  it('Case 1', () => {
    expect(smallEnough([66, 101], 200)).eq(true)
  })

  it('Case 2', () => {
    expect(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100)).eq(false)
  })

  it('Case 3', () => {
    expect(smallEnough([101, 45, 75, 105, 99, 107], 107)).eq(true)
  })

  it('Case 4', () => {
    expect(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120)).eq(true)
  })
})

describe('fizzbuzz7', () => {
  //https://www.codewars.com/kata/5300901726d12b80e8000498/train/javascript
  it('Case 1', () => {
    expect(fizzbuzz7(3)).deep.eq([1, 2, 'Fizz'])
  })

  it('Case 2', () => {
    expect(fizzbuzz7(10)).deep.eq([1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz'])
  })
})

describe('Greet Me', () => {
  //https://www.codewars.com/kata/535474308bb336c9980006f2/train/javascript
  it('Case 1', () => {
    expect(greet('riley')).eq('Hello Riley!')
  })

  it('Case 2', () => {
    expect(greet('JACK')).eq('Hello Jack!')
  })
})

describe('Find the vowels', () => {
  //https://www.codewars.com/kata/5680781b6b7c2be860000036/train/javascript
  it('Case 1', () => {
    expect(vowelIndices('mmm')).deep.eq([])
  })

  it('Case 2', () => {
    expect(vowelIndices('apple')).deep.eq([1, 5])
  })

  it('Case 3', () => {
    expect(vowelIndices('super')).deep.eq([2, 4])
  })

  it('Case 4', () => {
    expect(vowelIndices('orange')).deep.eq([1, 3, 6])
  })

  it('Case 5', () => {
    expect(vowelIndices('supercalifragilisticexpialidocious')).deep.eq([
      2, 4, 7, 9, 12, 14, 16, 19, 21, 24, 25, 27, 29, 31, 32, 33,
    ])
  })
})

describe('JavaScript Array Filter', () => {
  //https://www.codewars.com/kata/514a6336889283a3d2000001/train/javascript
  it('Case 1', () => {
    expect(getEvenNumbers([1, 2, 3, 6, 8, 10])).deep.eq([2, 6, 8, 10])
  })

  it('Case 2', () => {
    expect(getEvenNumbers([1, 2])).deep.eq([2])
  })

  it('Case 3', () => {
    expect(getEvenNumbers([12, 14, 15])).deep.eq([12, 14])
  })

  it('Case 4', () => {
    expect(getEvenNumbers([13, 15])).deep.eq([])
  })
})

describe('Are the numbers in order?', () => {
  //https://www.codewars.com/kata/56b7f2f3f18876033f000307/train/javascript
  it('Case 1', () => {
    expect(inAscOrder([9, 8, 7, 6, 5, 4, 3, 2, 1])).eq(false)
  })

  it('Case 2', () => {
    expect(inAscOrder([1, 6, 10, 18, 2, 4, 20])).eq(false)
  })

  it('Case 3', () => {
    expect(inAscOrder([1, 2, 3, 4, 5])).eq(true)
  })

  it('Case 4', () => {
    expect(inAscOrder([1, 2, 4, 7, 19])).eq(true)
  })
})

describe('Flatten and sort an array', () => {
  //https://www.codewars.com/kata/56b7f2f3f18876033f000307/train/javascript

  it('Case 1', () => {
    expect(
      flattenAndSort([
        [3, 2, 1],
        [7, 9, 8],
        [6, 4, 5],
      ])
    ).deep.eq([1, 2, 3, 4, 5, 6, 7, 8, 9])
  })

  it('Case 2', () => {
    expect(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]])).deep.eq([1, 2, 3, 4, 5, 6, 100])
  })

  it('Case 3', () => {
    expect(flattenAndSort([[1], [2], [3], [5], [4]])).deep.eq([1, 2, 3, 4, 5])
  })
})

describe('Reverse a Number', () => {
  //https://www.codewars.com/kata/555bfd6f9f9f52680f0000c5/train/javascript

  it('Case 1', () => {
    expect(reverseNumber(123)).eq(321)
  })

  it('Case 2', () => {
    expect(reverseNumber(-123)).eq(-321)
  })

  it('Case 3', () => {
    expect(reverseNumber(0)).eq(0)
  })
})
