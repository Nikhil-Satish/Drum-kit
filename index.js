var num = document.querySelectorAll(".drum").length;
for(var i=0;i<num;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var letter = this.innerHTML;
    makeSound(letter);
    animate(letter);
  });
}
function makeSound(key){
  // alert("I got clicked!");
  // console.log(this.innerHTML);
  // this.innerHTML.style.color = 'white';
  // var audio = new Audio('sounds/tom-1.mp3');
  // audio.play();
  switch(key){
    case 'w':
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();
    break;
    case 'a':
    var audio = new Audio('sounds/snare.mp3');
    audio.play();
    break;
    case 's':
    var audio = new Audio('sounds/tom-2.mp3');
    audio.play();
    break;
    case 'd':
    var audio = new Audio('sounds/tom-3.mp3');
    audio.play();
    break;
    case 'j':
    var audio = new Audio('sounds/tom-4.mp3');
    audio.play();
    break;
    case 'k':
    var audio = new Audio('sounds/crash.mp3');
    audio.play();
    break;
    case 'l':
    var audio = new Audio('sounds/kick.mp3');
    audio.play();
    break;
  }
}
document.addEventListener("keydown",function(event){
  makeSound(event.key);
  animate(event.key);
});
function animate(key){
  // document.querySelector('.'+key).classList.add(".pressed");
  var button = document.querySelector("."+key);
  console.log(button);
  button.classList.add("pressed");
  setTimeout(function(){
    button.classList.remove("pressed");
  },100);
}
