var i = 0;
var txt = "Hello my friend"; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */
//fonction d'affichage de text procedural
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("texteProfil").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
var cursor = true;
var speed2 = 220;
// fonction de clignotement de cursor
setInterval(() => {
   if(cursor) {
     document.getElementById('cursor').style.opacity = 0;
     cursor = false;
   }else {
     document.getElementById('cursor').style.opacity = 1;
     cursor = true;
   }
}, speed2);

//     <link rel="stylesheet" href="styleNeon.css">
typeWriter()