var canvas = document.createElement("canvas");
canvas.height = 620;//520
canvas.width = 480;//670

var button = document.createElement("input");

var sayac = 10;


document.body.appendChild(button);

var score = 0;



button.type = "button"
button.style.position = "relative";
button.style.left = "250px"
button.style.top = "250px";
button.value = "Next Level"
button.style.fontSize = "2em";
button.style.display = "none"


var ctx = canvas.getContext("2d");
document.body.appendChild(canvas);

var area = new Image();
area.src = "images/bg.png";


var mini = new Image();
mini.src = "images/taban.png";

var star = new Image();
star.src = "images/taban.png";

var ball = new Image();
ball.src = "images/ball.png";




var tus = {};

addEventListener('keydown', function (ev) {
    tus[ev.keyCode] = true;
});
addEventListener('keyup', function (event) {
    delete tus[event.keyCode];
});

var starPosX = (canvas.width / 2)-35;
var starPosY = canvas.height - 12;

var dx = 2;
var dy= 2;



const hizAyari=null;
const HizAyari2 = null;
const HizAyari3=null;
const HizAyari4=null;
var ballH = {
    
};

var starH = {
   hizAyari : 5
};

var miniH = {
    HizAyari2 : 5
};

var koordinat = function () {
    starH.x = starPosX-5; //başlangıç koordinatını giriyoruz.
    starH.y = starPosY;
    
    ballH.x = canvas.width/2;
    ballH.y= canvas.height-600;

    miniH.x = starPosX-5;
    miniH.y = 0;
    
};
var timerInterval = null;

function startTimer() {
    sayac=10;
    timerInterval = setInterval(function () {
        if (sayac >= 1) {
            sayac--;
        }
    }, 1000);
  }

var geri = function(){
        
    ballH.y -= ballH.HizAyari3;
}

var hareket = function () {
 
if(ballH.x <= 0 || ballH.x > 445){
    dx = -dx;
}
    //yukarı
    if (38 in tus && starH.y > 7) {
        
    };
    //aşağı
    if (40 in tus && starH.y < 545) {
       
    };
    //sola
    if (37 in tus && starH.x > 4) {
        starH.x -= starH.hizAyari;
    };
    //sağa
    if (39 in tus && starH.x < 386) {
        starH.x += starH.hizAyari;
    };
    if (65 in tus && miniH.x > 4) {
        miniH.x -= miniH.HizAyari2;
    };
    if (68 in tus && miniH.x < 386) {
        miniH.x += miniH.HizAyari2;
    };
    if ((starH.x  > (ballH.x ) && starH.y <= (ballH.y + 20) ) ) {
        score = score + 10;
        dy = -dy
    }
    if(ballH.y <10){
        dy=-dy;
    }


};


function showGameOver() {
    ctx.font = "30px Tahoma";
    ctx.fillStyle = "white";
    ctx.fillText("Game Over", 250, 200);
    ctx.fillText(score, 390, 30);
}

function showOnload() {
    ctx.font = "30px Tahoma";
    ctx.fillStyle = "white";
    ctx.fillText("SCORE:", 500, 30);
    ctx.fillText(score, 615, 30);
}
function Timer() {
    ctx.font = "30px Tahoma";
    ctx.fillStyle = "white";
    ctx.fillText("TIME:", 10, 30);
    ctx.fillText(sayac, 100, 30);
}

function showOnFinish() {
    button.value = "Next Level";
    button.style.display = "block";
}

var ciz = function () {

    ctx.drawImage(area, 0, 0);
    ctx.drawImage(mini, miniH.x, miniH.y);
    ctx.drawImage(star, starH.x, starH.y);
    ctx.drawImage(ball,ballH.x,ballH.y)
    showOnload();
    Timer();
};

var enSon = function () {
        hareket();
        ciz();
        requestAnimationFrame(enSon);
    
    ballH.x += dx;
    ballH.y += dy; 
};

koordinat();
enSon();
startTimer();
