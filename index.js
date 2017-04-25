

module.exports = {
  map: function (func, arr) {
    var results = []
    for (var i = 0; i < arr.length; i++) {
      results.push(func(arr[i]))
    }
    return results
  }
}


module.exports.countIf = function (testFunc, arr) {
  var newArr = arr.filter(testFunc)
  return newArr.length
}
