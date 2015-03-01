
	game_position = 1;


//-------------------------------------------------------------------------------------------------------

	function set_up_game_position()
	{
	
		switch (game_position)
		{
			case 1:
				set_character_dialogue("Dr. Failing","Oh it's you.");
				set_player_response("Dr. Failing", "yes, see ya!");
				set_player_response("Dr. Failing", "You horrible witch!");

				set_character_dialogue("Sam","Hi!");

				set_character_dialogue("Kai","Hi!");

				set_character_dialogue("Jake","Hi!");

				set_character_dialogue("Amy","Fetch me a cupcake!!!!");
				set_player_response("Amy","Oh okay, no problem.");
				set_player_response("Amy","No! get your own why should I.");

				break;

		}
		
			
	}


//-------------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------------

	function do_game_position()
	{

		if (current_character == -1) return;

		switch (game_position)
		{
			case 1:
				if ( characters[current_character].name == "Amy")
				{
					if (current_player_response == 0)
					{
						set_character_dialogue("Amy","Awwh thanks pleb.");
						clear_player_response("Amy");
						set_player_response("Amy","No problem.");
						current_player_response = -1;
						show_canvas();
					}
				}
				break;

		}
	}


