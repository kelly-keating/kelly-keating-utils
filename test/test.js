var assert = require('../assert')
var data = require('./data/data')
var expectedArrayOfArrays = require('./data/array-of-arrays')
var filter = require('../filter.js')
var index = require('../index')

var meaningOfLife = '42'

assert(2 + 2, 4, 'test are working!')







function isNumber (thing) {
  if(typeof thing == 'number'){
    return true
  } else {
    return false
  }
}


// Uncomment when ready to test
// assertIsEmail()

function isEmail (str) {
  var newArr = str.split('@')
  if(newArr.length > 1 && newArr[1] != ''){
    return true
  } else {
    return false
  }
}

/*
 * countIf
 */

// Uncomment when ready to test
assertCountIf()



function assertCountIf () {
  var isString = function (s) {
    return typeof s === 'string'
  }

  var mixedArray = [1, '21', null, Date.now(), 5, meaningOfLife, 42]
  var expectedNumberCount = 4 // do you know which 4 are numbers?
  var expectedStringCount = 2
  var numberCount = index.countIf(isNumber, mixedArray)
  var stringCount = index.countIf(isString, mixedArray)

  assert(numberCount, expectedNumberCount, 'countIf can count the numbers in an array')
  assert(stringCount, expectedStringCount, 'countIf can count the strings in an array')
}


/*
 * filter
 */

// Uncomment when ready to test
// assertFilter()

function assertFilter () {
  var emails = filter(isEmail, data) || []
  assert(emails.length, 44, 'filter and isEmail returns the correct number of emails')
}

/*
 * map
 */

// Uncomment when ready to test
assertMap()



function assertMap () {
  var someNumbers = [2, 4, 6]
  var expectedNumbers = [4, 8, 12]
  var timesTwo = function (num) {
    return num * 2
  }
  var actualNumbers = index.map(timesTwo, someNumbers) || []
  for (var i = 0; i < expectedNumbers.length; i++) {
    assert(expectedNumbers[i], actualNumbers[i], 'number mapped correctly')
  }
}


/*
 * filterStringsWithCommas
 */
