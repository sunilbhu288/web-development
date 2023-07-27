function sum(...inputs){
  console.log(inputs);
  }                         // it converts the numbers to the arrays
 sum(1,2,3,4,5,6);


// if we want to print in only number than
// function sum(...inputs){
//   console.log(...inputs);
// }
// sum(1,2,3,4,5,6);

//if we want to add the whole Number...
// function sum(...inputs){
//   let total = 0;
//   for(let i of inputs){
//     total = total + i;
//   }
//   console.log(total);
// }
// sum(1,2,3,4,5,6,7,8,9,10);
// function fun(a,b,...c){
//   console.log('${a} ${b}');
//   console.log(c);
//   console.log(c[0]);
//   console.log(c.length);
//   console.log(c.indexOf('Edan'));
// }
// fun('Ronaldo','Neymar','Pele','Messi','Edan');