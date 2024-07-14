const {likes, toCamelCase} = require('../kata6')
const expect = require('chai').expect

describe('likes', function () {
  //https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript
  it('should return "no one likes this" when the array is empty', function () {
    expect(likes([])).to.equal('no one likes this')
  })

  it('should return "Peter likes this" when the array contains one name', function () {
    expect(likes(['Peter'])).to.equal('Peter likes this')
  })

  it('should return "Jacob and Alex like this" when the array contains two names', function () {
    expect(likes(['Jacob', 'Alex'])).to.equal('Jacob and Alex like this')
  })

  it('should return "Max, John and Mark like this" when the array contains three names', function () {
    expect(likes(['Max', 'John', 'Mark'])).to.equal('Max, John and Mark like this')
  })

  it('should return "Alex, Jacob and 2 others like this" when the array contains four names', function () {
    expect(likes(['Alex', 'Jacob', 'Mark', 'Max'])).to.equal('Alex, Jacob and 2 others like this')
  })

  it('should return "Alex, Jacob and 3 others like this" when the array contains five names', function () {
    expect(likes(['Alex', 'Jacob', 'Mark', 'Max', 'Paul'])).to.equal(
      'Alex, Jacob and 3 others like this'
    )
  })

  it('should handle an array with six names correctly', function () {
    expect(likes(['Alex', 'Jacob', 'Mark', 'Max', 'Paul', 'Jane'])).to.equal(
      'Alex, Jacob and 4 others like this'
    )
  })
})

describe('Convert string to camel case', function () {
  //https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript
  it('should convert snake_case to camelCase', function () {
    expect(toCamelCase('hello_world')).to.equal('helloWorld')
  })

  it('should convert kebab-case to camelCase', function () {
    expect(toCamelCase('hello-world')).to.equal('helloWorld')
  })

  it('should handle strings with multiple separators', function () {
    expect(toCamelCase('my-variable_name')).to.equal('myVariableName')
  })

  it('should return the same string if there are no separators', function () {
    expect(toCamelCase('hello')).to.equal('hello')
  })

  it('should handle strings starting with a separator', function () {
    expect(toCamelCase('_hello_world')).to.equal('HelloWorld')
  })

  it('should handle strings ending with a separator', function () {
    expect(toCamelCase('hello_world_')).to.equal('helloWorld')
  })

  it('should handle strings with consecutive separators', function () {
    expect(toCamelCase('hello__world--again')).to.equal('helloWorldAgain')
  })

  it('should handle an empty string', function () {
    expect(toCamelCase('')).to.equal('')
  })

  it('should handle a single separator', function () {
    expect(toCamelCase('-')).to.equal('')
  })

  it('should handle a string with only separators', function () {
    expect(toCamelCase('---')).to.equal('')
  })
})
