alert("Please Press 'OK' to start");
var obstacle = document.getElementById("obstacle");
var holepassthrough = document.getElementById("holepassthrough");
var bird = document.getElementById("bird");
var jumping = 0;
var counter = 0;

holepassthrough.addEventListener('animationiteration', () => {
    var random = -((Math.random()*300)+150);
    holepassthrough.style.top = random + "px";
    counter++;
});
setInterval(function(){
    var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    if(jumping==0){
        bird.style.top = (birdTop+3)+"px";
    }
    var obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left")); // If you are reading this, you are Awesome.
    var holepassthroughTop = parseInt(window.getComputedStyle(holepassthrough).getPropertyValue("top"));
    var cTop = -(500-birdTop);
    if((birdTop>480)||((obstacleLeft<20)&&(obstacleLeft>-50)&&((cTop<holepassthroughTop)||(cTop>holepassthroughTop+130)))){
        alert("Game over. Score: "+(counter-1));
        bird.style.top = 100 + "px";
        counter=0;
    }
},10);

function jump(){
    jumping = 1;
    let jumpCount = 0;
    var jumpInterval = setInterval(function(){
        var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
        if((birdTop>6)&&(jumpCount<15)){
            bird.style.top = (birdTop-5)+"px";
        }
        if(jumpCount>20){
            clearInterval(jumpInterval);
            jumping=0;
            jumpCount=0;
        }
        jumpCount++;
    },10);
}