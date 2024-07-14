const {moveZeros} = require('../kata5')
const expect = require('chai').expect

describe('moveZeros', function () {
  //https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript
  it('should move all zeros to the end while preserving the order of other elements', function () {
    expect(moveZeros([1, 0, 2, 0, 3, 0, 4, 0])).to.deep.equal([1, 2, 3, 4, 0, 0, 0, 0])
  })

  it('should return the same array if there are no zeros', function () {
    expect(moveZeros([1, 2, 3, 4])).to.deep.equal([1, 2, 3, 4])
  })

  it('should handle an array with only zeros', function () {
    expect(moveZeros([0, 0, 0, 0])).to.deep.equal([0, 0, 0, 0])
  })

  it('should handle an array with only one element that is zero', function () {
    expect(moveZeros([0])).to.deep.equal([0])
  })

  it('should handle an array with only one non-zero element', function () {
    expect(moveZeros([1])).to.deep.equal([1])
  })

  it('should handle an empty array', function () {
    expect(moveZeros([])).to.deep.equal([])
  })

  it('should handle an array with negative numbers and zeros', function () {
    expect(moveZeros([-1, 0, -2, 0, -3])).to.deep.equal([-1, -2, -3, 0, 0])
  })

  it('should handle an array with floating point numbers and zeros', function () {
    expect(moveZeros([1.1, 0, 2.2, 0, 3.3])).to.deep.equal([1.1, 2.2, 3.3, 0, 0])
  })

  it('should handle an array with mixed types', function () {
    expect(moveZeros([1, 'a', 0, 'b', 0, true])).to.deep.equal([1, 'a', 'b', true, 0, 0])
  })
})
