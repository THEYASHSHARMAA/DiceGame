var randomNumber1 = Math.floor(Math.random()*6)+1;//1-6 no.
var randomDiceImage = "dice" + randomNumber1 +".png";//dice1-6.png
var randomImageSrc = "images/" +randomDiceImage;//images/dice1-6.png

document.querySelectorAll("img")[0].setAttribute("src",randomImageSrc);
// src koi inner html nhi h ye ek attribute toh uske liye hmne ye aise use kiya h  

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImage2 = "dice" + randomNumber2 +".png";
var randomImageSrc2 = "images/" +randomDiceImage2;

document.querySelectorAll("img")[1].setAttribute("src",randomImageSrc2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins!🚩";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}