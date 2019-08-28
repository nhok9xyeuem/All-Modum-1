//////////////////////////////////////
// lop ve hinh tron
function Ball(x, y, radius, dx, dy) {
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
    this.x = x;
    this.y = y;

    this.getRandomHex = function () {
        return Math.floor(Math.random() * 255);
    };

    this.getRandomColor = function () {
        let red = this.getRandomHex();
        let green = this.getRandomHex();
        let blue = this.getRandomHex();
        return "rgb(" + red + "," + blue + "," + green + ")";
    };

    this.drawBall = function () {
        color = this.getRandomColor();
        this.moveBall();
        ctx.beginPath();
        ctx.arc(this.x-this.radius, this.y-this.radius, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = color;
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

    for (let i = 0; i < balls.length; i++) {
        balls[i].drawBall();
        balls[i].moveBall();
    }
}

//////////////////////////////////////////////
// / ve nhan vat padd ne
function Padd(paddX, paddY, paddWidth, paddHeight, dx, dy) {
    this.paddX = paddX;
    this.paddY = paddY;
    this.paddWidth = paddWidth;
    this.paddHeight = paddHeight;
    this.dx = dx;
    this.dy = dy;

    this.drawPadd = function () {
        ctx.beginPath();
        ctx.rect(this.paddX, this.paddY, this.paddWidth, this.paddHeight);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.closePath();
    };
    this.movingPadd = function () {

        if (rightPressed) {
            this.paddX += 5;
            if (this.paddX + this.paddWidth > canvas.width) {
                this.paddX = canvas.width - this.paddWidth;
            }
        } else if (leftPressed) {
            this.paddX -= 5;
            if (this.paddX < 0) {
                this.paddX = 0;
            }
        }
        if (upPressed) {
            this.paddY -= 5;
            if (this.paddY < 0) {
                this.paddY = 0;
            }
        } else if (downPressed) {
            this.paddY += 5;

            if (this.paddY + this.paddHeight > canvas.height) {
                this.paddY = canvas.height - this.paddHeight;
            }
        }

    };
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

/////////////////////// set su va cham giua padd voi ball/////////////
let isGameOver=false;
function gameOver() {
    for (let i = 0; i < balls.length; i++) {
        if (balls[i].x > padd.paddX && balls[i].y > padd.paddY) {
            if (balls[i].x - (padd.paddX + padd.paddWidth) <= balls[i].radius &&
                balls[i].y - (padd.paddY + padd.paddHeight) <= balls[i].radius) {
                isGameOver =true;
                // alert('Game over' + '    ' + 'Diem cua ban la :' + score);
                // window.location.reload();
            }
        }
    }
}

let starTime;

function drawGame() {
    if (!isGameOver){
        if (!starTime) {
            starTime = new Date().getTime();
        } else {
            let longTime = Math.floor((new Date().getTime() - starTime) / 1000);
            score = longTime;
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBalls();
        drawPaddle();
        gameOver();
        requestAnimationFrame(drawGame);
    }else {
        alert('Game Over\n' +' diem cua ban la :'+ score );
    }
}
