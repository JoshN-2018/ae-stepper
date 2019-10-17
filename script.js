
////////////////////    Set-up   ////////////////////

//load scenes
var sceneOneAnim = lottie.loadAnimation({
   container: document.getElementById('scene-1'),
   renderer: 'svg',
   loop: false,
   autoplay: false,
   path: 'proto-scenes/scene-1/data.json'
})

var sceneTwoAnim = lottie.loadAnimation({
   container: document.getElementById('scene-2'),
   renderer: 'svg',
   loop: false,
   autoplay: false,
   path: 'proto-scenes/scene-2/data.json'
})

var sceneThreeAnim = lottie.loadAnimation({
   container: document.getElementById('scene-3'),
   renderer: 'svg',
   loop: false,
   autoplay: false,
   path: 'proto-scenes/scene-3/data.json'
})

var sceneFourAnim = lottie.loadAnimation({
   container: document.getElementById('scene-4'),
   renderer: 'svg',
   loop: false,
   autoplay: false,
   path: 'proto-scenes/scene-4/data.json'
})

var sceneFiveAnim = lottie.loadAnimation({
   container: document.getElementById('scene-5'),
   renderer: 'svg',
   loop: false,
   autoplay: false,
   path: 'proto-scenes/scene-5/data.json'
})




//collect scenes
var sceneOne = document.getElementById('scene-1')
var sceneTwo = document.getElementById('scene-2')
var sceneThree = document.getElementById('scene-3')
var sceneFour = document.getElementById('scene-4')
var sceneFour = document.getElementById('scene-5')

//collect scenes array
var allScenes = document.getElementsByClassName("scene");



////////////////////    Scene logic   ////////////////////


// Scene prep
var sceneNext = 1

function turnOffLaterScenes () {
   for (var i = 0; i < allScenes.length; i++) {
      allScenes[i].classList.add("off");
   }
}
turnOffLaterScenes ();
sceneOne.classList.remove("off"); //turning back on the 1st scene



//scene change function
function sceneChanger () {
  if (sceneNext === 1) {
    sceneOne.classList.add("off");
    sceneTwo.classList.add("on");
    sceneNext = 2
    console.log(sceneNext);
  }
    else if (sceneNext === 2) {
    sceneTwo.classList.add("off");
    sceneThree.classList.add("on");
    sceneNext = 3
    console.log(sceneNext);
  }
  else if (sceneNext === 3) {
  sceneThree.classList.add("off");
  sceneFour.classList.add("on");
  sceneNext = 4
  console.log(sceneNext);
  }
  else if (sceneNext === 4) {
  sceneFour.classList.add("off");
  sceneFive.classList.add("on");
  sceneNext = 5
  console.log(sceneNext);
  }
}


//scenePlayer
function scenePlayer () {
  if (sceneNext === 2) {
    sceneTwoAnim.play();
    console.log("playing-scene-2");
  }
  else if (sceneNext === 3) {
    sceneThreeAnim.play();
    console.log("playing-scene-3");
  }
  else if (sceneNext === 4) {
    sceneFourAnim.play();
    console.log("playing-scene-4");
  }
  else if (sceneNext === 5) {
    sceneFiveAnim.play();
    console.log("playing-scene-5");
  }
}


//full screen
function goFS() {
   var proto = document.getElementById("proto-box");
   proto.requestFullscreen();
}




////////////////////    key press events   ////////////////////

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
    console.log("playing-scene-1");
    sceneOneAnim.play();
  }
});

// right fire
window.addEventListener("keydown", event => {
  if (event.keyCode == 39) {
    console.log("right pressed")
    sceneChanger();
    scenePlayer ();
  }
});
