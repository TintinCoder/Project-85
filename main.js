//Create a reference for canvas 
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

//Give specific height and width to the car image
var car_width = 75;
var car_height = 100; 

// Images Define

var background_image = "parkingLot.jpg";
var greencar_image = "car2.png";
var bluecar_image = "car1.png";
// Image Tags
var background_imgTag; 
var greencar_imgTag;
var bluecar_imgTag;
//Set initial position for a car image.
var car_x = 5;
var car_y = 225;
var blue_car_x = 10;
var blue_car_y = 220;
function add() {
	// Background Code
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground; 
	background_imgTag.src = background_image;
	 
	// Car Code (Red)
	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadgreencar;
	greencar_imgTag.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag, car_x, car_y, car_width, car_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if (car_y >= 0) {
		car_y = car_y - 10;
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	if (car_y <= 500) {
		car_y = car_y + 10;
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	if (car_x <= 700) {
        car_x = car_x + 10;
		blue_car_x = blue_car_x + 10;
        uploadBackground();
        uploadgreencar();
    }
}

function left()
{
	if (car_x >= 0) {
		car_x = car_x - 10;
		uploadBackground();
		uploadgreencar();
	}
}
