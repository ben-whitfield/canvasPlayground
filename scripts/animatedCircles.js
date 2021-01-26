function updateCanvasSize(canvas) {
  var rect = canvas.parentNode.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;
}

function getCanvasSize(canvas) {
  var rect = canvas.parentNode.getBoundingClientRect();
  return {
   width: Math.floor(rect.width),
   height: Math.floor(rect.width)
  }
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


function getCanvasContext(canvas) {
  if (canvas.getContext) {
    return canvas.getContext("2d");
  }
}


function generateCircleValues(canvas) {
  const canvasSize = getCanvasSize(canvas)
  const colour = generateColour()
  return {
    x: randomNumber(0, canvasSize.width), 
    y: randomNumber(0, canvasSize.height), 
    radius: 75, 
    startAngle: 0,
    endAngle: Math.PI*2,
    antiClockwise: false,
    colour: colour
  }
}

function getCanvas() {
  return document.getElementById("target-canvas");
}

function getContext(canvas) {
  updateCanvasSize(canvas)
  return getCanvasContext(canvas)
}

function go(ctx, canvas) {
  console.log('ran')
  let params = generateCircleValues(canvas)
  drawCircle(ctx, params)  
}

function fadeOut(ctx) {
    ctx.fillStyle = "rgba(255,255,255,0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    setTimeout(fadeOut,300);
}

const canvas = getCanvas()
const ctx = getContext(canvas)
setInterval(() => go(ctx, canvas), 100);
setInterval(() => fadeOut(ctx), 300);