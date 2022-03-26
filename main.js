
var canvas = new fabric.Canvas("myCanvas");
var ball_x = 10;
var ball_y = 10;

var hole_y = 790;
var hole_x = 1190;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("player.png",function(img) {
        player_object = img;
        player_object.scaleToWidth("5");
        player_object.scaleToHeight("5");

        player_object.set({
            top:player_y,left:player_x
        });
        canvas.add(player_object);
    });

	new_image();
}

function new_image()
{
	fabric.Image.fromURL(get_image,function (Img) {
        block_image_object=Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);

        block_image_object.set({
            top:player_y,left:player_x
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if (condition) {
		/* Check the coordinates of the ball and hole images to finish the game. 
		And id coordinates matches them remove ball image, 
		display "GAME OVER!!!" 
		and make canvas border 'red'. */
	}
	
	else{
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
		// Write a code to move ball upward.
	}

	function down()
	{
		 // Write a code to move ball downward.
	}

	function left()
	{
		if(ball_x >5)
		{
			// Write a code to move ball left side.
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			// Write a code to move ball right side.
		}
	}
	
}

