// function a(){
//   console.log(b);
// }
// var b = 10;
// a();


// function is a able to access the variable b from global scope...
// function a(){
//   c();
//   function c(){
//     console.log(b);
//   }
// }
// var b = 100;
// a();


// whithin nested function too, the globle scope variable can be accessed...
// function a(){
//   c();
//   function c(){
//     var b = 200;
//     console.log(b);
//   }
// }
// var b = 100;
// a();
// local variable with the same name took precedence over globle variable...

// function printName(name1, name2){
//   // var name1 = "Sunil";
//   // var name2 = "patel";
//   // console.log(name1+" "+name2);
//   var first = name1;
//   var second = name2;
//   //console.log(first+" "+second);
//   return result = first +" "+ second; //in this case we see that here override function are working 
//                                       // so due to each it's printing only one time....
// }
// printName("Sunil","Patel");
// printName("Ankit","Singh");
// console.log(result);
// console.log(result);


//find the percentage of numbers.....
// function totalSum(a,b,c){
//   var sum = a+b+c;
//   return sum;
// }
// function percentage(tt){
//   var per = tt/300*100;
//   console.log(per);
// }
// var total = totalSum(30,50,40);
// percentage(total);


// without return find the percentage of numbers...
// function sumNumbers(a,b,c){
//   var sum = a+b+c;
//   var percentage = sum/300*100;
//   console.log(percentage);
// }
//  sumNumbers(70,70,70);

//local and globle variables.........
// var a = "Hello World";
//  function hello(){
//   console.log(a);           // this is globle variable...
// }
// hello();
// console.log(a);


// important--- globle variable is works both under and outer the funtion..
// and local variable works only under the function...AbortController.
// function hello(){
//   var a = "Hello World";
//   console.log(a);           // this is local variable...
// }
// hello();
// console.log(a);

// using for loop...

// function printNumber(n){
//   for(var i=1;i<=n;i++){
//     console.log(i+" ");
//   }
// }
// printNumber(50);


//using while loop
// function printNumber(){
//   var a = 1;
//   while(a<=10){
//     console.log(a+" ");
//   }
// }
// printNumber();  