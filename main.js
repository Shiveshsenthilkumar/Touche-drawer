
var last_Position_Of_x,last_Position_Of_y;

var width=screen.width;

new_width=screen.width-70;
new_height=screen.height-300;

if (width < 992)
{ 
   document.getElementById("myCanvas").width = new_width;
   document.getElementById("myCanvas").height = new_height;
   document.body.style.overflow="hidden";
}

canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
color ="black";
width_of_line="2";

canvas.addEventListener("touchstart" , my_touchstart);

function my_touchstart(e)
{ 
   console.log("my touche start")
   color = document.getElementById("color").value;
   width_of_line = document.getElementById("width_of_line").value;
   last_Position_Of_x = e.touches[0].clientX- canvas.offsetLeft;
   last_Position_Of_y = e.touches[0].clientY - canvas.offsetTop; 
}


canvas.addEventListener("touchemove" , my_touchemove);

function my_touchemove(e)
{
    current_position_of_x= e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_y= e.touches[0].clientY - canvas.offsetTop;

    

      ctx.beginPath();
      ctx.strokeStyle= color;
      ctx.lineWidth= width_of_line;


    console.log("Last position of x and y coordinates = ");
    console.log("x = "+ current_position_of_x + "y = " + current_position_of_y);
    ctx.moveTo(last_Position_Of_x, last_Position_Of_y);
 
    console.log("Last position of x and y coordinates = ");
    console.log("x ="+ current_position_of_x + "y = " + current_position_of_y);
    ctx.lineTo(current_position_of_x, current_position_of_y);
    ctx.stroke();
    
    
  
    last_Position_Of_x =current_position_of_x;
    last_Position_Of_y =current_position_of_y;

}



function clear(){

ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);

}