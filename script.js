//load scenes
var proto = lottie.loadAnimation({
   container: document.getElementById('scene-1'),
   renderer: 'svg',
   loop: false,
   autoplay: false,
   path: 'proto-scenes/scene-1/data.json'
})

var protoTwo = lottie.loadAnimation({
   container: document.getElementById('scene-2'),
   renderer: 'svg',
   loop: false,
   autoplay: false,
   path: 'proto-scenes/scene-2/data.json'
})


//collect scenes
var sceneOne = document.getElementById('scene-1')
var sceneTwo = document.getElementById('scene-2')


//scene change function
function sceneChanger () {
  sceneOne.classList.add("off");
  sceneTwo.classList.add("on");
}

//full screen function
function goFS() {
   var proto = document.getElementById("proto-box");
   proto.requestFullscreen();
}


//////////////    key press events   ////////////////////

// enter fire
window.addEventListener("keydown", event => {
  if (event.keyCode == 13) {
    console.log("enter pressed")
    goFS();
  }
});

//space fire
window.addEventListener("keydown", event => {
  if (event.keyCode == 32) {
    console.log("space pressed")
    proto.play();
  }
});

// right fire
window.addEventListener("keydown", event => {
  if (event.keyCode == 39) {
    console.log("right pressed")
    sceneChanger();
    protoTwo.play();
  }
});
