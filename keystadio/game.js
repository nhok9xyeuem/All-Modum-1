function Ball(x,y,radius,dx,dy) {
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
    this.x = x;
    this.y = y;


    this.drawBall = function () {
        this.moveBall();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    };
    this.moveBall = function () {
        if (this.x > canvas.width - this.radius || this.x < this.radius) {
            this.dx = -this.dx;
        }
        if (this.y  > canvas.height - this.radius || this.y < this.radius) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
    }

}
function drawBalls() {

    for (let i=0;i<balls.length;i++){
        balls[i].drawBall();
        balls[i].moveBall();
    }
}

function Padd(paddX, paddY, paddWidth, paddHeight,dx,dy) {
    this.paddX = paddX;
    this.paddY = paddY;
    this.paddWidth = paddWidth;
    this.paddHeight = paddHeight;
    this.dx=dx;
    this.dy=dy;

    this.drawPadd = function () {
        ctx.beginPath();
        ctx.rect(this.paddX, this.paddY, this.paddWidth, this.paddHeight);
        ctx.style = "#0095DD";
        ctx.fill();
        ctx.closePath();
    };
    this.movingPadd = function () {

        if (rightPressed) {
            this.paddX += 3;
            if (this.paddX + this.paddWidth > canvas.width) {
                this.paddX = canvas.width - this.paddWidth;
            }
        } else if (leftPressed) {
            this.paddX -= 3;
            if (this.paddX < 0) {
                this.paddX = 0;
            }
        }
        if (upPressed) {
            this.paddY -= 3;
            if (this.paddY < 0) {
                this.paddY = 0;
            }
        } else if (downPressed) {
            this.paddY += 3;

            if (this.paddY + this.paddHeight > canvas.height) {
                this.paddY = canvas.height - this.paddHeight;
            }
        }

    }


}

function movingPaddle(event) {

    if (event.keyCode == 37) {

        leftPressed = true;
    } else if (event.keyCode == 38) {
        upPressed = true;
    } else if (event.keyCode == 39) {
        rightPressed = true;
    } else if (event.keyCode == 40) {
        downPressed = true;
    }
}

function stoppingPaddle(event) {
    if (event.keyCode == 37) {
        leftPressed = false;
    } else if (event.keyCode == 38) {
        upPressed = false;
    } else if (event.keyCode == 39) {
        rightPressed = false;
    } else if (event.keyCode == 40) {
        downPressed = false;
    }

}
function drawPaddle() {
    padd.drawPadd();
    padd.movingPadd();
}

function drawGame() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawBalls();
    drawPaddle();
    requestAnimationFrame(drawGame);
}
