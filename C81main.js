canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
color = "red";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 40, 0, 360);
ctx.stroke();

canvas.addEventListener("mousedown", mousedown);

function mousedown(e) {
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;

    console.log("X = " + mouse_x + " ,Y = " + mouse_y);
    circle(mouse_x, mouse_y);
}

function circle(X_pos, Y_pos) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(X_pos, Y_pos, 40, 0, 2 * Math.PI);
    ctx.stroke();
}