// 1---Write a JavaScript function to check whether an `input` is an array or not.
function check(arr){
    if(Array.isArray(arr)){
      return true;
    }
    else{
      return false;
    }
  }
  console.log(check([1,2,3,4,4,5,5]));
  console.log(check(1,2,3,5));
  console.log(check([ ]));


// 2---Write a JavaScript function to clone an array.
var arr_Clone = arra1 => arra1.slice(0);
console.log(arr_Clone([5, 6, 9, 1]));
console.log(arr_Clone([5, 2, [6, 1]]));


// 3---Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.
var firstele =  function(arr, n) {
    if (arr == null) 
    return void 0;
  if (n == null) 
    return arr[0];
  if (n < 0)
    return [];
  return arr.slice(0, n);
};
console.log(firstele([7, 9, 0, -2]));
console.log(firstele([],3));
console.log(firstele([7, 9, 0, -2],3));


// 4--- Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.
var lastele =  function(arr, n) {
    if (arr == null) 
      return void 0;
    if (n == null) 
       return arr[arr.length - 1];
    return arr.slice(Math.max(arr.length - n, 0));  
    };
  console.log(lastele([7, 9, 0, -2]));
  console.log(lastele([7, 9, 0, -2],3));


// 5--- Write a JavaScript program to sort the items of an array.
let number = [0, 1, 2, 3, 10, 20, 30];
number.sort((a, b) => a - b);

console.log(number);


// 6--- Write a simple JavaScript program to join all elements of the following array into a string.
var color=['Red', 'Green', 'Blue', 'Yellow'];
console.log(color[1]);
console.log(color.toString());
console.log(color.join());
console.log(color.join('+'));


// 7--- Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.
const numb = 25468;
const str= numb.toString();
const result = [0,"-",str[0]];
for(let i = 1; i<str.length;i++){
  if(str[i-1]%2===0 && str[i]%2===0){
    result.push('-',str[i]);
  }
  else{
    result.push(str[i]);
  }
}
console.log(result.join(''));


// 8--- Write a JavaScript program to find the most frequent item in an array.
const findMostFrequentItem = arr => {
  const frequencyMap = new Map();
  arr.forEach(item => {
    const key = String(item);
    frequencyMap.set(key, (frequencyMap.get(key) || 0) + 1);
  });
  let mostFrequentItem;
  let maxFrequency = 0;
  frequencyMap.forEach((frequency, item) => {
    if (frequency > maxFrequency) {
      mostFrequentItem = item;
      maxFrequency = frequency;
    }
  });
  return mostFrequentItem;
};
const array = [1, 'D', 'B', 2, 'B', 'A', 'A', 3, 'B', 1, 'C', 'C'];
const mostFrequent = findMostFrequentItem(array);
console.log(`The most frequent item is: ${mostFrequent}`);


// 9--- Write a JavaScript program that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
function swap(str) {
  let newLetter = '';
  for (let i = 0; i < str.length; i++) {
          if (str[i] == str[i].toUpperCase()) {
              newLetter += str[i].toLowerCase();
          } else {
              newLetter += str[i].toUpperCase();
          }
      }
      console.log(newLetter);
      return newLetter;
  }
  console.log(swap('The Quick Brown Fox'));


// 10--- Write a JavaScript program that prints the elements of the following array.
const a = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7]
];

for (let i = 0; i < a.length; i++) {
  for (let j = 0; j < a[i].length; j++) {
    console.log(  `Row ${i}`);
    console.log(`${a[i][j]}`);
  }
} 


// 11--- Write a JavaScript program to find the sum of squares of a numerical vector.
const vector = [1, 2, 3, 4, 5];
const sumOfSquares = vector.reduce((sum, num) => sum + (num ** 2), 0);
console.log("Sum of squares:", sumOfSquares);


// 12--- Write a JavaScript program to compute the sum and product of an array of integers.
const array = [1, 2, 3, 4, 5];
const sum = array.reduce((total, num) => total + num, 0); 
const product = array.reduce((total, num) => total * num, 1);
console.log("Sum:", sum);
console.log("Product:", product);


// 14--- Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).
const array1 = [1, 2, 3, 2, 4, 5, 1, 3, 4, 5, 6];
const newArray = array1.filter((element, index, arr) => {
  return index === arr.indexOf(element);
});
console.log(newArray);


/* 15--- We have the following arrays :color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
o = ["th","st","nd","rd"]
Write a JavaScript program to display the colors in the following way :
"1st choice is Blue ."
"2nd choice is Green."
"3rd choice is Red." */
const color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const o = ["th", "st", "nd", "rd"];
color.forEach((color, index) => {
  const suffix = o[index <= 3 ? index : 0];
  console.log(`${index + 1}${suffix} choice is ${color}.`);
});


// 16--- Write a JavaScript program to find the leap years in a given range of years.
const findLeapYears = (startYear, endYear) => {
  const leapYears = [];
  for (let year = startYear; year <= endYear; year++) {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
      leapYears.push(year);
    }
  }
  return leapYears;
};
const startYear = 2000;
const endYear = 2020;
const leapYears = findLeapYears(startYear, endYear);
console.log("Leap Years:", leapYears);


// 17--- Write a JavaScript program to shuffle an array.
const shuffleArray = array => array.sort(() => Math.random()-0.5);
const originalArray = [1, 2, 3, 4, 6];
const shuffledArray = shuffleArray(originalArray);
console.log("Shuffled Array:", shuffledArray);


