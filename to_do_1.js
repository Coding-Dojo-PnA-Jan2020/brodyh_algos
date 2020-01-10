function pushFront(val, arr) {
  var new_arr = [];
  new_arr[0] = val;
  var i = 0;
  while(i < arr.length) {
    // new_arr.push(arr[i]);
    new_arr[i + 1] = arr[i]
    i++;
  }
  return new_arr;
}

function popFront(arr) {
  var new_arr = [];
  var i = 0;
  while(i < arr.length) {
    pos = arr.length - i - 1;
    if (pos != 0) {
      new_arr[pos - 1] = arr[pos];
    }
    i++;
  }
  // return new_arr;
  return arr[0];
}

function insertAt(val, index, arr) {
  var new_arr = [];
  var i = 0;
  while(i < arr.length) {
    if (i < index) {
      // new_arr.push(arr[i]);
      new_arr[i] = arr[i]
    } else if (i > index) {
      new_arr[i + 1] = arr[i];
    } else {
      new_arr[i + 1] = arr[i];
      new_arr[i] = val;
    }
    i++;
  }
  return new_arr;
}

function removeAt(arr, index) {
  var new_arr = [];
  var i = 0;
  while(i < arr.length) {
    if (i < index) {
      // new_arr.push(arr[i]);
      new_arr[i] = arr[i];
    } else if (i > index) {
      new_arr[i - 1] = arr[i];
    } else {
      new_arr[i] = arr[i + 1];
    }
    i++;
  }
  // return new_arr;
  return arr[index];
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