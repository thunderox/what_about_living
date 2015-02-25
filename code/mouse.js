

//  --------------------- Mouse stuff -------------------------------------------

	var current_arrow = 0;
	var c = document.getElementById("myCanvas");

	c.addEventListener("mousedown", doMouseDown, false);
	c.addEventListener("mousemove", doMouseMove, false);



//  --------------------- Mouse down -------------------------------------------

	function doMouseDown(event)
	{
		var mx = event.pageX;
		var my = event.pageY;

		// mouse clicked up arrow to go north

		if (mx >= clickables[1].xpos && mx <= clickables[1].xpos + clickables[1].width
			&& my >= clickables[1].ypos && my <= clickables[1].ypos + clickables[1].height
				&& rooms[current_room_number].north > 0)
		{
			current_room_number = rooms[current_room_number].north;
			set_up_current_room();
			init_canvas();
		}

		// mouse clicked up arrow to go south

		if (mx >= clickables[2].xpos && mx <= clickables[2].xpos + clickables[2].width
			&& my >= clickables[2].ypos && my <= clickables[2].ypos + clickables[2].height
				&& rooms[current_room_number].south > 0)
		{
			current_room_number = rooms[current_room_number].south;
			set_up_current_room();
			init_canvas();
		}

		// mouse clicked up arrow to go east

		if (mx >= clickables[3].xpos && mx <= clickables[3].xpos + clickables[3].width
			 && my >= clickables[3].ypos && clickables[3].ypos + clickables[3].height
				&& rooms[current_room_number].east > 0)
		{
			current_room_number = rooms[current_room_number].east;
			set_up_current_room();
			init_canvas();
		}

		// mouse clicked up arrow to go west

		if (mx >= clickables[4].xpos && mx <= clickables[4].xpos + clickables[4].width
			&& my >= clickables[4].ypos && my <= clickables[4].ypos + clickables[4].height
				&& rooms[current_room_number].west > 0)
		{
			current_room_number = rooms[current_room_number].west;
			set_up_current_room();
			init_canvas();
		}
		
	}

//  --------------------- Mouse Move -------------------------------------------

	function doMouseMove(event)
	{
		var mx = event.pageX;
		var my = event.pageY;

		current_arrow = 0;

		// mouse clicked up arrow to go north

		if (mx >= 394 && mx <= 440 && my >= 106 && my <= 220)
		{
			current_arrow = 1;
		}

		// mouse clicked up arrow to go south

		if (mx >= 396 && mx <= 440 && my >= 380 && my <= 500)
		{
			current_arrow = 2;
		}

		// mouse clicked up arrow to go east

		if (mx >= 674 && mx <= 796 && my >= 274 && my <= 324)
		{
			current_arrow = 3;
		}

		// mouse clicked up arrow to go west

		if (mx >= 32 && mx <= 149 && my >= 274 && my <= 320)
		{
			current_arrow = 4;
		}

		mouse_over_object = 0;

		for (x=0; x<visible_clickables.length; ++x)
		{
			cn = visible_clickables[x];

			if (mx >= clickables[cn].xpos && mx <= clickables[cn].xpos + clickables[cn].width
				&& my >= clickables[cn].ypos && my <= clickables[cn].ypos + clickables[cn].height
					&& clickables[cn].name != "room"
						&& clickables[cn].name != "player1_panel")
			{	
				mouse_over_object = cn;	
			}
		}
		
	}





