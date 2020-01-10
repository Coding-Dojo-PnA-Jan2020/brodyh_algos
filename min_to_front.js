function pushFront(arr, val) {
  for (var i = arr.length; i >= 1; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = val;
  return arr;
}

function removeAt(arr, index) {
  ret = arr[index];
  for (var i = index; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;
  return ret;
}

function minToFront(arr) {
  var minVal = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < minVal) {
      minVal = arr[i];
      index = i + 1;
    }
  }
  pushFront(arr, minVal);
  removeAt(arr, index);
  return arr;
}