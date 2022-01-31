// for first image
var randomNumber1=Math.floor(Math.random()*6)+1;
var randomimagesource="dice"+randomNumber1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimagesource);
// for second image
var random2=Math.floor(Math.random()*6)+1;
var randomsource="dice"+random2+".png";
var imag2=document.querySelectorAll("img")[1];
imag2.setAttribute("src",randomsource);

if(randomNumber1>random2){
    document.querySelector("h1").innerHTML="🚩 PLAYER 1 WINS!";
}
else if(randomNumber1<random2){
    document.querySelector("h1").innerHTML="🚩 PLAYER 2 WINS!";
}
else{
    document.querySelector("h1").innerHTML=" DRAW";
}