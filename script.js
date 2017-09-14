var riddle = prompt("What shape has 13 sides");

if(riddle === tridecagon){
  alert("access granted");
}  
else{
 alert("acces denied, try again");
  riddle;
}

var dude= document.getElementById('guy');
var container= document.getElementById('container');
function anim(e){
alert(e.keyCode);
}
document.onkeydown = anim;
