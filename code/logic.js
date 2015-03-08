
	game_position = 1;


//-------------------------------------------------------------------------------------------------------

	function set_up_game_position()
	{
	
		switch (game_position)
		{
			case 1:
				set_character_dialogue("Dr. Failing","Oh it's you, well then i will tell you what i have found, You seem to be:suffering from something new its not quite Amnesia...you seem to be just fine, only...:your brain pattern is like that of a completely different person hmmm fetch me:a special medicine from the Hospital Ward..");


				set_player_response("Dr. Failing", "Tell Dr. Failing:- 'yes okay I will try to find it for you!' ");
				set_player_response("Dr. Failing", "Tell Dr. Failing:- 'You horrible witch!' and leave angrily. ");

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

	function do_game_position()
	{

		if (current_character == -1) return;

		switch (game_position)
		{
			case 1:
				if ( characters[current_character].name == "Amy"
					&& characters[current_character].dialogue == "Fetch me a cupcake!!!!")
				{
					if (current_player_response == 0)
					{
						set_character_dialogue("Amy","Awwh thanks pleb.");
						clear_player_response("Amy");
						set_player_response("Amy","No problem.");
						current_player_response = -1;
						show_canvas();
					}

					if (current_player_response == 1)
					{
						dialogue_mode = false;
						show_canvas();
					}
				}

				if ( characters[current_character].name == "Amy"
					&& characters[current_character].dialogue == "Awwh thanks pleb.")
				{
					if (current_player_response == 0)
					{
						set_character_dialogue("Amy","Hiha.. well. On your way!");
						clear_player_response("Amy");
						set_player_response("Amy","Okay.");
						current_player_response = -1;
						show_canvas();
					}
				}

				if ( characters[current_character].name == "Amy"
					&& characters[current_character].dialogue == "Hiha.. well. On your way!")
				{
					if (current_player_response == 0)
					{
						dialogue_mode = false;
						show_canvas();
					}
				}

				break;

		}
	}





//-------------------------------------------------------------------------------------------------------
// ----------------- Give object to character

	function give_object_to_character(character_name, object_name)
	{
		var object_number = get_clickable_number(object_name);
		var character_number = get_clickable_number(character_name);

		clickables[object_number].room = -clickables[character_number].character_number; 
		notification_string =  object_name + " given to " + character_name;

		var rand = Math.floor((Math.random() * 3) + 1);
		clickables[object_number].room = -1;

		switch (rand)
		{
			case 1:
				notification_string = "I'm not sure " + character_name + " wants " + object_name + " right now!";
				break;

			case 2:
				notification_string = "I'm sure " + character_name + " has no use for " + object_name + " at the moment.";
				break;

			case 3:
				var gender = characters[clickables[character_number].character_number].gender;
				notification_string = character_name + " looks at " + object_name + " and shakes";
				if (gender == "male") { notification_string += " his head."; }
				if (gender == "female") { notification_string += " her head."; }
				break;
		}
	}











