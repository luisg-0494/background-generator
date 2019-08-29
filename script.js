var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var but = document.getElementById("loquillo");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

//funcion que retorna un valor entre 1 y 255
function random(){
	return Math.floor((Math.random() * 255) + 1);
}

//Funcion para transformar un numero entero a Hexadecimal
function toHex(number){
	var str;
	if (number < 16) 
		str = "0"+ number.toString(16);
	else 
		str = number.toString(16);

	return str;
}

function ColoresRandom(){
	var red   = random();
	var blue  = random();
	var green = random();

	color1.value = "#" + toHex(red) + toHex(blue) +toHex(green);

	red   = random();
	blue  = random();
	green = random();
	color2.value = "#" + toHex(red) + toHex(blue) +toHex(green);
    setGradient();
}


window.body.onload = setGradient;

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

but.addEventListener("click", ColoresRandom);