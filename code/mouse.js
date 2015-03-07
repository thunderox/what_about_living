

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

		if (dialogue_mode == true && my > 350)
		{
			current_player_response = -1;
			if (my >= 420)
			{
				current_player_response = Math.floor((my-410) / 40);
				do_game_position();
			}
			return;
		}

		if (dialogue_mode == true && my <= 350)
		{
			dialogue_mode = false;
			return;
		}

		//---- Object dropped or given

		if (inventory_list_object_clicked != -1)
		{
			clickables[ inventory_list[inventory_list_object_clicked] ].room = current_room_number;

			var object_num = clickables[ inventory_list[inventory_list_object_clicked] ].object_number;
			objects[object_num].room = current_room_number;

			inventory_list_object_clicked = -1;
			update_inventory_list();
			init_canvas();
			return;
		}

		//---- clicked object in inventory list? 

		if ( clickables[get_clickable_number("inventory_list") ].visible == true)
		{

			inventory_list_object_clicked = -1;
			var il = clickables[get_clickable_number("inventory_list") ];
			if (mx >= il.xpos && mx <= il.xpos + il.width
				&& my >= il.ypos+(28*2) && my <= il.ypos + il.height)
			{
				inventory_list_object_clicked =  Math.floor((my-il.ypos-(28*2)) / 28);

				if (inventory_list_object_hover > inventory_list.length) { inventory_list_object_clicked = -1; }
				clickables[get_clickable_number("inventory_list") ].visible = false;

				clickables[ inventory_list[inventory_list_object_clicked] ].xpos = mx
					- (clickables[ inventory_list[inventory_list_object_clicked] ].width / 2);
				clickables[ inventory_list[inventory_list_object_clicked] ].ypos = my
					- (clickables[ inventory_list[inventory_list_object_clicked] ].height / 2);

				init_canvas();
				return;
			}

		}

		var arrow_north = get_clickable_number("arrow_north");
		var arrow_south = get_clickable_number("arrow_south");
		var arrow_east = get_clickable_number("arrow_east");
		var arrow_west = get_clickable_number("arrow_west");

		// mouse clicked up arrow to go north

		if (mx >= clickables[arrow_north].xpos && mx <= clickables[arrow_north].xpos + clickables[arrow_north].width
			&& my >= clickables[arrow_north].ypos && my <= clickables[arrow_north].ypos + clickables[arrow_north].height
				&& rooms[current_room_number].north > 0)
		{
			current_room_number = rooms[current_room_number].north;
			set_up_current_room();
			init_canvas();
			return;
		}

		// mouse clicked up arrow to go south

		if (mx >= clickables[arrow_south].xpos && mx <= clickables[arrow_south].xpos + clickables[arrow_south].width
			&& my >= clickables[arrow_south].ypos && my <= clickables[arrow_south].ypos + clickables[arrow_south].height
				&& rooms[current_room_number].south > 0)
		{
			current_room_number = rooms[current_room_number].south;
			set_up_current_room();
			init_canvas();
			return;
		}

		// mouse clicked up arrow to go east

		if (mx >= clickables[arrow_east].xpos && mx <= clickables[arrow_east].xpos + clickables[arrow_east].width
			 && my >= clickables[arrow_east].ypos && clickables[arrow_east].ypos + clickables[arrow_east].height
				&& rooms[current_room_number].east > 0)
		{
			current_room_number = rooms[current_room_number].east;
			set_up_current_room();
			init_canvas();
			return;
		}

		// mouse clicked up arrow to go west

		if (mx >= clickables[arrow_west].xpos && mx <= clickables[arrow_west].xpos + clickables[arrow_west].width
			&& my >= clickables[arrow_west].ypos && my <= clickables[arrow_west].ypos + clickables[arrow_west].height
				&& rooms[current_room_number].west > 0)
		{
			current_room_number = rooms[current_room_number].west;
			set_up_current_room();
			init_canvas();		if (dialogue_mode == true && my > 350)
		{
			current_player_response = -1;
			if (my >= 420)
			{
				current_player_response = Math.floor((my-410) / 40);
				show_canvas();
			}
			return;
		}
			return;
		}

		// clicked inventory bag?

		if (mouse_over_object == get_clickable_number("inventory_bag"))	
		{

			var id = get_clickable_number("inventory_list");
			clickables[id].visible = 1 - clickables[id].visible;
			init_canvas();
		return	
		}

		// pick up object

		if (mouse_over_object > get_clickable_number("player1_panel")
			&& inventory_list.length < 8
			&& clickables[mouse_over_object].type != 1)	
		{
			clickables[mouse_over_object].room = -1;
			update_inventory_list();
			set_up_current_room();
			init_canvas();
			return	
		}

		// talk with character

		if (mouse_over_object > get_clickable_number("player1_panel")
			&& clickables[mouse_over_object].type == 1)	
		{
			dialogue_mode = true;
			current_character = clickables[mouse_over_object].character_number;
			show_canvas();
			return	
		}


		
	}

//  --------------------- Mouse Move -------------------------------------------

	function doMouseMove(event)
	{
		var mx = event.pageX;
		var my = event.pageY;

		if (dialogue_mode == true && my > 350)
		{
			current_player_response = -1;
			if (my >= 420)
			{
				current_player_response = Math.floor((my-410) / 40);
				show_canvas();
			}
			return;
		}

		//---- Object is to be dropped or given

		if (inventory_list_object_clicked != -1)
		{
			clickables[ inventory_list[inventory_list_object_clicked] ].xpos = mx
				- (clickables[ inventory_list[inventory_list_object_clicked] ].width / 2);
			clickables[ inventory_list[inventory_list_object_clicked] ].ypos = my
				- (clickables[ inventory_list[inventory_list_object_clicked] ].height / 2);

			show_canvas();
			return;
		}

		//---- show inventory if list open

		if ( clickables[get_clickable_number("inventory_list") ].visible == true)
		{
			inventory_list_object_hover = -1;

			var il = clickables[get_clickable_number("inventory_list") ];
			if (mx >= il.xpos && mx <= il.xpos + il.width
				&& my >= il.ypos+(28*2) && my <= il.ypos + il.height)
			{
				inventory_list_object_hover =  Math.floor((my-il.ypos-(28*2)) / 28);

				if (inventory_list_object_hover > inventory_list.length) { inventory_list_object_hover = -1; }

				return;

			}

		}

		current_arrow = 0;

		// mouse hovered up arrow to go north

		if (mx >= clickables[1].xpos && mx <= clickables[1].xpos + clickables[1].width
			&& my >= clickables[1].ypos && my <= clickables[1].ypos + clickables[1].height
				&& rooms[current_room_number].north > 0)
		{
			current_arrow = 1;
		}

		// mouse hovered up arrow to go south

		if (mx >= clickables[2].xpos && mx <= clickables[2].xpos + clickables[2].width
			&& my >= clickables[2].ypos && my <= clickables[2].ypos + clickables[2].height
				&& rooms[current_room_number].south > 0)
		{
			current_arrow = 2;
		}

		// mouse hovered up arrow to go east

		if (mx >= clickables[3].xpos && mx <= clickables[3].xpos + clickables[3].width
			 && my >= clickables[3].ypos && clickables[3].ypos + clickables[3].height
				&& rooms[current_room_number].east > 0)
		{
			current_arrow = 3;
		}

		// mouse hovered up arrow to go west

		if (mx >= clickables[4].xpos && mx <= clickables[4].xpos + clickables[4].width
			&& my >= clickables[4].ypos && my <= clickables[4].ypos + clickables[4].height
				&& rooms[current_room_number].west > 0)
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





