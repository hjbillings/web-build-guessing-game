var array = [[1,1,1,1],[1,1,1,1]]
console.log(array);

var x=5
function add(number){
  console.log(x+5);
}
add(x)
////////////////////////////////////
var number=-1
function play(){
  var input = Number(document.getElementById("answer").value);
  if (number==-1)
    number = Math.floor(Math.random()*100); //floor rounds down
  if (input == number){
    win();}
  else{
    lose();}   
  }
    
function hint(){
  if (number==-1)
    number = Math.floor(Math.random()*100);
  document.getElementById("hint").innerHTML="this number is between "+ (number-5)+" and "+(number+5);
  
}

function reset(){
  document.getElementById("result").innerHTML= "";
  document.getElementById("result").innerHTML="";
  document.getElementById("hint").innerHTML="";
  
}
function win(){
  document.getElementById("result").innerHTML="you won congrats";
}

function lose(){ 
  document.getElementById("result").innerHTML="you lost get rekt";}
