var Canvas=document.getElementById("myCanvas")
var color="red"
ctx=Canvas.getContext("2d")
ctx.beginPath()
ctx.strokeStyle=color
ctx.lineWidth=2
ctx.arc(100,100,40,0,2*Math.PI)
ctx.stroke()
ctx.beginPath()
ctx.strokeStyle="orange"
ctx.lineWidth=2
ctx.arc(175,100,40,0,2*Math.PI)
ctx.stroke()
ctx.beginPath()
ctx.strokeStyle="blue"
ctx.lineWidth=2
ctx.arc(250,100,40,0,2*Math.PI)
ctx.stroke()
ctx.beginPath()
ctx.strokeStyle="green"
ctx.lineWidth=2
ctx.arc(150,135,40,0,2*Math.PI)
ctx.stroke()
ctx.beginPath()
ctx.strokeStyle="blue"
ctx.lineWidth=2
ctx.arc(200,135,40,0,2*Math.PI)
ctx.stroke()