//const arr = [1,2,3,4,5,6];
//question 1-  find the square of all elements?

// for this problems we use the map methode...
// const squareArray = arr.map(function(element,index){
//   //here we see that in funtion there have two arguments first is element and second is index.
//   return element*element;
// })
// console.log("square of elements:",squareArray);



//question 2- add 2 in all elements of the array..
//const arr = [1,2,3,4,5,6];
// const addTwo = arr.map(function(element,index){
//   return element+2;
// })
// console.log("result:",addTwo);




//question 3- print only even number which present in the array

//The condition decides if the element should be present in the new array
//Filter Goes each and every element of the array and makes a new array based on condition
//const arr = [1,2,3,4,5,6];
// const evenNumbers = arr.filter(function(element,index){
//   //If it return true then element will be present in the array else not
//   return element % 2 === 0;
// })
// console.log(evenNumbers);



// Question 3- given a array which lenght are 10 print first five number in square form..
//  const arr = [1,2,3,4,5,6,7,8,9,10];
//  const squareFiveNum = arr.filter(function(element,index){
//    return index<5;
//  })
//  const result = squareFiveNum.map(function(element,index){
//   return element*element;
//  })
//  console.log(squareFiveNum,result);


//Question 4- sum of the arrays element...
// const arr = [1,2,3,4,5];
// let accumulator = 0;
// for(let i=0;i<arr.length;i++){
//   accumulator = accumulator + arr[i];
// }
// console.log(accumulator);


// second rule to add all elements of array...
//for this problem we use reduce method...
//Reduce returns single element out of all the array elements
// const nums = [1,2,3,4,5,6,7];
// const sumOfNumbers = nums.reduce(function (accumulator, currentValue, index) {
//   return accumulator + currentValue;
// }, 0);
// console.log(sumOfNumbers);



//Question 5- addition of square of all elements of the array..
// const arr = [1,2,3,4,5];
// const squareSum = arr.reduce(function(sum,currentValue,index){
//     return sum + currentValue*currentValue;
// },0);
// console.log(squareSum);
const fruits = ["Apple","Banana","Grapes","Guava"];
for(let fruit of fruits){
  console.log(fruit);
}