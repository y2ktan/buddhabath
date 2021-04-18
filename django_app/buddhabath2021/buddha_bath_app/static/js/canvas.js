var canvas = document.querySelector('canvas');
var video = document.getElementById('video');
video.style.display = "none";

var ctx = canvas.getContext('2d');

var setupCanvas = function() {
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
}
setupCanvas();

window.addEventListener("load", () => {
   video.play();
});

window.addEventListener("resize", () => {
    setupCanvas();
 });

video.addEventListener('playing', function() {
    var $this = this; //cache
    (function loop() {
      if (!$this.paused && !$this.ended) {
        ctx.drawImage($this, 0, 0, canvas.width, canvas.height);
        setTimeout(loop, 1000 / 30); // drawing at 30fps
      }
    })();
}, 0);