// detecting button press

var no=document.querySelectorAll(".drum").length ;

for(var i=0; i<no ; i++){

document.querySelectorAll(".drum")[i].addEventListener("click",function() {
    
   var button = this.innerHTML;
   sound(button);
   animate(button);

  })
}


// detecting key press 

document.addEventListener("keydown",function(key){
    sound(event.key);
    animate(event.key);

})


// function to make sound 

function sound(key){

switch(key){

        case "w":
            var tom1 = new Audio("tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("kick-bass.mp3");
            kick.play();
            break;
        default:
            console.log(button);
    }
}

function animate(curr){

    var active = document.querySelector("."+curr);
    active.classList.add("pressed");
    setTimeout(function(){
        active.classList.remove("pressed");
    },100)
}
