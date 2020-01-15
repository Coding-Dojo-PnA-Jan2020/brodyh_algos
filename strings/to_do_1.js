var WHITESPACE = /\s/g;

function noWhitespaceStr(str) {
  // return str.replace(WHITESPACE, '');
  var noWhitespaceStr = '';
  for (i = 0; i < str.length; i++) {
    if (WHITESPACE.test(str[i]) == false) {
      noWhitespaceStr += str[i]
    }
  }
  return noWhitespaceStr;
}

function digits(str) {
  var digits = '';
  for (i = 0; i < str.length; i++) {
    if (parseInt(str[i])) {
      digits += str[i]
    }
  }
  return digits;
}

function acronym(str) {
  var acronym = '';
  var words = str.split(WHITESPACE)
  for (i = 0; i < words.length; i++) {
    acronym += words[i][0].toUpperCase();
  }
  return acronym;
}

function notWhitespaceCharsCount(str) {
  var notWhitespaceCharsCount = 0;
  for (i = 0; i < str.length; i++) {
    if (WHITESPACE.test(str[i]) == false) {
      notWhitespaceCharsCount += 1;
    }
  }
  return notWhitespaceCharsCount;
}

function removeStringsLessThan(minCharsCount, arr) {
  var newArr = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i].length >= minCharsCount) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}