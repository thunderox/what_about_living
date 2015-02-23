

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

		if (mx >= 394 && mx <= 440 && my >= 106 && my <= 220)
		{
			current_room_number = rooms[current_room_number].north;
			current_room_img.src = rooms[current_room_number].image_file;
			current_room_img.onload = current_room_img_loaded;
		}

		// mouse clicked up arrow to go south

		if (mx >= 396 && mx <= 440 && my >= 380 && my <= 500)
		{
			current_room_number = rooms[current_room_number].south;
			current_room_img.src = rooms[current_room_number].image_file;
			current_room_img.onload = current_room_img_loaded;
		}

		// mouse clicked up arrow to go east

		if (mx >= 674 && mx <= 796 && my >= 274 && my <= 324)
		{
			current_room_number = rooms[current_room_number].east;
			current_room_img.src = rooms[current_room_number].image_file;
			current_room_img.onload = current_room_img_loaded;
		}

		// mouse clicked up arrow to go west

		if (mx >= 32 && mx <= 149 && my >= 274 && my <= 320)
		{
			current_room_number = rooms[current_room_number].west;
			current_room_img.src = rooms[current_room_number].image_file;
			current_room_img.onload = current_room_img_loaded;
		}



		console.log(mx + " - " + my);
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
	
		show_canvas();
	}

//  --------------------- show canvas to update screen -------------------------------------------

	function current_room_img_loaded()
	{
		show_canvas();
	}






