var randomNumber1=Math.floor(Math.random()*6)+1;

var randomImg1= "images/dice"+ randomNumber1+".png";

var first_Image=document.querySelectorAll("img")[0];

first_Image.setAttribute("src",randomImg1);


var randomNumber2=Math.floor(Math.random()*6)+1;

var randomImg2= "images/dice"+ randomNumber2+".png";

var second_Image=document.querySelectorAll("img")[1];

second_Image.setAttribute("src",randomImg2);


if(randomNumber2>randomNumber1){
	document.querySelector("h1").innerHTML="Player 2 won!!";
}

if(randomNumber2<randomNumber1){
	document.querySelector("h1").innerHTML="Player 1 won!!";
}

if(randomNumber1===randomNumber2){
	document.querySelector("h1").innerHTML="It's a Draw!!";
}
