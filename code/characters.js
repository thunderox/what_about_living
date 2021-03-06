
function character() {; }
var characters = [];
var char_number = 0;
var dialogue_mode = false;
var current_character = -1;
var current_player_response = -1;

function dialogue() {; }

function new_character(name, description, image_file, gender, room, xpos, ypos)
{
	var char_num = add_clickable(name, image_file, xpos, ypos);

	clickables[char_num].room = room;
	clickables[char_num].description = description;
	clickables[char_num].type = 1;
	clickables[char_num].character_number = char_number;

	characters[char_number] = new character;
	characters[char_number].name = name;
	characters[char_number].description = description;
	characters[char_number].room = room;
	characters[char_number].gender = gender;
	characters[char_number].clickable_number = char_num;

	characters[char_number].dialogue = "";
	characters[char_number].player_response = [];

	characters[char_number].position = "";

	char_number++;
}


function add_characters()
{

	new_character("Kai", "Fiercely loyal and always by your side.", "gfx/characters/character_kai.png", "male", 1, 40, 150);
	new_character("Rain","Fiercely loyal and always by your side.", "gfx/characters/character_rain.png", "female", 6, 200, 150);
	new_character("Amy", "Don't be fooled by her cute charm, She can be mean and a bully, and will probably leave you for dead.", "gfx/characters/character_amy.png", "female", 10, 200, 150);
	new_character("Elissa", "Kind, sweet and caring and very friendly, sometimes overwhelmingly so!", "gfx/characters/character_elissa.png", "female", 0, 200, 150);
	new_character("Jake", "Errr, he looks normal enough, he speaks short and to the point, quietly with a creepy undertone.", "gfx/characters/character_jake.png", "male", 9, 200, 150);
	new_character("Sam", "Very phsyically adept, always on the go and never standing still, great in emergencies.", "gfx/characters/character_sam.png", "male", 16, 200, 150);
	new_character("Dr. Failing", "Dr. Anna Failing is a proud genius, but her people skills need much work!", "gfx/characters/character_dr_failing.png",  "female", 11, 200, 150);
	new_character("Dr. Elderberry", "A doctor in an hazmat suit, eccentric, humerous, often pretends to be a guard at the city gate.", "gfx/characters/character_dr_elderberry.png", "male", 20, 200, 200);
	new_character("Claude", "A zombie, loveable in his own way", "gfx/characters/zombie_claude.png", "male", 0, 380, 150);
	new_character("Drew", "A zombie", "gfx/characters/zombie_drew.png", "male", 0, 200, 150);
	new_character("Hilda", "A zombie", "gfx/characters/zombie_hilda.png", "female", 0,20, 150);
	new_character("Holly", "A zombie", "gfx/characters/zombie_holly.png", "female", 0, 200, 150);

	//---------------------------------------------------

}


function set_character_dialogue(character_name, text)
{
	for (x=0; x<characters.length; ++x)
	{
		if ( character_name == characters[x].name )
		{
			characters[x].dialogue = text;
		}
	}
}

function set_character_position(character_name, text)
{
	for (x=0; x<characters.length; ++x)
	{
		if ( character_name == characters[x].name )
		{
			characters[x].position = text;
		}
	}
}


function clear_player_response(character_name)
{
	for (x=0; x<characters.length; ++x)
	{
		if ( character_name == characters[x].name )
		{
			characters[x].player_response = [];
			characters[x].player_response.length = 0;
		}
	}
}


function set_player_response(character_name, text)
{
	for (x=0; x<characters.length; ++x)
	{
		if ( character_name == characters[x].name )
		{
			characters[x].player_response.push(text);
		}
	}
}


function remove_player_response(character_name, text)
{
	for (x=0; x<characters.length; ++x)
	{
		if ( character_name == characters[x].name )
		{
			for (y=0; y<characters[x].player_response.length; ++y)
			{
				if ( characters[x].player_response[y] == text)
				{
					characters[x].player_response.splice(y,1);
				}
			}
		}
	}
}

function move_character(character_name, room_number, xpos, ypos)
{
	for (x=0; x<characters.length; ++x)
	{
		if ( character_name == characters[x].name )
		{
			characters[x].room = room_number;
			clickables[ characters[x].clickable_number ].room = room_number;
			clickables[ characters[x].clickable_number ].xpos = xpos;
			clickables[ characters[x].clickable_number ].ypos = ypos;
		}
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





