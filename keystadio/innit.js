let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let balls=[];
let x,speedX,speedY;
let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;
let padd = new Padd(canvas.width / 2, canvas.height / 2, 40, 40,2,2);


document.addEventListener("keydown", movingPaddle);
document.addEventListener("keyup", stoppingPaddle);

for (let i=0; i<5;i++){
    x=Math.floor(Math.random()*(canvas.width-40)+40);
    speedX=Math.floor(Math.random()*4 + 1);
    speedY=Math.floor(Math.random()*4 + 1);

    let ball= new Ball(x,15,15,speedX,speedY);
    balls.push(ball);
}

drawGame();




