function foo(a,b){
  console.log("Foo");
}

function fun(){
 console.log("Fun");
}
//Export function foo somehow
//Default Export, Named Exports

//export default foo;
//export more than one variables then use named export
export{foo,fun};