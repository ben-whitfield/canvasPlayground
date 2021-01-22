function circles() {
  canvas = document.getElementById("target-canvas-circles");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d"); 
    var x = 75;
    var y = 75;
    var radius = 75;
    var startAngle = 0;
    var endAngle = Math.PI*2;
    var antiClockwise = false;

    ctx.beginPath();
    ctx.arc(x, y, radius, startAngle, endAngle, antiClockwise);
    ctx.closePath();

    ctx.fill();  
  }
}

circles()