var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomColors = document.getElementById("random");

// display the colors that is used on page load
function pageLoad() {
	document.getElementById("gradient").onload = function(){onPageLoad()};
}
pageLoad();

function onPageLoad() {
		css.textContent = body.style.background + "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
}

//display the two colors the user selected
function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

function setRandomGradient() {
	document.getElementById("random").onclick = function(){clickRandomColor()};
}
setRandomGradient();


function clickRandomColor() {
var colorsSelector = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]
var hexNumbers = "";
var hexNumbers1 = "";
var randomOutputColor = "";
var randomOutputColor1 = "";

function getRandom1() {
	for(var i = 0; i < 6; i++){
	var randomColor = "";
	randomColor += (Math.floor(Math.random() * colorsSelector.length));
	hexNumbers = hexNumbers + colorsSelector[randomColor];
	randomOutputColor = "#" + hexNumbers;
	console.log(randomOutputColor);
	}
	return randomOutputColor;
}
getRandom1();

function getRandom2() {
	for(var i = 0; i < 6; i++){
	var randomColor1 = "";
	randomColor1 += (Math.floor(Math.random() * colorsSelector.length));
	hexNumbers1 = hexNumbers1 + colorsSelector[randomColor1];
	randomOutputColor1 = "#" + hexNumbers1;
	console.log(randomOutputColor1);
	}
	return randomOutputColor1;
}
getRandom2();

	body.style.background = "linear-gradient(to right, " + randomOutputColor + ", " + randomOutputColor1 + ")";
	css.textContent = body.style.background + ";";
}