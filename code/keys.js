
//  --------------------- Keyboard stuff -------------------------------------------

	var keys = new Array();
	var key_pressed = 1;
	var key_depressed = 2;

   	function keyDown(e)
	{
		keys[e.keyCode] = key_pressed;
		e.cancelBubble = true;
		e.returnValue = false;
   		e.stopPropagation();
    		e.preventDefault();
		return;
	}
	
	    function keyUp(e)
	{
		keys[e.keyCode] = key_depressed;
		e.cancelBubble = 2;
		e.returnValue = false;
   		e.stopPropagation();
    		e.preventDefault();
		return false;
	}

	document.onkeypress = keyDown;
	document.onkeyup = keyUp;

	function checkKeys()
	{
		if (keys[38] == key_depressed)
		{
			console.log("North!!!!!!!!!!!");
			keys[38] = 0;

			if ( rooms[current_room_number].north != 0 )
			{
				current_room_number = rooms[current_room_number].north;
				current_room_img.src = rooms[current_room_number].image_file;
				current_room_img.onload = current_room_img_loaded;
				
			}

		}

		function current_room_img_loaded()
		{
			show_canvas();
		}


		if (keys[40] == key_depressed)
		{
			console.log("South!!!!!!!!!!!");
			keys[40] = 0;

			if ( rooms[current_room_number].south != 0 )
			{
				current_room_number = rooms[current_room_number].south;
				current_room_img.src = rooms[current_room_number].image_file;
				current_room_img.onload = current_room_img_loaded;
			}
		}

		if (keys[39] == key_depressed)
		{
			console.log("East!!!!!!!!!!!");
			keys[39] = 0;

			if ( rooms[current_room_number].east != 0 )
			{
				current_room_number = rooms[current_room_number].east;
				current_room_img.src = rooms[current_room_number].image_file;
				current_room_img.onload = current_room_img_loaded;
			}
		}


		if (keys[37] == key_depressed)
		{
			console.log("West!!!!!!!!!!!");
			keys[37] = 0;

			if ( rooms[current_room_number].west != 0 )
			{
				current_room_number = rooms[current_room_number].west;
				current_room_img.src = rooms[current_room_number].image_file;
				current_room_img.onload = current_room_img_loaded;
			}
		}


	}








