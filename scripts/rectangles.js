
function rectangles() {	
  var canvas = document.getElementById("target-canvas-rectangles");
  if (canvas.getContext) {
      var ctx = canvas.getContext("2d"); 
      // layer 1
      ctx.strokeRect (75, 75, 150, 150);
      ctx.strokeRect (225, 75, 150, 150);
      ctx.strokeRect (75, 225, 150, 150);
      ctx.strokeRect (225, 225, 150, 150);
      // layer 2
      ctx.fillRect (50, 50, 150, 150);
      ctx.fillRect (250, 50, 150, 150);
      ctx.fillRect (50, 250, 150, 150);
      ctx.fillRect (250, 250, 150, 150);
      // layer 3
      ctx.strokeRect (25, 25, 150, 150);  
      ctx.strokeRect (275, 25, 150, 150);
      ctx.strokeRect (25, 275, 150, 150);  
      ctx.strokeRect (275, 275, 150, 150);
      // layer 4
      ctx.fillRect (0, 0, 150, 150); 
      ctx.fillRect (300, 0, 150, 150); 
      ctx.fillRect (0, 300, 150, 150); 
      ctx.fillRect (300, 300, 150, 150); 
      // Cut outs
      ctx.clearRect (50, 50, 100, 100);
      ctx.clearRect (300, 50, 100, 100);
      ctx.clearRect (50, 300, 100, 100);
      ctx.clearRect (300, 300, 100, 100);
  }
}

rectangles()