//In DOM manipulation we write the script in last.. means before the </body> tag..........


//function documentObjectModel(){
  //get element by id..
  //const paragraph = document.getElementById("para");

  // for class we use another method...
  // const paragraph = document.getElementsByClassName("blue"); // result : array with double element
  // const paragraph = document.getElementsByClassName("red");    // result : array with single element

  //get element by tag name...
   //const paragraph = document.getElementsByTagName("p");  // help of this method we can find the how many 
  // console.log(paragraph);                                //tag are using...
                                
  //----------------------------------------------------------------------
  //we can use css selector as well in javaScript
  // use of querySelctor();
  //const paragraph = document.querySelector("#para");  // it uses for id tag
  //const paragraph = document.querySelector(".blue");    // it uses for class tag
  // query selector only returns the first element that matches the criteria..
  // if we want to sellect all paragraph that we should be use querySelectorAll() instead of querySelector().
  
  //--------------------------------------------------------------------

  // for stylling we can use javaScript instead of CSS....
  //const paragraph = document.getElementById("para"); // this is use for paragraph...
  //to access the attributes of the element..
  //element<attributes-name>
  //element.style.property

   //const paragraph = document.getElementById("para");
  //paragraph.style.color="red";
   //paragraph.style.backgroundColor="green";   // here we can't use background-color , only we can use
                                                         // only camelcase like-backgroundColor
  //  const paragraph = document.querySelector(".blue");
  //  paragraph.style.color="red";

//   console.log(paragraph);
// }
// documentObjectModel();



//------------------------------------------------------------
// 1. parentNode...
//  function documentObjectModel(){
//   const paragraph = document.querySelector(".blue");
//   console.log(paragraph.parentNode);
//  }
//  documentObjectModel();

//----------------------------------------------------------------
// 2. childNode...
// function documentObjectModel(){
//   const paragraph = document.querySelector(".blue");
//   console.log(paragraph.childNode);
// }
//  documentObjectModel();

//------------------------------------------------------------------
//3. innerHTML....
//   function documentObjectModel(){
//   const newParagraph = document.createElement("h1");
//   newParagraph.style.color="blue";
//   newParagraph.innerText = "This heading part of paragraph";
//   const originalParagraph = document.querySelector(".blue");
//   originalParagraph.appendChild(newParagraph);
//   console.log(originalParagraph);
// }
// documentObjectModel();

//-------------------------------------------------------------------------
// function documentObjectModel(){
//   const heading = document.createElement("h1");
//    heading.style.color="red";
//    heading.innerHTML="This is heading paragraph!.";
//    //if we want to a class in code than we use of this methode....
//    heading.classList.add("title");
//    const parent = document.querySelector(".parent");
//    parent.appendChild(heading);

   //create a new paragraph in under the new created paragraph..
  //  const newParagraph = document.createElement("h3");
  //  newParagraph.style.color="blue";
  //  newParagraph.innerText = "this is second paragraph";
  //  parent.appendChild(newParagraph);
  //  console.log(parent);


  // ---------------------------------------------------------------
  //if we want to create a new paragraph which show upper on the created paragraph..
//   const newParagraph = document.createElement("h3");
//   newParagraph.style.color="green";
//   newParagraph.innerText = "This is h3 heading which shows upper on the created paragraph!.";
//   parent.insertAdjacentElement("beforebegin",newParagraph);
//   console.log(parent);
// }
// documentObjectModel();

//-----------------------------------------------------------------------------------------
// var n = 2;
// function square(num){
//   var ans = num*num;
//   return ans;
// }
// var square1 = square(n);
// var square2 = square(4);
// console.log(square1);
// console.log(square2);

//-------------------------------------------------------------------------------------

// function checkEvenOrOdd(){
//   var a = 10;
//   if(a%2==0){
//     console.log("Even");
//   }
//   else{
//     console.log("Odd")
//   }
// }
// checkEvenOrOdd();
//------------------------------------------------------------------
// var arr = [1,2,3,4,5,6,7];
// const squareArray = arr.map(function(element,i){
//   return element*element;
// })
// console.log("square of all elements ",squareArray);
//----------------------------------------------------------------

// uses of the variables likes var,let ,const .
//we know that variable its type of globle variable its can access outer the curly brusses like {} 
//but let and const variable cant access outer of curly-brusses

//----------------------------------------------------------------------------
//rest operator ---> its start with three dots likes ...

// function sum(name,...args){
//   document.write(`Hello ${name}: `);
//   let sum = 0;
//   for(let i in args){
//     sum = sum + args[i];
//   }
//   document.write(sum);
// }
// sum("Rahul",10,20,30);

// function sum(name,...args){
//   let sum = 0;
//   for(let i in args){
//     sum = sum + args[i];
//   }
//   document.write(`Hello ${name} : ${sum} `);
// }
// sum("Ajay",1,2,3,4,5);

// spred operator...
// its likes a rest operator but its use at the time of function called
// function sum(name,...args){
//   let sum = 0;
//   for(let i in args){
//     sum = sum + args[i];
//   }
//   document.write(`Hello ${name} : ${sum}`);
// }
// let arr = [1,2,3,4,5];
// sum("Rocky",...arr);
//--------------------------------------------------------------



//OOPS in javaScript......
// class JavaScriptOOps{
//   message(){
//     console.log("this is message methode in javaScript");
//   }
//   smoking(){
//     console.log("smoking more injrius for health");
//   }
// }
// let test = new JavaScriptOOps();
// test.message();
// test.smoking();

//-----------------------------------------------------------
// class JavaScriptOOps{
//   constructor(){
//     let name;
//     console.log("This is constructor methode part");
    
//   }
//   message(){
//     console.log("this part of without constructor");
//     console.log("my name is "+this.name);
//   }
// }
// let a = new JavaScriptOOps();
// a.name = "Rahul";
// a.message();