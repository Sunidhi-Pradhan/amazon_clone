var randomNumber1 = Math.floor(Math.random()*6)+1 ;
console.log(randomNumber1);

var randomeDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/"+ randomeDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);


var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if(randomNumber1>randomNumber2){
    // console.log("player 1 is win");
    document.write("playr 1 win");
}else if(randomNumber1==randomNumber2){
    // console.log("DRAW");
    document.write("DRAW");
} else{
    // console.log("player 2 is win");
    document.write("playr 2 win");
}