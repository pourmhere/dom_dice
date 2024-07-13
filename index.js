let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomDiceImg = "dice" + randomNumber1 + ".png";
let randomImgSrc = "images/" + randomDiceImg
let img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImgSrc);




let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomDiceImg2 = "dice" + randomNumber2 + ".png";
let randomImgSrc2 = "images/" + randomDiceImg2;
let img2 = document.querySelectorAll("img")[1].setAttribute("src", randomImgSrc2);



if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🎌Play 1 Wins"
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Play 2 Wins🎌"
}

else {
    document.querySelector("h1").innerHTML = "It's a Tie"
}