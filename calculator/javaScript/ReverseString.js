function reverseString(s){
  var ans = "";
  for(var i=s.size()-1;i>=0;i--){
      ans = ans + s.charAt(i);
  }
  console.log(ans);
}
reverseString("sunil");