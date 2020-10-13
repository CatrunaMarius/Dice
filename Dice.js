// primul zar
var random = Math.floor(Math.random()*6)+1;//1-6
var imgRandom = "dice"+random+".png";//dice1.png - dice6.png
var source = "images/" + imgRandom;//images/dice1.png - images/dice6.png
var img1 = document.querySelectorAll("img")[0];//cauta dupa un obj pt a inlocui imaginea
img1.setAttribute("src", source);

// al doilea zar 
var random2 = Math.floor(Math.random()*6)+1;
var imgRandom2 = "dice"+random2+".png";
var source2 = "images/" + imgRandom2;
var img1 = document.querySelectorAll("img")[1];
img1.setAttribute("src", source2);

// comparatie dintre cele doua zaruri
if (random > random2){
    document.querySelector("h1").innerHTML = "Player 1 Wins"
}
else if (random < random2){
    document.querySelector("h1").innerHTML = "Player 2 Wins"
}
else {
    document.querySelector("h1").innerHTML = "Draw"
}