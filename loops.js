function forLoop(arra) {
  var newArray = arra;
  for (var i = 0; i < 25; i++) {
    newArray.push(`I am ${i} strange loop${i === 0 ? '' : 's'}.`);
  }
return newArray;
}

function whileLoop(n) {
  while (n > 0) {
    console.log(n);
    n--;
  }
  return 'done';
}

function maybeTrue() {
  return Math.random() >= 0.5;
}

function doWhileLoop(array) {
  do {
    array.pop();
  } while (array.length > 0 && maybeTrue());
return array;
}
