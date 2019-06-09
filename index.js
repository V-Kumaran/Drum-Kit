var i = 0;
while (i < 7) {
  document.querySelectorAll("button")[i].addEventListener("click", handleClick);
  i++;
}

function handleClick() {
var key = this.innerHTML;
makesound(key);
buttonAnimation(key);
}

document.addEventListener("keypress", function(event){
  makesound(event.key);
  buttonAnimation(event.key);

});

function makesound(key)
{
  switch (key) {
    case "w":
           var crash = new Audio("sounds/crash.mp3");
           crash.play();
           break;
    case "a":
           var bass = new Audio("sounds/kick-bass.mp3");
           bass.play();
           break;
    case "s":
           var snare = new Audio("sounds/snare.mp3");
           snare.play();
           break;
    case "d":
           var tom1 = new Audio("sounds/tom-1.mp3");
           tom1.play();
           break;
    case "j":
           var tom2 = new Audio("sounds/tom-2.mp3");
           tom2.play();
           break;
    case "k":
           var tom3 = new Audio("sounds/tom-3.mp3");
           tom3.play();
           break;
    case "l":
           var tom4 = new Audio("sounds/tom-4.mp3");
           tom4.play();
           break;
    default:
           exit(0);

  }
}

function buttonAnimation(currentkey)
{
var active = document.querySelector("." + currentkey).classList.add("pressed");
setTimeout(function(){
  active = document.querySelector("." + currentkey).classList.remove("pressed");
},100);
}
