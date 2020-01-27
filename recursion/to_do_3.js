function rBinarySearch(sortedArr, val, startIndex = 0, endIndex = sortedArr.length - 1) {
    if (startIndex > endIndex) {
        return false;
    }
    if (val < sortedArr[startIndex] || val > sortedArr[endIndex]) {
        return false;
    }
    var midIndex = Math.floor((startIndex + endIndex) / 2);
    if (sortedArr[midIndex] == val) {
        return true;
    }
    if (sortedArr[midIndex] > val) {
        return rBinarySearch(sortedArr, val, startIndex = startIndex, endIndex = midIndex - 1);
    } else if (sortedArr[midIndex] < val) {
        return rBinarySearch(sortedArr, val, startIndex = midIndex + 1, endIndex = endIndex);
    } else {
        return rBinarySearch(sortedArr, val, startIndex = 1, endIndex);
    }
}

function rGCF(x, y) {
    if (!y) {
        return x;
    }
    return rGCF(y, x % y);
}