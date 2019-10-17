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





// button.addEventListener("click", function(){
//    console.log("clicked");
//    vidCont.classList.add("shrink");
//    tick.classList.add("grow");
// });

// change scene (space-bar)
// eventTarget.addEventListener("keydown", sceneChanger);
document.body.onkeyup = function(e){
   if(e.keyCode == 32){
       console.log("space pressed")
       sceneChanger();
   }
}
//
// eventTarget.addEventListener("keydown", event => {
//   if (event.isComposing || event.keyCode === 32) {
//     return;
//   }


// full screen
var goFS = document.getElementById("goFS");
goFS.addEventListener("click", function() {
    var proto = document.getElementById("proto-box");
    proto.requestFullscreen();
}, false);
