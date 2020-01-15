function reverse(arr) {
  var y = '';
  for (var i = 0; i < (arr.length / 2); i++) {
    y = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = y;
  }
  return arr;
}

function rotateArr(arr, shiftBy) {
  shiftBy = shiftBy % arr.length;
  if (shiftBy < 0) {
    shiftBy += arr.length;
  }
  for (var i = arr.length - 1; i >= 0; i--) {
    arr[i + shiftBy] = arr[i];
  }
  console.log(arr);
  for (var i = shiftBy; i > 0; i--) {
    arr[i - 1] = arr[arr.length - 1];
    arr.pop();
  }
  return arr;
}

function filterRange(arr, min, max) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > min && arr[i] < max) {
      for (var j = i; j < arr.length - 1; j++) {
        arr[j] = arr[j + 1];
      }
      arr.pop();
    }
  }
  return arr;
}

function concat(arr1, arr2) {
  var arr = [];
  for (var i = 0; i < arr1.length; i++) {
    arr.push(arr1[i])
  }
  for (var i = 0; i < arr2.length; i++) {
    arr.push(arr2[i])
  }
  return arr;
}

// Added second variable myHeight — for the course example myHeight would be 0
// (ground level). skylineHeights isn't smart enough to know if you're high
// enough you can see a shorter building behind a tall one depending on the
// angle
function skylineHeights(heightsOrdered, myHeight) {
  var highest = heightsOrdered[0];
  var visibleHeightsOrdered = [];
  if (myHeight < 0) {
    return -1;
  }
  for (i = 0; i < heightsOrdered.length; i++) {
    if (heightsOrdered[i] > 0 && heightsOrdered[i] > highest) {
      highest = heightsOrdered[i];
      visibleHeightsOrdered.push(heightsOrdered[i]);
    }
  }
  return visibleHeightsOrdered;
}