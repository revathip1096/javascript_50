// Write a JavaScript function to check whether an `input` is an array or not.
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


// Write a JavaScript function to clone an array.
var arr_Clone = arra1 => arra1.slice(0);
console.log(arr_Clone([5, 6, 9, 1]));
console.log(arr_Clone([5, 2, [6, 1]]));


// Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.
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


// Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.
var lastele =  function(arr, n) {
    if (arr == null) 
      return void 0;
    if (n == null) 
       return arr[arr.length - 1];
    return arr.slice(Math.max(arr.length - n, 0));  
    };
  console.log(lastele([7, 9, 0, -2]));
  console.log(lastele([7, 9, 0, -2],3));


// Write a JavaScript program to sort the items of an array.
let number = [0, 1, 2, 3, 10, 20, 30];
number.sort((a, b) => a - b);

console.log(number);


//Write a simple JavaScript program to join all elements of the following array into a string.
var color=['Red', 'Green', 'Blue', 'Yellow'];
console.log(color[1]);
console.log(color.toString());
console.log(color.join());
console.log(color.join('+'));


//Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.
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


  