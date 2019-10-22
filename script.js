
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
var sceneFive = document.getElementById('scene-5')

//displayed scenes array
var displayedScenes = document.getElementsByClassName("scene");



////////////////////    Scene logic   ////////////////////


// Scene prep
var sceneNext = 2

function turnOffLaterScenes () {
   for (var i = 0; i < displayedScenes.length; i++) {
      displayedScenes[i].classList.add("off");
   }
}
turnOffLaterScenes ();
sceneOne.classList.toggle("off"); //turning back on the 1st scene


// set interactive layer width
var interLayers = document.getElementsByClassName("interLayer");
// var interLayerWidth = interLayers[0].offsetWidth;
// var interLayerWidth = document.getElementById("scene-1").offsetWidth;
var interHeight = document.getElementById("proto-box").offsetHeight;
var interLayerWidth = interHeight / 16 * 9
//
function interWidthSetter () {
  for (var i = 0; i < interLayers.length; i++) {
     interLayers[i].style.width = (interLayerWidth + "px")
   }
   console.log("interLayerWidth is " + interLayerWidth + "px")
}

interWidthSetter();



//scene change function
function sceneChanger () {
  if (sceneNext === 2) {
    sceneOne.classList.toggle("off");
    sceneTwo.classList.toggle('off'); // toggling the off class turns scenes on
  }
    else if (sceneNext === 3) {
    sceneTwo.classList.toggle("off");
    sceneThree.classList.toggle('off');
  }
    else if (sceneNext === 4) {
    sceneThree.classList.toggle("off");
    sceneFour.classList.toggle('off');
  }
  else if (sceneNext === 5) {
    sceneFour.classList.toggle("off");
    sceneFive.classList.toggle('off');
  }
}


//scenePlayer
function scenePlayer () {
  if (sceneNext === 2) {
    sceneTwoAnim.play();
    sceneNext = 3
    console.log("playing-scene-2");
    console.log('next scene is ' + sceneNext);
  }
  else if (sceneNext === 3) {
    sceneThreeAnim.play();
    sceneNext = 4
    console.log("playing-scene-3");
    console.log('next scene is ' + sceneNext);
  }
  else if (sceneNext === 4) {
    sceneFourAnim.play();
    sceneNext = 5
    console.log("playing-scene-4");
    console.log('next scene is ' + sceneNext);
  }
  else if (sceneNext === 5) {
    sceneFiveAnim.play();
    sceneNext = 6
    console.log("playing-scene-5");
    console.log('next scene is ' + sceneNext);
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
    // document.getElementById("interLayer").style.width = "590px";
    interWidthSetter();
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
