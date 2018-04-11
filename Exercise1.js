function deepSum (arr) {
    if (arr.length === 0){
        return ("No Number"); 
    }
    var result=0;
    for (var i=0; i<arr.length; i++){
      // console.log(arr[i])
      for(var j=0; j<arr[i].length; j++){
        // console.log(arr[i][j])
        for (var x=0; x<arr[i][j].length; x++){
          // console.log(arr[i][j][x])
          result += arr[i][j][x]
        }
      }
    }
  return result
}

// TEST CASE
console.log(deepSum([
  [
    [4, 5, 6],
    [9, 1, 2, 10],
    [9, 4, 3]
  ],
  [
    [4, 14, 31],
    [9, 10, 18, 12, 20],
    [1, 4, 90]
  ],
  [
    [2, 5, 10],
    [3, 4, 5],
    [2, 4, 5, 10]
  ]
])); // 316

console.log(deepSum([
  [
    [20, 10],
    [15],
    [1, 1]
  ],
  [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    [2],
    [9, 11]
  ],
  [
    [3, 5, 1],
    [1, 5, 3],
    [1]
  ],
  [
    [2]
  ]
])); // 156

console.log(deepSum([])); // No number