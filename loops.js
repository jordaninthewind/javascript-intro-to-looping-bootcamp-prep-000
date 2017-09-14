function forLoop(array) {
  for (var i = 0; i < 24; i++) {
    array.push(`I am ${i} strange loop${i === 0 ? '' : 's'}.`);
  }
  console.log(array);
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
