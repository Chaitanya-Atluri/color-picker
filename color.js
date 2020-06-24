var colors=[];
var numSquares=6;
var pickedColor;

var squares = document.querySelectorAll(".square");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var mode = document.querySelectorAll(".mode");
var colorDisplay = document.getElementById("rgbColor");
var reset = document.getElementById("reset");
init();

function init()
{
	modeButtonListener();
	squaresSetup()
	resets();

}

function modeButtonListener()
{
	//mode button event listeners
	for(var i=0; i<mode.length;i++)
{
	mode[i].addEventListener("click",function(){
		mode[0].classList.remove("selected");
		mode[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent===mode[0].textContent ? numSquares=3 : numSquares=6;
		resets();
	})
}
}

function squaresSetup()
{
	//adding event listeners for squares
for(var i = 0; i < squares.length ; i++)
{
	//add colors to squares
	squares[i].style.backgroundColor=colors[i];
	//add event listeners
	squares[i].addEventListener("click",function(){
		//get color of item clicked
		var clickedColor=this.style.backgroundColor;
		if(clickedColor===pickedColor)
		{
			message.textContent="correct";
			changeColor(clickedColor);
			//CHANGE NEW COLORS TO PLAY AGAIN
			reset.textContent="Play Again!";
		}
		else
		{
			this.style.backgroundColor = "#232323"
			message.textContent="Try Again!!!";
		}
	})
}
}

function resets()
{
	reset.textContent="NewColors";

	//generate all new colors
	colors=generateRandomColors(numSquares);
	//pick a new color
	pickedColor=pickColor();
	//change colordisplay to match color
	colorDisplay.textContent=pickedColor;
	//change color of squares
	for(var i = 0; i < squares.length ; i++)
	{
		if(colors[i])
		{
				squares[i].style.display="block";
				squares[i].style.backgroundColor=colors[i];

		}
		else
		{
			squares[i].style.display="none";
		}
	}

	//reset h1 color
	h1.style.backgroundColor = "steelblue"
		message.textContent="";



}

reset.addEventListener("click",function(){
	//CHANGE BACK PLAY AGAIN TO NEWCOLOR
	reset.textContent="NewColors";
	resets();
	h1.style.backgroundColor = "steelblue"
		message.textContent="";


})



function changeColor(color)
{
	//loop through all colors and set to final color
	for(var i = 0; i < squares.length ; i++)
{
	//add colors to squares
	squares[i].style.backgroundColor=color;
}
	h1.style.backgroundColor= color;

}

function pickColor()
{
	var squareId=Math.floor(Math.random()*colors.length);
	return colors[squareId];
}

function generateRandomColors(num)
{
	//make an array
	var arr = []
	//add num random colors to array
	for(var i = 0; i < num; i++)
	{
		arr.push(randomColor());
	}
	//return array
	return arr;
}


function randomColor()
{
	var col;
	//pick red from 0 to 255
	var red=Math.floor(Math.random()*256);

	//pick green from 0 to 255
	var green=Math.floor(Math.random()*256);

	//pick blue from 0 to 255
	var blue=Math.floor(Math.random()*256);
	col="rgb("+red+", "+blue+", "+green+")";
	return col;
}