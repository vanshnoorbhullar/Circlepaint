var mouseEvent="empty";
var  last_x , last_y ;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width_of_line=2;
radius=20;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseEvent="mousedown";
color=document.getElementById("color").value;
width_of_line=document.getElementById("width_of_line").value;
radius=document.getElementById("radius").value;
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
    
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";
    
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_x=e.clientX-canvas.offsetLeft;
    current_y=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;        console.log("Last Position Of X And Y Coordinate ");
        console.log("X= "+last_x+" Y= "+last_y);
        ctx.arc(current_x,current_y,radius,0,2*Math.PI);
        console.log("Current Position Of X And Y Coordinate ");
        console.log("X= "+current_x+" Y= "+current_y);
        ctx.stroke();
        }
        last_x=current_x;
        last_y=current_y;
}
function clear_area(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height );
}