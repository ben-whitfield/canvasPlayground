function circles(params) {
  canvas = document.getElementById("target-canvas-circles");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d"); 
    var x = params.x;
    var y = params.y;
    var radius = params.radius;
    var startAngle = params.startAngle;
    var endAngle = params.endAngle;
    var antiClockwise = params.antiClockwise;

    ctx.beginPath();
    ctx.arc(x, y, radius, startAngle, endAngle, antiClockwise);
    if(params.lineTo) ctx.lineTo(params.lineTo.x, params.lineTo.y);
    ctx.closePath();
    if(params.fillStyle) ctx.fillStyle = params.fillStyle;
    ctx.fill();
    ctx.fillStyle = 'rgb(0,0,0)'
  }
}

simpleCircle = {
  x: 75, 
  y: 75, 
  radius: 75, 
  startAngle: 0,
  endAngle: Math.PI*2,
  antiClockwise: false,
  fillStyle: 'rgb(127, 65, 35)'
}

semiCircle = {
  x: 75, 
  y: 250, 
  radius: 75, 
  startAngle: 0,
  endAngle: Math.PI,
  antiClockwise: true,
  fillStyle: 'rgb(127, 65, 100)'
}

sliceOfCircle = {
  x: 250, 
  y: 75, 
  radius: 75, 
  startAngle: 0,
  endAngle: Math.PI*1.75,
  antiClockwise: true,
  lineTo: {
    x: 250,
    y: 75
  },
  fillStyle: 'rgba(50, 65, 150, 0.5)'
}
mostOfCircle = {
  x: 250, 
  y: 250, 
  radius: 75, 
  startAngle: 0,
  endAngle: Math.PI*1.75,
  antiClockwise: false,
  lineTo: {
    x: 250,
    y: 250
  },
  fillStyle: 'rgba(50, 65, 150, 1)'
}

thirdOfCircle = {
  x: 425, 
  y: 75, 
  radius: 75, 
  startAngle: Math.PI,
  endAngle: Math.PI*1.75,
  antiClockwise: false,
  lineTo: {
    x: 425,
    y: 75
  }
}

thirdsOfCircle = {
  x: 425, 
  y: 250, 
  radius: 75, 
  startAngle: Math.PI,
  endAngle: Math.PI*1.75,
  antiClockwise: true,
  lineTo: {
    x: 425,
    y: 250
  }
}

quarterCircle = {
  x: 600, 
  y: 75, 
  radius: 75, 
  startAngle: Math.PI,
  endAngle: Math.PI*1.5,
  antiClockwise: false,
  lineTo: {
    x: 600,
    y: 75
  }
}

threequarterCircle = {
  x: 600, 
  y: 250, 
  radius: 75, 
  startAngle: Math.PI,
  endAngle: Math.PI*1.5,
  antiClockwise: true,
  lineTo: {
    x: 600,
    y: 250
  }
}

pieChartSliceOne = {
  x: 75, 
  y: 450, 
  radius: 75, 
  startAngle: 0,
  endAngle: Math.PI*1.75,
  antiClockwise: true,
  lineTo: {
    x: 75,
    y: 450
  },
  fillStyle: 'rgba(50, 65, 150, 0.5)'
}

pieChartSliceTwo = {
  x: 75, 
  y: 450, 
  radius: 75, 
  startAngle: 0,
  endAngle: Math.PI*1.75,
  antiClockwise: false,
  lineTo: {
    x: 75,
    y: 450
  },
  fillStyle: 'rgba(50, 150, 75, 0.5)'
}

pieChartWhole = {
  x: 75, 
  y: 450, 
  radius: 75, 
  startAngle: 0,
  endAngle: Math.PI*1.5,
  antiClockwise: false,
  lineTo: {
    x: 75,
    y: 450
  },
  fillStyle: 'rgba(50, 65, 150, 1)'
}

circles(simpleCircle)
circles(semiCircle)
circles(sliceOfCircle)
circles(mostOfCircle)
circles(thirdOfCircle)
circles(thirdsOfCircle)
circles(quarterCircle)
circles(threequarterCircle)
circles(pieChartSliceOne)
circles(pieChartSliceTwo)
circles(pieChartWhole)