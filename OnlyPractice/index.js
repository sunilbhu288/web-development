// function showTimer(){
//   const timeNow = new Date();
//   const hours = timeNow.getHours();
//   const minuts = timeNow.getMinutes();
//   const seconds = timeNow.getSeconds();
//   document.querySelector(".second").innerText = seconds;
//   document.querySelector(".minuts").innerText = minuts +":";
//   document.querySelector(".hours").innerText = hours + ":";
// }
// setInterval(()=>{
//   showTimer();
// },1000)
// showTimer();

//  function myFunction(){
//   document.getElementById("demo").innerHTML = "<h2>Thank You!</h2>"
//  }
//-------------------------------------------------------------------------------------
// function showButton(){
//   let i =1
//   const btn1 = document.getElementById("btn");
//   btn1.addEventListener("click",function(e){
//     let btn2 = document.createElement("button")
//     btn2.innerText = i;
//     i++;
//     const result = document.querySelector("body");
//     result.appendChild(btn2)
//   })
// }
// showButton();

//---------------------------------------------------------------------
//   let i =1;
//   function myFunction(){
//   let btn2 = document.createElement("button")
//   btn2.innerText = i;
//   i++;
//   const result = document.querySelector("body");
//   result.appendChild(btn2);
//  }
//  myFunction()

//--------------------------------------------------------
// function add(a,b){
//   return a+b;
// }
// var ans = add(2,3);
// document.write(ans);
// const fruits = ["apple","guava","grapes","pineapple"];
// for(let fruit of fruits){
//   document.write(fruit+",<br>");
// }
// const fruits = ["apple","guava","grapes"];
// const fruit = [];
// let i =0;
// while(i<fruits.length){
//   fruit.push(fruits[i])
//   document.write(fruit+"<br>")
// }
//-------------------------------------------------------------
// const fruit = document.getElementsByClassName("list-item");
// fruit[2].innerText="fatat"
// console.log(fruit);
// fruit[1].style.color="red";
// for(let i=0;i<fruit.length;i++){
//   fruit[i].style.backgroundColor="yellow";
// }

//-------------------------------------------------------------------
const odd = document.querySelectorAll(".list-item");
for(let i=0;i<odd.length;i++){
odd[i].style.color="green"
}