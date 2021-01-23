function pill() {
  canvas = document.getElementById("target-canvas-pill");
  if (canvas.getContext) {
      var ctx = canvas.getContext("2d");
      var x1 = 75;
      var y1 = 75;
      var radius1 = 75;
      var startAngle1 = Math.PI*0.5;
      var endAngle1 = Math.PI*1.5;
      var antiClockwise1 = false;

      var x2 = 600;
      var y2 = 75;
      var radius2 = 75;
      var startAngle2 = Math.PI*1.5;
      var endAngle2 = Math.PI*0.5;
      var antiClockwise2 = false;

      ctx.beginPath();
      ctx.arc(x1, y1, radius1, startAngle1, endAngle1, antiClockwise1);
      ctx.lineTo(600, 0);
      ctx.arc(x2, y2, radius2, startAngle2, endAngle2, antiClockwise2);
      ctx.closePath();

      ctx.fill(); 
  }
}

pill()