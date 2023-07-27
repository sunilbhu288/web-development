// prototype are the mechanism by which javascript objects inherit features from one other.....

// let student = {
//    firstName : "Sunil",
//    lastName : "Patel",
//    birth : 2000,
//    getFullName : function(){
//     return this.firstName+" "+this.lastName;
//    },

 
//   getAge : function(){
//   let age = new Date().getFullYear()-this.birth;
//   return age;
//   }
// }
// //console.log(student.firstName);
// //console.log("this is use for student")
// console.log(student.getFullName());
// console.log(student.getAge());

// let teacher = {
//   firstName : "Parvez",
//   lastName : "Akhtar",
//   birth : 1980,
//   getFullName : function(){
//     return this.firstName+" "+this.lastName;
//   },
//    getAge : function(){
//     let age = new Date().getFullYear()-this.birth;
//     return age;
//    }
// }
// // console.log("this is use for teacher");
// console.log(teacher.getFullName());
// console.log(teacher.getAge());


//-----------------------------------------------------------------------------//

// so it is so long code so to reduce the length of the code we use protype mechanism....
//protype mechanism....

// let users ={
//   getFullName : function(){
//     return this.firstName +" "+this.lastName;
//   },
//   getAge : function(){
//     let age = new Date().getFullYear()-this.birth;
//     return age;
//   }
// }

// let student ={
//   firstName : "Sunil",
//   lastName : "Patel",
//   birth : 2000,
// }

// let teacher ={
//   firstName : "Parvez",
//   lastName : "Akhtar",
//   birth : 1980,
// }

// teacher.__proto__ = users;
// student.__proto__ = users;

// console.log(student.getFullName());
// console.log(student.getAge());
// console.log(teacher.getFullName());
// console.log(teacher.getAge());



//---------------------------------------------------------------------//


// const cart = ["shoes", "pant","kurta"]

// function validateCart(){
//   return true;
// }
 
// function proccedToPayment(orderId){
//   return new Promise(function(resolve,reject){
//     if(!orderId){
//       reject(new Error("Order Id is Required"));
//     }
//     setTimeout(()=>{
//       resolve("payment Successful");
//     },3000);
//   });
// }
// function createOrder(){
//   const pr = new Promise(function(resolve,reject){
//     if(!validateCart()){
//       reject(new Error("Cart is not valid"))
//     }
//     else{
//       const orderId = "12345";
//       resolve(orderId);
//     }
//   })
//   return pr;
// }
// createOrder().then(function(data){
//   console.log("Order id is ",data);
// }).catch((err) =>{
//     console.log("Error is ",err.message)
// })


//-----------------------------------------------------------------------------------//

//<---Asynchronous JavaScript--->

//we can make javascript asynchronous..
//achieving more than one task at the same time
//single threaded

//After 3 sec we want to print the hello world
// console.log(1);
// //setTimeout(callback,timeInMillisecond)
// //1000ms = 1sec
// setTimeout(function(){
//   console.log("Hello World1")
// },3*1000);

// setTimeout(function(){
//   console.log("Hello World2")
// },3*1000);

// setTimeout(function(){
//   console.log("Hello World3")
// },3*1000);

// console.log(3);

//---------------------------------------------------------------------------------//

//<---setInterval--->
// console.log(1);
// const intervalId = setInterval(function(){
//   console.log("Hello World");
// },3*1000);

// setTimeout(function(){
//   //stop this interval with this intervalId...
//   console.log("will stop the interval now");
//   clearInterval(intervalId);
// },10*1000)
// console.log(3);

// setInterval(function(){
//   const currentTime = new Date();
//   console.log(currentTime)
// },1*1000);

// setInterval(function(){
//   const timeHeading = document.getElementById("time");
//   const currTime = new Date();
//   timeHeading.innerText = currTime.getHours()+":"+currTime.getMinutes()+":"+currTime.getSeconds(); 
// },1000)

//------------------------------------------------------------------------------------//

//<--- callback--->

// Callbacks are a great way to handle something after something else has been completed.
// By something here we mean a function execution.
// If we want to execute a function right after the return of some other function,
// then callbacks can be used.


// 1. create a order
// 2.proceed to payment
// 3.createOrder()
// 4.proceedToPayment()
// because createOrder is asynchronous, there is opossibility that it proceed to payment without creating order

// function proceedToPayment(){
//   console.log("Paisa dedo");
// }
// //callback
// function createOrder(callback){  // here callback is function we can write any function instead of callback
//   setTimeout(function(){
//     console.log("created order");
//     callback();
//   },3000)
// }

// function confirmOrder(callback){
//   setTimeout(function(){
//     console.log("Order confirm");
//     callback();
//   },3000)
// }



