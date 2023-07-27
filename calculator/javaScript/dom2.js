//try to add some element with javascript..

//create an element
// const divElement = document.createElement("h1");
// divElement.style.color="red";
// //write content in this divElement

// //get only allows you to write text in the element
// divElement.innerText="this is a content in div";
// const paragraph = document.getElementById("content");

// paragraph.appendChild(divElement);

//---------------------------------------------------------------------------------------

// Question : if we want display butons 1 to 100 on browser using of javaScript instead of html
// function showButton(){
//   for(let i=1;i<=100;i++){
//   const buttonElement = document.createElement("button");
//   buttonElement.innerText=i;

//   const buttonBody = document.querySelector("body");
//   buttonBody.appendChild(buttonElement);
//  }
// }
// showButton();

//-----------------------------------------------------------------------------------------
// Question: when button is clicked I want to print something in console..
//  const buttonElement = document.getElementById("btn");
//  buttonElement.addEventListener("click",function(){
//   console.log("Button Clicked");
//  });
 

// function show(){
//   alert("Button Clicked");
// }
// var btn1 = document.getElementById("btn");
// btn1.addEventListener("click",show);

  // function show(){
  //   for(var i=1;i<=100;i++){
  //   const btn1 = document.createElement("button");
  //     btn1.innerText = i;
  //     const btn2 = document.querySelector("#content");
  //     btn2.appendChild(btn1);
  //     console.log(btn2);
  //   }
  // }
  // show();

  // function printButton(){
  //   const buttonElement = document.getElementById("btn");
  //   let i = 1;
  //   buttonElement.addEventListener("click",function(event){
  //     const newButton = document.createElement("button");
  //     newButton.style.color="red";
  //     newButton.innerText = i;
  //     i++;
  //     const bodyElement = document.querySelector("body");
  //     bodyElement.appendChild(newButton);
  //   })
  // }
  // printButton();

  //print paragraph after eventListener......
  //  function showParagraph(){
  //   let buttonE = document.getElementById("btn");
  //   buttonE.addEventListener("click",function(){
  //     let paragraph = document.createElement("h1");
  //     paragraph.style.color="green";
  //     paragraph.innerText = "This is heading paragraph";
  //     const result = document.querySelector("body");
  //     result.appendChild(paragraph);
  //   })
  //  }
  //  showParagraph();

  //change the a particuler sentence help through the DOM...............
  // function changeParticulerName(){
  //   let changeName= document.getElementsByClassName("name");
  //   name[1].innerHTML="Suraj";
  //   for(let i=0;i<name.length;i++){
  //     console.log(name[i]);
  //   }
  // }
  // changeParticulerName();

  //----------------------------------------------------------------------------
  //Practice of document object manipulation
  //  function printButton(){
  //   let i = 1;
  //   const btn1 = document.getElementById("btn");
  //    btn1.addEventListener("click",function(e){
  //      let btn2 = document.createElement("button");
  //      btn2.innerText = i;
  //      i++;
  //      const result = document.querySelector("body");
  //      result.appendChild(btn2);
  //    })
  //  }
  //  printButton();

  //------------------------------------------------------

  // function timeNow(){
  //   const timeNow = new Date();
  //   const hours = timeNow.getHours();
  //   const minuts = timeNow.getMinutes();
  //   const seconds = timeNow.getSeconds();
  //   document.querySelector(".hours").innerText = hours+":";
  //   document.querySelector(".minuts").innerText = minuts+":";
  //   document.querySelector(".seconds").innerText = seconds;
  // }

  // setInterval(()=>{
  //   timeNow()
  // },1000)


  //----------------------------------------------------------------------------
  // const para1 = document.querySelector("#para").p="This is check Paragraph"
  // console.log(para1);

// const fruits = ["Apple","Grapes","Banana","Guava"];
// for(let fruit of fruits){
//   console.log(fruit);
// }