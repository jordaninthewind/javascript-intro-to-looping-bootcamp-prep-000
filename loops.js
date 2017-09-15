function forLoop(array, num) {
  var num2 = num + 25;
  for (var i = 0; i < num2; i++) {
    array.push(`I am ${i} strange loop${i === 0 ? '' : 's'}.`);
  }
return array;
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
