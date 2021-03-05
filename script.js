var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("mixed");
var randomColor = Math.floor(Math.random()*16777215).toString(16);


css.textContent = "default" +color1.value + color2.value + ";";

 function randomBackground() {
	body.style.background =  "#" + randomColor;
  color1.innerHTML = "#" + randomColor; 
  color2.innerHTML = "#" + randomColor;
  
}



function changeBackground1() {
	body.style.background = 
	"linear-gradient(to right, "
	+ color1.value 
    + "," 
	+ color2.value 
	+")";


	css.textContent = body.style.background + ";";

}

random.addEventListener("click", randomBackground);


random.addEventListener("click", randomBackground);






color1.addEventListener("input", changeBackground1);


color2.addEventListener("input", changeBackground1);

