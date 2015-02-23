


// -------------------- Game clickables - things that appear in the game you can click the mouse on -----------------------
// -------------------- Example: Navigation controls, Characters, Objects                           -----------------------

	function clickable() { ; }
	var clickables = [];
	var number_of_clickables = 0;

// --------------------- Add new clickable -------------------------------------

	function add_clickable(name, image, xpos, ypos)
	{	
		clickables[number_of_clickables] = new clickable;
		clickables[number_of_clickables].name = name;
		clickables[number_of_clickables].xpos = xpos;
		clickables[number_of_clickables].ypos = ypos;
		clickables[number_of_clickables].image = new Image();
		clickables[number_of_clickables].image.src = image;
		clickables[number_of_clickables].width = image.width;
		clickables[number_of_clickables].height = image.height;
		clickables[number_of_clickables].clicked = false;
		number_of_clickables++;	
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



