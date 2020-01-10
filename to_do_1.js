function pushFront(arr, val) {
  for (var i = arr.length; i >= 1; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = val;
  return arr;
}

function popFront(arr) {
  r = arr[0];
  for (var i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr.pop();
  return r;
}

function insertAt(val, index, arr) {
  for (var i = arr.length; i > index; i--) {
    arr[i] = arr[i - 1];
  }
  arr[index] = val;
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

function swapPairs(arr) {
  var i = 0;
  while (i < arr.length) {
    if (arr.length % 2 == 1 && i == arr.length - 1) {
      break;
    } else {
      var n = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = n;
    }
    i = i + 2;
  }
  return arr;
}

function removeDuplicates(arr) {
  var i = 0;
  var new_arr = [];
  while (i < arr.length) {
    new_arr[new_arr.length] = arr[i];
    if (arr[i + 1] == arr[i]) {
      i = i + 2;
    } else {
      i++;
    }
  }
  return new_arr;
}