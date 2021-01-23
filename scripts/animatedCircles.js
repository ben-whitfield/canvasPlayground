function updateCanvasSize(canvas) {
  var rect = canvas.parentNode.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;
}

function randomNumber(min, max){
  const r = Math.random()*(max-min) + min
  return Math.floor(r)
}

function generateColour() {
  return `rgba(${randomNumber(0,255)}, ${randomNumber(0,255)}, ${randomNumber(0,255)},1)`
}

function drawCircle(ctx, params) {
  ctx.beginPath();
  ctx.arc(params.x, params.y, params.radius, params.startAngle, params.endAngle, params.antiClockwise);
  if(params.lineTo) ctx.lineTo(params.lineTo.x, params.lineTo.y);
  ctx.closePath();
  ctx.fillStyle = params.colour
  ctx.fill();
}



function animatedCircles() {
  canvas = document.getElementById("target-canvas");
  updateCanvasSize(canvas)
  
  console.log(`Make colour ${generateColour()}`)
  
  if (canvas.getContext) {
    let ctx = canvas.getContext("2d"); 
    let colour = generateColour()
    const params = {
      x: 75, 
      y: 75, 
      radius: 75, 
      startAngle: 0,
      endAngle: Math.PI*2,
      antiClockwise: false,
      colour: colour
    }

    drawCircle(ctx, params)

  }
}

animatedCircles()