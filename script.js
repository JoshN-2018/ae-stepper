//load scenes
var proto = lottie.loadAnimation({
   container: document.getElementById('scene-1'),
   renderer: 'svg',
   loop: false,
   autoplay: true,
   path: 'proto-scenes/scene-1/data.json'
})

var protoTwo = lottie.loadAnimation({
   container: document.getElementById('scene-2'),
   renderer: 'svg',
   loop: false,
   autoplay: true,
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

// enter fire
document.body.onkeyup = function(e){
   if(e.keyCode == 13){
       console.log("enter pressed")
       goFS();
   }
}

//space fire
document.body.onkeyup = function(e){
   if(e.keyCode == 32){
       console.log("space pressed")
       sceneChanger();
   }
}
