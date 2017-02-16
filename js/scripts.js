$(function(){
  var age = parseInt(prompt("Enter your age:"));
  if (age >= 21){
    $(".over").show();
  }else{
    $(".under").show();
  };
});
