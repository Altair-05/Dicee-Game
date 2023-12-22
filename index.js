// var randomNumber1=Math.floor(Math.random()*6 +1);
// // console.log(randomNumber1);
// var src="images/dice"+randomNumber1+".png";
// img1.setAttribute("src",src);
// above part is optional
var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var src1 = "images/dice" + randomNumber1 + ".png";
var imgElements1 = document.querySelectorAll("img")[0];
imgElements1.setAttribute("src",src1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var src2 = "images/dice" + randomNumber2 + ".png";
var imgElements2 = document.getElementsByClassName('img2');
for (var i = 0; i < imgElements2.length; i++) {
  imgElements2[i].setAttribute("src", src2);
}
if(randomNumber1 >randomNumber2){
    var a=document.querySelector("h1");
    a.innerHTML="🚩Player 1 Wins"

}
else if (randomNumber1 <randomNumber2) {
    var b=document.querySelector("h1");
    b.innerHTML="Player 2 Wins 🚩"
    
}
else if(randomNumber1 ===randomNumber2){
    var c=document.querySelector("h1");
    c.innerHTML="Tie⚖"

}