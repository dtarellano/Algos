function findShortest(vectors) {
  let results;
  let length = 0;
  for (let vector of vectors) {
    let temp = 0;
    for (let i = 0; i < vector.length; i++) {
      let item = vector[i];
      temp += item * item;
      if (i === vector.length - 1) {
        temp = Math.sqrt(temp);
      }
    }
    if (results === undefined) {
      results = vector;
      length = temp;
    } else if (temp <= length) {
      length = temp;
      results = vector;
    }
  }
  return results;
}

var vectors = [[3, 3, 3], [10, 10, 10], [5, 5, 5]];
var shortest = findShortest(vectors);
// Expected output: 1,1,1
console.log(shortest);
// Math.sqrt
