
	game_position = 1;


//-------------------------------------------------------------------------------------------------------

	function set_up_game_position()
	{
	
		switch (game_position)
		{
			case 1:

				// -- DOCTOR FAILING -----------------------------------------------------------------
				set_character_dialogue("Dr. Failing","Oh it's you, well then i will tell you what i have found, You seem to be:suffering from something new its not quite Amnesia...you seem to be just fine, only...:your brain pattern is like that of a completely different person hmmm fetch me:a special medicine from the Hospital Ward..");


				set_player_response("Dr. Failing", "Tell Dr. Failing:- 'yes okay I will try to find it for you!' ");
				set_player_response("Dr. Failing", "Tell Dr. Failing:- 'You horrible witch!' and leave angrily. ");

				// -- SAM -----------------------------------------------------------------
				set_character_dialogue("Sam","Hi!");

				// -- KAI -----------------------------------------------------------------
				set_character_dialogue("Kai","Hi!");

				// -- JAKE -----------------------------------------------------------------
				set_character_dialogue("Jake","Hi!");

				// -- AMY -----------------------------------------------------------------
				set_character_dialogue("Amy","Fetch me a cupcake!!!!");
				set_player_response("Amy","Oh okay, no problem.");
				set_player_response("Amy","No! get your own why should I.");

				// -- RAIN -----------------------------------------------------------------
				set_character_position("Rain", "intro");
				set_character_dialogue("Rain","Hey you woke up !! About time i cant kill these for much longer,:you chose a really bad place to black out !!.");
				set_player_response("Rain","Whaaaa..i blacked out ?");
				set_player_response("Rain","Wait who are you and were am i ?");
				set_player_response("Rain","Oh how long was i out !!?");

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

				// -- AMY -----------------------------------------------------------------

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

				// -- RAIN -----------------------------------------------------------------

				var player_response = characters[current_character].player_response[ current_player_response ];

				// You first meet Rain

				if ( characters[current_character].name == "Rain"
					&& characters[current_character].position == "intro")
				{
	

					if (player_response == "Whaaaa..i blacked out ?")
					{
						remove_player_response("Rain", "Whaaaa..i blacked out ?");
						set_character_dialogue("Rain","Yeah you went up ahead and i found you out cold...");
						show_canvas();
					}

					if (player_response == "Wait who are you and were am i ?")
					{
						remove_player_response("Rain", "Wait who are you and were am i ?");
						set_character_dialogue("Rain","Huh!!? thats a joke right?...");
						show_canvas();
					}

					if (player_response == "Oh how long was i out !!?")
					{
						remove_player_response("Rain", "Oh how long was i out !!?");
						set_character_dialogue("Rain","haha about an hour we need to go.");
						show_canvas();
					}

					if ( characters[current_character].player_response.length == 0 )
					{
						set_character_position("Rain", "can't remember rain");
						set_player_response("Rain","I must have fell...umm I dont know who you are...");
						set_player_response("Rain","Well no I dont remember you, I'm sorry...");
						set_player_response("Rain","AN HOUR ah wait...who are you?...");
						break;
					}
				}

				// You can't remember rain

				if ( characters[current_character].name == "Rain"
					&& characters[current_character].position == "can't remember rain")
				{
						set_character_dialogue("Rain","You dont know who i am, for real?....we need to get back:to the hideout its not safe here you can trust me for");
						clear_player_response("Rain");
						set_player_response("Rain","Okay.");
						set_player_response("Rain", "No!! I dont like your face!");
						show_canvas();
				}

				if ( characters[current_character].name == "Rain"
					&& characters[current_character].position == "can't remember rain")
				{
					if ( player_response == "Okay." )
					{
						current_room_number = 11;
						set_up_current_room();
						dialogue_mode = false;
						init_canvas();
					}

					if ( player_response == "No!! I dont like your face!" )
					{

						set_character_position("Rain", "dead");
						move_character("Rain",-1);

						rooms[current_room_number].north = 0;
						rooms[current_room_number].south = 0;
						rooms[current_room_number].east = 0;
						rooms[current_room_number].west = 0;

						move_character("Claude",current_room_number);
						set_character_dialogue("Claude","Gurrrrrrrrrrgh!::You were eaten by a ravenus hord of hungry zombies your friend also died:trying to save you, or maybe she ran off we will never know.");
						set_player_response("Claude","The End, Okay.");

						move_character("Drew",current_room_number);
						set_character_dialogue("Drew","Brainzzz!::You were eaten by a ravenus hord of hungry zombies your friend also died:trying to save you, or maybe she ran off we will never know.");
						set_player_response("Drew","The End, Okay.");

						move_character("Hilda",current_room_number);
						set_character_dialogue("Hilda","Muurggggrr, lost my ipod. brrrrrrrrrrains!::You were eaten by a ravenus hord of hungry zombies your friend also died:trying to save you, or maybe she ran off we will never know.");
						set_player_response("Hilda","The End, Okay.");

						set_up_current_room();
						dialogue_mode = false;

						set_up_current_room();
						init_canvas();
					}
				}

				//--------------------------------------------------------------

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











