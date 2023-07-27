//function documnentObejectManipulation(){
  //const paragraph = document.getElementById("para1");
  //const paragraph = document.getElementsByTagName("p");
   //const paragraph = document.getElementsByClassName("para2");


   //querySelector is used for stylling of mathing the all paraggraph....
   //for apply the querySelector we use the loop to access the all same paragraph...
  //  const paragraph = document.querySelectorAll(".para2");
  //  for(let i=0;i<paragraph.length;i++){
  //   paragraph[i].style.color="red";
  //  }

//    const paragraph1 = document.createElement("h2");
//    paragraph1.style.color="pink";
//    paragraph1.innerText="This is headding of paragraph";
//    const paragraph2 = document.getElementById("para1");
//    paragraph2.appendChild(paragraph1);
//   console.log(paragraph2);
// }
// documnentObejectManipulation();

//if we want to display button 1 to 100 on the browser using javascript...
//  function showButton(){
//    for(let i=1;i<=100;i++){
//     const addingButton = document.createElement("button");
//     addingButton.style.backgroundColor="yellow";
//     addingButton.innerText = i;
//     const finalAns = document.querySelector("#para1");
//     finalAns.appendChild(addingButton);
//     console.log(finalAns);
//    }
//  }
//  showButton();






// function showButton(){
//   for(let i=1;i<=100;i++){
//   const createButton = document.createElement("button");
//   createButton.style.color="blue";

//   createButton.innerText=i;

//   const result = document.querySelector("body");
//   result.appendChild(createButton);
//   console.log(result);
//   } 
// }
// showButton();
// if we want to change the colour of paragraph through the help of EventListener....
// function printContent(){
//   const button = document.querySelector("#btn");
//   const heading = document.querySelector("#heading");
//   button.addEventListener("click",function(event){
//     heading.style.color="red";
//     console.log("clicked Button",event);
//   })
// }
// printContent();


//if we want to print date in javaScript.....
//function printDate(){
//  var d = new Date();
//   console.log(d);
//  console.log(d.toDateString());
//  //}
// printDate();

//use of "==" and "===".
//"==" it is only campare the value not data type....but "===" it compares both value and Datatype.. 
// let x ='10';
// let y = 10;
// console.log(x===y);  // result : false;
// console.log(x==y); // result : true;


// let x = 2;
// let y = 4;
// let ans = x**y;
// console.log(ans);


// switch() condition used.....

//  let x = 15;
//  switch(x){
//   case 10: console.log("V Good");
//   break;
//   case 15:console.log("Good");
//   break;
//   default:console.log("Bad");
// }

//------------------------------------------------------------
//use of prompt its like a text in which we can write any text
var pr = prompt("Enter the name");
console.log(pr);