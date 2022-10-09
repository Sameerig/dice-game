var randamNumber1 = Math.round(Math.random()*5+1);
var randamNumber2 = Math.round(Math.random()*5+1);
// console.log(randamNumber);


document.querySelector("img.img1").setAttribute("src","images/dice"+[randamNumber1]+".png")
document.querySelector("img.img2").setAttribute("src","images/dice"+[randamNumber2]+".png")

if(randamNumber1>randamNumber2){
    document.querySelector("h1").innerHTML="Player 1 won"
}
else if(randamNumber1<randamNumber2){
    document.querySelector("h1").innerHTML="Player 2 won"
}
else{
    document.querySelector("h1").innerHTML="Refresh me"
}