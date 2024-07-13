const {likes} = require('../kata6')
const expect = require('chai').expect

describe('likes', () => {
  //https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript
  it('Case 1', () => {
    expect(likes(['peter'])).eq('peter likes this')
  })

  it('Case 2', () => {
    expect(likes([])).eq('no one likes this')
  })

  it('Case 3', () => {
    expect(likes(['Jacob', 'Alex'])).eq('Jacob and Alex like this')
  })

  it('Case 4', () => {
    expect(likes(['Alex', 'Jacob', 'Mark', 'Max', 'Sveta'])).eq('Alex, Jacob and 3 others like this')
  })
})
