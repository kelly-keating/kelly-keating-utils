module.exports = function (func, arr) {
  var results = []
  for (var i = 0; i < arr.length; i++) {
    if(func(arr[i])){
      results.push(arr[i])
    }
  }
  return results
}
