function brickBreaker() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext('2d');
    var x = canvas.width / 2; //top
    var y = canvas.height - 30; //top

    var dx = 4; //top Hareket
    var dy = -4; //top Hareket

    var ballRadius = 10;

    var paddleHeight = 15;
    var paddleWidth = 75;
    var paddleHeight2 = 15;
    var paddleWidth2 = 75;
    var paddleX = (canvas.width - paddleWidth) / 2;
    var paddleX2 = (canvas.width - paddleWidth) / 2;


 
    
    var paddleDx = 7;
    var paddleDx2 = 7;

    
   function start(){
        document.getElementById("naber8").addEventListener('click',function(){
            
            
            
            document.getElementById("naber7").style.display="none";
        });
        x += dx;
        y += dy;
    };

    var tus = {};

    addEventListener('keydown', function (ev) {
        tus[ev.keyCode] = true;
    });
    addEventListener('keyup', function (event) {
        delete tus[event.keyCode];
    });

    function showGoMenu() {
        var menu = document.getElementById("gameOverMenu2");
        menu.style.zIndex = 1;
        menu.style.visibility = "visible";
        var hr=document.getElementById("hr1");
        hr.style.display="block";

        var menu3 = document.getElementById("gameOverMenu4");
        menu3.style.zIndex = 1;
        menu3.style.visibility = "visible";
        
        

        var scoreText = document.getElementById("go_score");
        scoreText.innerHTML = "You scored " + score + " points!";
       
                
    }
    function showGoMenu1() {
        var menu2 = document.getElementById("gameOverMenu");
        menu2.style.zIndex = 1;
        menu2.style.visibility = "visible";
        var hr1=document.getElementById("hr2");
        hr1.style.display="block";
        

        var menu4 = document.getElementById("gameOverMenu3");
        menu4.style.zIndex = 1;
        menu4.style.visibility = "visible";

        var scoreText = document.getElementById("go_score");
        scoreText.innerHTML = "You scored " + score + " points!";
       
                
    }
    // function showLoser1() {
    //     var menu3 = document.getElementById("gameOverMenu4");
    //     menu3.style.zIndex = 1;

    //     menu3.style.visibility = "visible";

    //     var scoreText = document.getElementById("go_score");
    //     scoreText.innerHTML = "You scored " + score + " points!";
    // } function showLoser2() {
    //     var menu4 = document.getElementById("gameOverMenu3");
    //     menu4.style.zIndex = 1;

    //     menu4.style.visibility = "visible";

    //     var scoreText = document.getElementById("go_score");
    //     scoreText.innerHTML = "You scored " + score + " points!";
    // }

    // function keyDownHandler(e) {
    //     if (e.keyCode == 39) {
    //         rightPressed = true;
    //     }
    //     else if (e.keyCode == 37) {
    //         leftPressed = true;
    //     }
    //     else if (e.keyCode == 65) {
    //         leftPressed2 = true;
    //     }
    //     else if (e.keyCode == 68) {
    //         rightPressed2 = true;
    //     }
    // }
    // function keyUpHandler(e) {
    //     if (e.keyCode == 39) {
    //         rightPressed = false;
    //     }
    //     else if (e.keyCode == 37) {
    //         leftPressed = false;
    //     }
    //     else if (e.keyCode == 65) {
    //         leftPressed2 = false;
    //     }
    //     else if (e.keyCode == 68) {
    //         rightPressed2 = false;
    //     }
    // }




    drawPaddle = function () {
        ctx.beginPath();
        ctx.rect(paddleX, 580, paddleWidth, paddleHeight);
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.closePath();
    };
    drawPaddle2 = function () {
        ctx.beginPath();
        ctx.rect(paddleX2, 10, paddleWidth2, paddleHeight2);
        ctx.fillStyle = "yellow";
        ctx.fill();
        ctx.closePath();
    };
    drawBall = function () {
        ctx.beginPath();
        ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.closePath();
    };
    draw = function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBall();
        drawPaddle();
        drawPaddle2();
        //Stuff
        if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
            dx = -dx;
        }
        // paddle a çarparsa yön değişiyor.
        if ((y + dy < ballRadius ||
            (
                y + dy > canvas.height - paddleHeight - ballRadius &&
                x + dx > paddleX &&
                x + dx > paddleX &&
                x + dx < paddleX + paddleWidth
            )) || (y + dy < ballRadius ||
                (
                    y + dy < 10 + paddleHeight2 + ballRadius &&
                    x + dx > paddleX2 &&
                    x + dx > paddleX2 &&
                    x + dx < paddleX2 + paddleWidth2
                ))
        ) {
            dy = -dy;
        } else if (y + dy > canvas.height || y + dx < 20) {
            if (y + dx < 20) {
               
                document.getElementById("naber3").addEventListener('click',function (){
                    location.reload();
                    alert("naber3");
                });
                showGoMenu();
               
            }
            else if (y + dy > canvas.height) {
                
                document.getElementById("naber4").addEventListener('click',function (){
                    location.reload();
                    alert("naber4");
                });
                showGoMenu1();
            
            }
           

        }
        ;
        if (tus[68] && (paddleX2 + paddleWidth2) < canvas.width) {

            paddleX2 += paddleDx2;

        } else if (tus[39] && (paddleX + paddleWidth) < canvas.width) {
            paddleX += paddleDx;
        }
        else if (tus[65] && paddleX2 > 0) {

            paddleX2 -= paddleDx2;
        }
        else if (tus[37] && paddleX > 0) {
            paddleX -= paddleDx;
        }
        start();
        requestAnimationFrame(draw);
    };
    requestAnimationFrame(draw);
}

brickBreaker();