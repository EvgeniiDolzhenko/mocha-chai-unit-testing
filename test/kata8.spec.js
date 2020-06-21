const {even_or_odd} = require('../kata8')
const expect = require('chai').expect

describe('Even or Odd', () => {
  //https://www.codewars.com/kata/53da3dbb4a5168369a0000fe
  it('1 case', () => {
    expect(even_or_odd(2)).equal('Even')
  })

  it('2 case', () => {
    expect(even_or_odd(7)).equal('Odd')
  })

  it('3 case', () => {
    expect(even_or_odd(-42)).equal('Even')
  })

  it('4 case', () => {
    expect(even_or_odd(-7)).equal('Odd')
  })
})
