let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let balls=[];
let x,speedX,speedY;
for (let i=0; i<5;i++){
    x=Math.floor(Math.random()*(canvas.width-40)+40);
    speedX=Math.floor(Math.random()*5+ 1);
    speedY=Math.floor(Math.random()*4 + 1);

    let ball= new Ball(x,15,15,speedX,speedY);
    balls.push(ball);
}

function Ball(x, y, radius, dx, dy) {
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
    this.x = x;
    this.y = y;


    this.drawBall = function () {
        this.moveBall();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.closePath();
    };
    this.moveBall = function () {
        if (this.x > canvas.width - this.radius || this.x < this.radius) {
            this.dx = -this.dx;
        }
        if (this.y > canvas.height - this.radius || this.y < this.radius) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
    }

}


function drawBalls() {
ctx.clearRect(0,0,canvas.width,canvas.height);
    for (let i = 0; i < balls.length; i++) {
        balls[i].drawBall();
        balls[i].moveBall();
    }
}
// setInterval(drawBalls,60);