// 18--- Write a JavaScript program to perform a binary search.
const binarySearch = (array, target) => {
  let low = 0;
  let high = array.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const midValue = array[mid];
    if (midValue === target) {
      return mid; 
    } else if (midValue < target) {
      low = mid + 1; 
    } else {
      high = mid - 1; 
    }
  }
  return -1; // Target not found
};
const sortedArray = [1, 2, 3, 4, 5, 7, 8, 9];
const target = 2;
const resultIndex = binarySearch(sortedArray, target);
if (resultIndex !== -1) {
  console.log(`Target ${target} found at index ${resultIndex}`);
} else {
  console.log(`Target ${target} not found in the array`);
}


// 19--- There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.
const computeSum = (array1, array2) => {
  const result = [];
  array1.forEach((value, index) => {
    result.push(value + (array2[index] || 0));
  });
  return result;
};
const array1 = [1, 0, 2, 3, 4];
const array2 = [3, 5, 6, 7, 8,];
const sumArray = computeSum(array1, array2);
console.log("Result Array:", sumArray);


// 20--- Write a JavaScript program to find duplicate values in a JavaScript array.
const findDuplicates = array => {
  const duplicateValues = [];
  array.forEach((value, index) => {
    if (array.indexOf(value) !== index && !duplicateValues.includes(value)) {
      duplicateValues.push(value);
    }
  });
  return duplicateValues;
};
const array = [1, 2, 3, 2, 4, 3, 5, 5, 1];
const duplicates = findDuplicates(array); 
console.log("Duplicate values:", duplicates);


// 21--- Write a JavaScript program to flatten a nested (any depth) array. If you pass shallow, the array will only be flattened to a single level.
const flattenArray = (array, shallow = false) =>
array.reduce(
  (result, element) =>      Array.isArray(element)
      ? result.concat(shallow ? element : flattenArray(element))
      : result.concat(element),
  []
);
const nestedArray = [1, [2, [3, 4], 5], 6];
const flattenedArray = flattenArray(nestedArray, true);
console.log("Flattened Array:", flattenedArray);


// 22--- Write a JavaScript program to compute the union of two arrays.
const computeUnion = (arrayy1, arrayy2) => {
  const combinedArray = [...arrayy1, ...arrayy2];
  const uniqueElements = [...new Set(combinedArray)];
  return uniqueElements;
};
const arrayy1 = [1, 2, 3];
const arrayy2 = [100, 2, 1, 10];
const union = computeUnion(arrayy1, arrayy2);
console.log(union);


// 23--- Write a JavaScript function to find the difference between two arrays.
const findDifference = (arr1, arr2) => {
  const difference = arr1.filter((element) => !arr2.includes(element));
  return difference;
};
const arr1 = [1, 2, 3, 4, 5, 7];
const arr2 = [3, 4, 5, 6];
const difference = findDifference(arr1, arr2);
console.log(difference);


// 24--- Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
const removeFalseValues = (array) => {
  const filteredArray = array.filter((element) => {
    return !!element; 
  });
  return filteredArray;
};
const array = [0, null, "", false, undefined, NaN, 42, "hello"];
const result = removeFalseValues(array);
console.log(result);


// 25--- Write a JavaScript function to sort the following array of objects by title value.
const library = [
  { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
  { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
  { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
];
const sortLibraryByTitle = (arr) => {
  const sortedArray = arr.sort((a, b) => {
    const titleA = a.title.toLowerCase();
    const titleB = b.title.toLowerCase();
    if (titleA < titleB) return -1;
    if (titleA > titleB) return 1;
    return 0;
  });
  return sortedArray;
};
const sortedLibrary = sortLibraryByTitle(library);
console.log(sortedLibrary);


// 26--- Write a JavaScript program to find a pair of elements (indices of the two numbers) in a given array whose sum equals a specific target number.
const findPairIndices = (numbers, target) => {
  const indices = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        indices.push(i, j);
        return indices;
      }
    }
  }
  return indices;
};
const numbers = [10, 20, 30, 40, 50, 60, 70];
const target = 50;
const pairIndices = findPairIndices(numbers, target);
if (pairIndices.length) {
  console.log(`Pair found at indices ${pairIndices[0]}, ${pairIndices[1]}`);
} else {
  console.log("No pair found");
}


// 27--- Write a JavaScript function to retrieve the value of a given property from all elements in an array.
const getValues = (arr, value) => {
  return arr.filter((element) => element && element[value]);
};
const sampleArray = [NaN, 0, 15, false, -22, '', undefined, 47, null];
const result1 = getValues(sampleArray, 'valueOf');

console.log(result1);


// 28--- Write a JavaScript function to find the longest common starting substring in a set of strings.
const longest_common_starting_substring = (strings) =>
  strings.reduce((longestSubstring, currentString) => {
    let commonSubstring = '';
    for (let i = 0; i < longestSubstring.length; i++) {
      if (longestSubstring[i] === currentString[i]) {
        commonSubstring += longestSubstring[i];
      } else {
        break;
      }
    }
    return commonSubstring;
  });
const strings = ['go', 'google'];
const result2 = longest_common_starting_substring(strings);
console.log(result2);


// 29--- Write a JavaScript function to fill an array with values (numeric, string with one character) within supplied bounds.
const num_range= (start, end, step) => {
  const range = [];
  for (let i = start.charCodeAt(0); i <= end.charCodeAt(0); i += step) {
    range.push(String.fromCharCode(i));
  }
  return range;
};
const result4 = num_range('a', 'z', 2);
console.log(result4);


// 30--- Write a JavaScript function that merges two arrays and removes all duplicate elements.
const merge_array = (array1, array2) => {
  const mergedArray = [...array1, ...array2];
  const uniqueArray = mergedArray.filter((value, index) => mergedArray.indexOf(value) === index);
  return uniqueArray;
};
const array3 = [1, 2, 3];
const array4 = [2, 30, 1];
console.log(merge_array(array3, array4));
