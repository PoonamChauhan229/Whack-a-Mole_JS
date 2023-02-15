var rat1 = document.getElementById("rat1");
var rat2 = document.getElementById("rat2");
var rat3 = document.getElementById("rat3");
var rat4 = document.getElementById("rat4");
var rat5 = document.getElementById("rat5");
var rat6 = document.getElementById("rat6");
var score = document.getElementById("score");
var count = 0;
var game = document.getElementById("game");
var youWin = document.getElementById("youwin");
var sound1 = document.getElementById("sound1")
var sound2 = document.getElementById("sound2");
var youLoose=document.getElementById("youLoose");

var num=0;

let id=setInterval(function(){
    var random = (Math.floor(Math.random()*6) + 1)
    var rat = "rat" + random 
    // rat = rat1 rat2 rat3......
    var ra = eval(rat)
    sound1.play()
    ra.classList.add("animate")
    setTimeout(function(){
        ra.classList.remove("animate")
    },1000)
    ra.onclick = function(){
        count++
        sound2.play()
        score.innerText = count
    }
num++
console.log(num)
if(num==15){
    clearInterval(id)
    youLoose.style.display = "block";
    game.style.display = "none"
        sound1.pause()
}

if(count > 4){
    clearInterval(id)
    youWin.style.display = "block";
    game.style.display = "none"
    sound1.pause()
}
},1000)