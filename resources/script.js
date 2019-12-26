
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

var sceneSixAnim = lottie.loadAnimation({
   container: document.getElementById('scene-6'),
   renderer: 'svg',
   loop: false,
   autoplay: false,
   path: 'proto-scenes/scene-5/data.json'
})

var sceneSevenAnim = lottie.loadAnimation({
   container: document.getElementById('scene-7'),
   renderer: 'svg',
   loop: false,
   autoplay: false,
   path: 'proto-scenes/scene-5/data.json'
})

var sceneEightAnim = lottie.loadAnimation({
   container: document.getElementById('scene-8'),
   renderer: 'svg',
   loop: false,
   autoplay: false,
   path: 'proto-scenes/scene-5/data.json'
})

var sceneNineAnim = lottie.loadAnimation({
   container: document.getElementById('scene-9'),
   renderer: 'svg',
   loop: false,
   autoplay: false,
   path: 'proto-scenes/scene-5/data.json'
})

var sceneTenAnim = lottie.loadAnimation({
   container: document.getElementById('scene-10'),
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
var sceneSix = document.getElementById('scene-6')
var sceneSeven = document.getElementById('scene-7')
var sceneEight = document.getElementById('scene-8')
var sceneNine = document.getElementById('scene-9')
var sceneTen = document.getElementById('scene-10')

// collect first video
var videoStart = document.getElementById('video-start')

//collect inter layers
var interOne = document.getElementById('inter-1')
var interTwo = document.getElementById('inter-2')
var interThree = document.getElementById('inter-3')
var interFour = document.getElementById('inter-4')
var interFive = document.getElementById('inter-5')
var interSix = document.getElementById('inter-6')
var interSeven = document.getElementById('inter-7')
var interEight = document.getElementById('inter-8')
var interNine = document.getElementById('inter-9')
var interTen = document.getElementById('inter-10')


// displayed scenes array
var displayedScenes = document.getElementsByClassName("scene");

// displayed interlayers array
var interLayers = document.getElementsByClassName("interLayer");

// buttons array
var buttons = document.getElementsByClassName('button');


// interlayer dimension values
var heightRatio = 16
var widthRatio = 9
var interHeight = 0
var interLayerWidth = 0

// Scene
var sceneNext = 2

// Panel elements
var tickBoxOnA = document.getElementById('tick-on-A');
var tickBoxOffA = document.getElementById('tick-off-A');
var tickBoxOnB = document.getElementById('tick-on-B');
var tickBoxOffB = document.getElementById('tick-off-B');

var resetButton = document.getElementById('reset');

var currentSceneReadout = document.getElementById('current-scene');

var screenRatioX = document.getElementById('ratio-x');
var screenRatioY = document.getElementById('ratio-y');

var readoutButtonWidth = document.getElementById('button-width');
var readoutButtonHeight = document.getElementById('button-height');

var readoutLeftOne = document.getElementById('Left-1');
var readoutLeftTwo = document.getElementById('Left-2');
var readoutLeftThree = document.getElementById('Left-3');
var readoutLeftFour = document.getElementById('Left-4');
var readoutLeftFive = document.getElementById('Left-5');
var readoutLeftSix = document.getElementById('Left-6');
var readoutLeftSeven = document.getElementById('Left-7');
var readoutLeftEight = document.getElementById('Left-8');
var readoutLeftNine = document.getElementById('Left-9');
var readoutLeftTen = document.getElementById('Left-10');

var readoutBottomOne = document.getElementById('Bottom-1');
var readoutBottomTwo = document.getElementById('Bottom-2');
var readoutBottomThree = document.getElementById('Bottom-3');
var readoutBottomFour = document.getElementById('Bottom-4');
var readoutBottomFive = document.getElementById('Bottom-5');
var readoutBottomSix = document.getElementById('Bottom-6');
var readoutBottomSeven = document.getElementById('Bottom-7');
var readoutBottomEight = document.getElementById('Bottom-8');
var readoutBottomNine = document.getElementById('Bottom-9');
var readoutBottomTen = document.getElementById('Bottom-10');



////////////////////    Scene Prep   ////////////////////

// fetch dimensions for dimensions setter (interwidthSetter)
function dimensionValuesGetter() {
  interHeight = document.getElementById("proto-box").offsetHeight;
  interLayerWidth = interHeight / heightRatio * widthRatio
  console.log("dimensions fetched");
}


// turn off later scenes
function turnOffLaterScenes() {
   for (var i = 0; i < displayedScenes.length; i++) {
      displayedScenes[i].classList.add("off");
   }
   console.log("later scenes off");
}
turnOffLaterScenes();
sceneOne.classList.toggle("off"); //turning back on the 1st scene



// turn off later inter layers
function turnOffLaterInters() {
   for (var i = 0; i < interLayers.length; i++) {
      interLayers[i].classList.add("off");
   }
   console.log("later inters off");
}
turnOffLaterInters();
interOne.classList.toggle("off"); //turning back on the 1st inter


// Set widths for all inter layers
function interWidthSetter() {
  for (var i = 0; i < interLayers.length; i++) {
     interLayers[i].style.width = (interLayerWidth + "px")
   }
   console.log("dimensions set: width is " + interLayerWidth + "px")
}



// add listeners
function addButtonListeners() {
   for (var i = 0; i < buttons.length; i++) {
     buttons[i].addEventListener("click", buttonActions);
     console.log('button events added')
   }
}
addButtonListeners();



function addPanelListeners() {
     tickBoxOnA.addEventListener("click", toggleButtonHinting);
     tickBoxOffA.addEventListener("click", toggleButtonHinting);

     tickBoxOnB.addEventListener("click", toggleHitAreas);
     tickBoxOffB.addEventListener("click", toggleHitAreas);

     resetButton.addEventListener("click", reset);

     console.log('panel event listeners added')
}
addPanelListeners();



////////////////////   Panel modifiers   ////////////////////

// button hinting tick box
function toggleButtonHinting() {

   tickBoxOnA.classList.toggle("off");
   tickBoxOffA.classList.toggle("off");
   /* function to go here */
   console.log("tickbox A clicked");
}

// Hit area tick box
function toggleHitAreas() {

   tickBoxOnB.classList.toggle("off");
   tickBoxOffB.classList.toggle("off");

   for (var i = 0; i < interLayers.length; i++) {
      interLayers[i].classList.toggle("hit-area-show");
   }
   console.log("tickbox B clicked");
}





// Dropdown code!
/*
getting dropdown and users selection
var screenRatioX = document.getElementById('ratio-drop-x');
var valueRatioX = screenRatioX.options[screenRatioX.selectedIndex].value;

var screenRatioY = document.getElementById('ratio-drop-y');
var valueRatioY = screenRatioY.options[screenRatioY.selectedIndex].value;
*/

// style variable which contains root level variables
var style = getComputedStyle(document.body);


function panelContentUpdater() {

   // current scene readout
   currentSceneReadout.value = sceneNext - 1;

   // screen ratio
   screenRatioX.value = 'X: ' + style.getPropertyValue('--screen-ratio-X');
   screenRatioY.value = 'Y: ' + style.getPropertyValue('--screen-ratio-Y');

   // button size values
   readoutButtonWidth.value = 'Width: ' + style.getPropertyValue('--button-width');
   readoutButtonHeight.value = 'Height: ' + style.getPropertyValue('--button-height');

   // button position values
   readoutLeftOne.value = 'Left ' + style.getPropertyValue('--b1-pos-left'); /* references the + style variable */
   readoutLeftTwo.value = 'Left ' + style.getPropertyValue('--b2-pos-left');
   readoutLeftThree.value = 'Left ' + style.getPropertyValue('--b3-pos-left');
   readoutLeftFour.value = 'Left ' + style.getPropertyValue('--b4-pos-left');
   readoutLeftFive.value = 'Left ' + style.getPropertyValue('--b5-pos-left');
   readoutLeftSix.value = 'Left ' + style.getPropertyValue('--b6-pos-left');
   readoutLeftSeven.value = 'Left ' + style.getPropertyValue('--b7-pos-left');
   readoutLeftEight.value = 'Left ' + style.getPropertyValue('--b8-pos-left');
   readoutLeftNine.value = 'Left ' + style.getPropertyValue('--b9-pos-left');
   readoutLeftTen.value = 'Left ' + style.getPropertyValue('--b10-pos-left');

   readoutBottomOne.value = 'Bottom ' + style.getPropertyValue('--b1-pos-bottom');
   readoutBottomTwo.value = 'Bottom ' + style.getPropertyValue('--b2-pos-bottom');
   readoutBottomThree.value = 'Bottom ' + style.getPropertyValue('--b3-pos-bottom');
   readoutBottomFour.value = 'Bottom ' + style.getPropertyValue('--b4-pos-bottom');
   readoutBottomFive.value = 'Bottom ' + style.getPropertyValue('--b5-pos-bottom');
   readoutBottomSix.value = 'Bottom ' + style.getPropertyValue('--b6-pos-bottom');
   readoutBottomSeven.value = 'Bottom ' + style.getPropertyValue('--b7-pos-bottom');
   readoutBottomEight.value = 'Bottom ' + style.getPropertyValue('--b8-pos-bottom');
   readoutBottomNine.value = 'Bottom ' + style.getPropertyValue('--b9-pos-bottom');
   readoutBottomTen.value = 'Bottom ' + style.getPropertyValue('--b10-pos-bottom');

   // Dropdown code!
   /*
   update screen ratio to user selected values from dropdown
   valueRatioX = screenRatioX.options[screenRatioX.selectedIndex].value;
   valueRatioY = screenRatioY.options[screenRatioY.selectedIndex].value;

   assign values
   widthRatio = valueRatioX
   heightRatio = valueRatioY
   */

   // assign values
   widthRatio = style.getPropertyValue('--screen-ratio-X');
   heightRatio = style.getPropertyValue('--screen-ratio-Y');


   dimensionValuesGetter();
   interWidthSetter();

   console.log('panel content updated')
}


////////////////////    Scene logic   ////////////////////


//scene change function
function sceneChanger() {
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
  else if (sceneNext === 6) {
    sceneFive.classList.toggle("off");
    sceneSix.classList.toggle('off');
  }
  else if (sceneNext === 7) {
    sceneSix.classList.toggle("off");
    sceneSeven.classList.toggle('off');
  }
  else if (sceneNext === 8) {
    sceneSeven.classList.toggle("off");
    sceneEight.classList.toggle('off');
  }
  else if (sceneNext === 9) {
    sceneEight.classList.toggle("off");
    sceneNine.classList.toggle('off');
  }
  else if (sceneNext === 10) {
    sceneNine.classList.toggle("off");
    sceneTen.classList.toggle('off');
  }
}


//inter change function
function interChanger() {
  if (sceneNext === 2) {
    interOne.classList.toggle("off");
    interTwo.classList.toggle('off'); // toggling the off class turns scenes on
  }
    else if (sceneNext === 3) {
    interTwo.classList.toggle("off");
    interThree.classList.toggle('off');
  }
    else if (sceneNext === 4) {
    interThree.classList.toggle("off");
    interFour.classList.toggle('off');
  }
    else if (sceneNext === 5) {
    interFour.classList.toggle("off");
    interFive.classList.toggle('off');
  }
    else if (sceneNext === 6) {
    interFive.classList.toggle("off");
    interSix.classList.toggle('off');
  }
    else if (sceneNext === 7) {
    interSix.classList.toggle("off");
    interSeven.classList.toggle('off');
  }
    else if (sceneNext === 8) {
    interSeven.classList.toggle("off");
    interEight.classList.toggle('off');
  }
    else if (sceneNext === 9) {
    interEight.classList.toggle("off");
    interNine.classList.toggle('off');
  }
    else if (sceneNext === 10) {
    interNine.classList.toggle("off");
    interTen.classList.toggle('off');
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
  else if (sceneNext === 6) {
    sceneSixAnim.play();
    sceneNext = 7
    console.log("playing-scene-6");
    console.log('next scene is ' + sceneNext);
  }
  else if (sceneNext === 7) {
    sceneSevenAnim.play();
    sceneNext = 8
    console.log("playing-scene-7");
    console.log('next scene is ' + sceneNext);
  }
  else if (sceneNext === 8) {
    sceneEightAnim.play();
    sceneNext = 9
    console.log("playing-scene-8");
    console.log('next scene is ' + sceneNext);
  }
  else if (sceneNext === 9) {
    sceneNineAnim.play();
    sceneNext = 10
    console.log("playing-scene-9");
    console.log('next scene is ' + sceneNext);
  }
  else if (sceneNext === 10) {
    sceneTenAnim.play();
    sceneNext = 11
    console.log("playing-scene-10");
    console.log('next scene is ' + sceneNext);
  }
}


//full screen
function goFS() {
   var proto = document.getElementById("proto-box");
   proto.requestFullscreen();
}

function reset() {
   window.location.reload();
   console.log("refresh requested")
}


////////////////////    Press events   ////////////////////

// enter fire
window.addEventListener("keydown", event => {
  if (event.keyCode == 13) {
    console.log("enter pressed")
    goFS();
    setTimeout(function(){dimensionValuesGetter(); }, 150);
    setTimeout(function(){interWidthSetter(); }, 200);
  }
});

//space fire
window.addEventListener("keydown", event => {
  if (event.keyCode == 32) {
    console.log("space pressed")
    console.log("playing-scene-1");
    sceneOneAnim.play();
    videoStart.play();
    panelContentUpdater();
  }
});

// right fire
window.addEventListener("keydown", event => {
  if (event.keyCode == 39) {
    console.log("right pressed")
    sceneChanger();
    interChanger();
    scenePlayer();
    panelContentUpdater();
  }
});

// button Fire
function buttonActions() {
  sceneChanger();
  interChanger();
  scenePlayer();
  panelContentUpdater();
}

// detect fullscreen exit
if (document.addEventListener)
{
 document.addEventListener('fullscreenchange', exitHandler, false);
 document.addEventListener('mozfullscreenchange', exitHandler, false);
 document.addEventListener('MSFullscreenChange', exitHandler, false);
 document.addEventListener('webkitfullscreenchange', exitHandler, false);
}

function exitHandler()
{
 if (document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement !== null)
 {
    setTimeout(function(){dimensionValuesGetter(); }, 250);
    setTimeout(function(){interWidthSetter(); }, 300);
 }
}


// First load function calls
dimensionValuesGetter();
interWidthSetter();
panelContentUpdater();
