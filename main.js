// Project Title

function myMax(array) {
  let maximum;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[1]) {
      maximum = array[i];
    }
  }
  return maximum;
}
