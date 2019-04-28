console.log( "Ready" );
var heartbeat = document.getElementById('fade-in');


function startPlaying() {
  document.getElementById('player').play();



  document.getElementById('startButton').style.visibility="hidden";

  heartbeat.style.animationName = "heartRateIn";
  heartbeat.style.animationDuration = "3.5s";
  heartbeat.style.animationTimingFunction = "linear";
  heartbeat.style.animationIterationCount = "infinite";

  setTimeout(function() {
    heartbeat.style.animationDuration = "3s";
  },10000);

  setTimeout(function() {
    heartbeat.style.animationDuration = "2.5s";
  },80000);

  setTimeout(function() {
    heartbeat.style.animationDuration = "2s";
  },98000);

  setTimeout(function() {
    heartbeat.style.animationDuration = "1.5s";
  },115000);

  setTimeout(function() {
    heartbeat.style.animationDuration = "2.5s";
  },185000);

  setTimeout(function() {
    heartbeat.style.animationDuration = "3.5s";
  },214000);

  setTimeout(showImage,287000);

}

var timer_expired = true;
var image_loaded = false;
var index = 1;

function showImage() {
console.log("showimage function called");
  heartbeat.style.animationName = "heartRateIn";
  heartbeat.style.animationDuration = "3.5s";
  heartbeat.style.animationTimingFunction = "linear";
  heartbeat.style.animationIterationCount = "infinite";

  if (index != 15){
    if(timer_expired){
      image_loaded = false;
      timer_expired = false;
      document.getElementById('i' + index).style.visibility = "visible";
      setTimeout('timeout()',1000);
    }
    index++;
  }

}

function timeout() {
  timer_expired = true;
  if (image_loaded==false){
    showImage();
  }
}
