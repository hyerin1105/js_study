


const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d'); // ctx : 연필같은 존재

let score = 0; // score가 계속 늘어나야 하니까 const 아니고 let

const brickRowCount = 9;
const brickColumnCount = 5;

// create ball props
const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    size: 10,
    speed: 5,
    // For diagonal moving, move 4 x, -4 y
    // dx: 4,
    // dy: -4
};
ball.dx = ball.speed;
ball.dy = -ball.speed;

// Draw paddle props
const paddle = {
    x: canvas.width / 2 - 40,
    y: canvas.height - 20,
    w: 80,
    h: 10,
    speed: 8,
    // Can't move itself
    dx: 0
    // no 'dy' because only moving on x axis
}

// Create brick props
const brickInfo = {
    w: 70,
    h: 20,
    padding: 10,
    offsetX: 45,
    offsetY: 60,
    visible: true // 공과 부딪히지 않은 상태에서는 블럭이 보임.
}

// Create bricks
const bricks = [];
for (let i = 0; i < brickRowCount; ++i) {
    bricks[i] = [];
    for (let j = 0; j < brickColumnCount; ++j) {
        const x = i * (brickInfo.w + brickInfo.padding) + brickInfo.offsetX;
        const y = j * (brickInfo.h + brickInfo.padding) + brickInfo.offsetY;
        bricks[i][j] = { x, y, ...brickInfo };
    }
}

// Draw ball on canvas
function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2);
    ctx.fillStyle = '#0095DD';
    ctx.fill();
    ctx.closePath();
}

// Draw paddle on canvas
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddle.x, paddle.y, paddle.w, paddle.h);
    ctx.fillStyle = '#0095DD';
    ctx.fill();
    ctx.closePath();
}

// Draw score on canvas
function drawScore() {
    ctx.font = '20px Arial';
    ctx. fillText(`Score: ${score}`, canvas.width - 100, 30);
}

// Draw brickson canvas
function drawBricks() {
    bricks.forEach(colunm => {
        colunm.forEach(brick => {
            ctx.beginPath();
            ctx.rect(brick.x, brick.y, brick.w, brick.h);
            ctx.fillStyle = brick.visible ? '#0095DD' : 'transparent';
            ctx.fill();
            ctx.closePath();
        })
    })
}

// Move paddle on canvas
function movePaddle() {
    paddle.x += paddle.dx;
    
    // Wall detection
    if (padding.x + paddle.w > canvas.width) {
        paddle.x = canvas.width - paddle.w;
    }

    if (paddle.x < 0) {
        paddle.x = 0;
    }
}

// Move ball on canvas
function moveBall() {
    ball.x += ball.dx;
    ball.y += ball.dy;

    // Wall collision (right/left)
    if (ball.x + ball.size > canvas.width || ball.x - ball.size < 0) {
        ball.dx *= -1;
    }

    // Wall collision (top/bottom)
    if (ball.y - ball.size > canvas.height || ball.y - ball.size < 0) {
        ball.dy *= -1;
    }

    // Paddle collision
    if (ball.x - ball.size > paddle.x && ball.x + ball.size < paddle.x + paddle.w && ball.y + ball.size > paddle.y) {
        ball.dy = -ball.speed;
        // ball.dy *= -1;
    }

    // Brick collision
    bricks.forEach(colunm => {
        colunm.forEach(brick => {
            if (brick.visible) {
                if (ball.x - ball.size > brick.x &&
                    ball.x + ball.size < brick.x + brick.w &&
                    ball.y + ball.size > brick.y &&
                    ball.y - ball.size < brick.y + brick.h
                ) {
                    ball.dy *= -1;
                    brick.visible = false;

                    increaseScore();
                }
            }
        })
    });

    // Hit bottom wall - Lose
    if (ball.y + ball.size > canvas.height) {
        showAllBricks();
        score = 0;
    }
}

// Draw everything
function draw() {
    //Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawBall();
    drawPaddle();
    drawScore();
    drawBricks();
}

// Increase score
function increaseScore() {
    ++score;

    if (score % (brickRowCount * brickColumnCount) === 0) {
        showAllBricks();
    }
}

// Make all bricks appear
function showAllBricks() {
    bricks.forEach(colunm => {
        colunm.forEach(brick => {
            brick.visible = true;
        })
    })
}

// Update canvas drawing and animation
function Update() {
    movePaddle();
    moveBall();

    // Draw everything
    draw();

    requestAnimationFrame(update);
}

update();

// Keydown event
function keydown(e) {
    if (e.key === 'Right' || e.key === 'ArrowRight') {
        paddle.dx = paddle.speed;
    } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
        paddle.dx = -paddle.speed;
    }
}

// Keyup event
function keyUp(e) {
    if (e.key === 'Right' || e.key === 'ArrowRight' ||
        e.key === 'Left' || e.key === 'ArrowLeft') {
            paddle.dx = 0;
    }
}

// Keyboard event handlers
document.addEventListener('keydown', keydown);
document.addEventListener('keyup', keyup);