


// -------------------- Game clickables - things that appear in the game you can click the mouse on -----------------------
// -------------------- Example: Navigation controls, Characters, Objects                           -----------------------

	function clickable() { ; }
	var clickables = [];
	var number_of_clickables = 0;

	var visible_clickables = [];
	var inventory_list = [];

// --------------------- Add new clickable -------------------------------------

	function add_clickable(name, image_name, xpos, ypos)
	{	
		clickables[number_of_clickables] = new clickable;
		clickables[number_of_clickables].name = name;
		clickables[number_of_clickables].xpos = xpos;
		clickables[number_of_clickables].ypos = ypos;
		clickables[number_of_clickables].image_name = image_name;
		clickables[number_of_clickables].image = new Image();
		clickables[number_of_clickables].image.src = image_name;
		clickables[number_of_clickables].clicked = false;
		clickables[number_of_clickables].mouseover = false;
		clickables[number_of_clickables].persist = false;
		clickables[number_of_clickables].visible = true;
		clickables[number_of_clickables].type = 0;
		
		number_of_clickables++;

		return number_of_clickables - 1;	
	}

// --------------------- Display clickable identified by name --------------------

	function show_clickable(ctx, name)
	{
		for (x=0; x<number_of_clickables; ++x)
		{
			if ( clickables[x].name == name )
			{
				ctx.drawImage ( clickables[x].image, clickables[x].xpos, clickables[x].ypos );
			}
		}
	}

//---------------------- Set description by name ---------------------------------

	function set_clickable_description (name, description)
	{
		for (x=0; x<number_of_clickables; ++x)
		{
			if ( clickables[x].name == name )
			{
				clickables[x].description = description;
			}
		}
	}

// --------------------- Return image of clickable by name -----------------------

	function get_clickable_image(name)
	{
		for (x=0; x<number_of_clickables; ++x)
		{
			if ( clickables[x].name == name )
			{
				return clickables[x].image;
			}
		}
	}

// --------------------- Return ID number by name -----------------------

	function get_clickable_number(name)
	{
		for (x=0; x<number_of_clickables; ++x)
		{
			if ( clickables[x].name == name )
			{
				return x;
			}
		}
	}

// --------------------- Set persistency by name ---------------------------------

	function set_clickable_persistency(name, persistency)
	{
		for (x=0; x<number_of_clickables; ++x)
		{
			if ( clickables[x].name == name )
			{
				clickables[x].persist = persistency;
			}
		}
	}

// --------------------- Set visibility by name ---------------------------------

	function set_clickable_visibility(name, visibility)
	{
		for (x=0; x<number_of_clickables; ++x)
		{
			if ( clickables[x].name == name )
			{
				clickables[x].visible = visibility;
			}
		}
	}

//------------------- Update list of visible clickables --------------------------

	function update_visible_clickables_list()
	{
		visible_clickables.length = 0;
		visible_clickables = [];
		for (x=0; x<number_of_clickables; ++x)
		{
			if ( clickables[x].room == current_room_number || 	
				clickables[x].persist == true ||
				x == inventory_list[inventory_list_object_clicked] )
			{
				 if (clickables[x].visible == true) { visible_clickables.push(x); }	
			}
		}
	}


//------------------- Update list of clickables you are carrying --------------------------

	function update_inventory_list()
	{
		inventory_list.length = 0;
		inventory_list = [];
		for (x=0; x<number_of_clickables; ++x)
		{
			if ( clickables[x].room == -1)
			{
				inventory_list.push(x);	
			}
		}
	}