// createOrder(function(){
//   confirmOrder(function(){
//     proceedToPayment();
//   })
// })

//----------------------------------------------------------------------//

//  Promise method in javaScript........

// function prom(complete){
//   return new Promise(function(resolve,reject){
//     if(complete){
//       resolve("I am successfull..");
//     }
//     else{
//       reject("I am failed..");
//     }
//   });
// }
// console.log(prom(true));

// let onfulfiled = function(result){
//   console.log(result);
// }
// let onRejection = function(error){
//   console.log(error);
// }
// prom(true).then(onfulfiled);
// prom(true).catch(onRejection);

//----------------------------------------------------------------------------------//
//shallow and deep apllication......

// let obj = {
//   name:"sunil"
// }
// let user = obj;
// user.name = "bruce";
// console.log("obj name:",obj);
// console.log("user name:",user);
// //in this case we see that the result have same for both condition name have bruce..

//shallow case...
// it is use for change of value after creation..like 

//---------------------------------------------------------------------------

//1.example..

// let obj ={
//     name : "peter",
// }
// let user = Object.assign({},obj);  // we can also write {...obj}  instead of Object.assign({},obj)
// user.name = "bruce";
// console.log("obj name:",obj);
// console.log("user name:",user);

//-----------------------------------------------------------------------------

//2.Example..

// let obj ={
//   name : "peter",
// }
// let user = {...obj}; 
// user.name = "bruce";
// console.log("obj name:",obj);
// console.log("user name:",user);

//--------------------------------------------------------------------------------------

//but it can optimise for without nested object ...
//  let obj ={
//   name : "peter",
//   age : 25,

//   address :{
//       village :"katariya",
//       post : "basant nagar", 
//   }
//  }
//  let user = {...obj};
//  user.address.village = "Dahiya";
//  console.log(obj);
//  console.log(user);

 // in this case we see that village are same for both obj and user
 //so solve this problems we use the Deep Application...
 //first of all we change the object into string help of strignify() methode..then after we convert this in JSON.parse

//--------------------------------------------------------------------------------------

 // Deep application....

//  let obj ={
//    name : "peter",
//    age : 25,

//    address : {
//      city : "Delhi",
//      state : "UP",
//    }
//  }
//  let user = JSON.parse(JSON.stringify(obj));
//  user.address.city = "kanpur";

//  console.log(obj);
//  console.log(user);

//-----------------------------------------------------------------------------------------

//but for this case function and date do not work so for resolve this problem we use _.cloneDeep() methode..
// let obj ={
//   name : "peter",
//   age : 25,

//   address : {
//     city : "Delhi",
//     state : "UP"
//   },
//   getData : function(){
//      return "all data are here";
//   }
// };

// let user = _.cloneDeep(obj);
// user.address.city = "Kanpur";

// console.log(obj);
// console.log(user);

//-------------------------------------------------------------------------------------
// //Practice...
// let student = {
//   firstName : "sunil",
//   lastName : "patel",
//   age : 24,
//   getFullName : function(){
//     return this.firstName + this.lastName
//   },
// }
// console.log(student.getFullName());

// let users = {
//   getFullName : function(){
//     return this.firstName+" "+this.lastName
//   }
// }
// let student = {
//   firstName : "Sunil",
//   lastName : "Patel"
// }
// let teacher = {
//   firstName : "Parvez",
//   lastName : "Akhtar"
// }

// student.__proto__=users
// teacher.__proto__=users

// console.log(student.getFullName())
// console.log(teacher.getFullName())

//------------------------------------------------------------------------
//practice......
// let users = {
//   getFullName : function(){
//     return this.firstName+" "+this.lastName
//   },
//   getFullAge : function(){
//     let age = new Date().getFullYear()-this.birth
//     return age;
//   }
// }
// let student = {
//   firstName : "Rahul",
//   lastName : "Patel",
//   birth : 1998,
// }
// let teacher = {
//   firstName : "Ankit",
//   lastName : "Singh",
//   birth : 1991,
// }

// student.__proto__=users
// teacher.__proto__=users

// console.log(student.getFullName());
// console.log(student.getFullAge());
// console.log(teacher.getFullName());
// console.log(teacher.getFullAge());

//promise function revision...

function prom(complete){
  return new Promise(function(resolve,reject){
    console.log("Fetching data, Please wait....")
    setTimeout(()=>{
      if(complete){
        resolve("Successfull");
      }
      else{
        reject("Getting some error")
      }
    },1000)
  })
}
prom(true).then((result)=>{
  console.log(result);
}).catch((error){
  console.log(error);
})