const {solve,removeDuplicateWords,largestPairSum,evenNumbers,smallEnough} = require('../kata7')
const expect = require('chai').expect


describe('Fix string case',()=>{
//https://www.codewars.com/kata/5b180e9fedaa564a7000009a/train/javascript
    it('1 case',()=>{
        expect(solve('code')).equal('code')
    })

    it('2 case',()=>{
        expect(solve('CODe')).equal('CODE')
    })

    it('3 case',()=>{
        expect(solve('COde')).equal('code')
    })

    it('4 case',()=>{
        expect(solve('Code')).equal('code')
    })
})

describe('Remove duplicate words',()=>{
    //https://www.codewars.com/kata/5b39e3772ae7545f650000fc/train/javascript
    it('1 case',()=>{
        expect(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta')).equal('alpha beta gamma delta')
    })

    it('2 case',()=>{
        expect(removeDuplicateWords('a a a b b b')).equal('a b')
    })

})

describe('Largest pair sum in array',()=>{

    //https://www.codewars.com/kata/5b39e3772ae7545f650000fc/train/javascript
    it('1 case',()=>{
        expect(largestPairSum([10,14,2,23,19])).equal(42)
    })

    it('2 case',()=>{
        expect(largestPairSum([-100,-29,-24,-19,19])).equal(0)
    })

    it('3 case',()=>{
        expect(largestPairSum([1,2,3,4,6,-1,2])).equal(10)
    })


    it('4 case',()=>{
        expect(largestPairSum([-10, -8, -16, -18, -19])).equal(-18)
    })

})

describe('Even numbers in an array',()=>{
    //https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c
    it('Case 1',()=>{
        expect(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)).deep.eq([4, 6, 8])
    })

    it('Case 2',()=>{
        expect(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2)).deep.eq([-8, 26])
    })

    it('Case 3',()=>{
        expect(evenNumbers([6, -25,  , 7, 5, 5, 7, -3, 23], 1)).deep.eq([6])
    })
})

describe('Small enough? - Beginner',()=>{
    //https://www.codewars.com/kata/57cc981a58da9e302a000214/train/javascript
    it('Case 1',()=>{
        expect(smallEnough([66, 101], 200)).eq(true)
    })

    it('Case 2',()=>{
        expect(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100)).eq(false)
    })

    it('Case 3',()=>{
        expect(smallEnough([101, 45, 75, 105, 99, 107], 107)).eq(true)
    })

    it('Case 4',()=>{
        expect(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120)).eq(true)
    })
})