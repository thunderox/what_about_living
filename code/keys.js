
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
			keys[38] = 0;

			if ( rooms[current_room_number].north != 0 )
			{
				current_room_number = rooms[current_room_number].north;
				set_up_current_room();
				init_canvas();		
			}

		}

		function current_room_img_loaded()
		{
			show_canvas();
		}


		if (keys[40] == key_depressed)
		{
			keys[40] = 0;

			if ( rooms[current_room_number].south != 0 )
			{
				current_room_number = rooms[current_room_number].south;
				set_up_current_room();
				init_canvas();
			}
		}

		if (keys[39] == key_depressed)
		{
			keys[39] = 0;

			if ( rooms[current_room_number].east != 0 )
			{
				current_room_number = rooms[current_room_number].east;
				set_up_current_room();
				init_canvas();
			}
		}


		if (keys[37] == key_depressed)
		{
			keys[37] = 0;

			if ( rooms[current_room_number].west != 0 )
			{
				current_room_number = rooms[current_room_number].west;
				set_up_current_room();
				init_canvas();
			}
		}


	}








