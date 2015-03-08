
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

	characters[char_number].dialogue = "";
	characters[char_number].player_response = [];

	char_number++;
}


function add_characters()
{

	new_character("Kai", "Fiercely loyal and always by your side.", "gfx/characters/character_kai.png", "male", 1, 40, 150);
	new_character("Rain","Fiercely loyal and always by your side.", "", "female", 0, 200, 150);
	new_character("Amy", "Don't be fooled by her cute charm, She can be mean and a bully, and will probably leave you for dead.", "gfx/characters/character_amy.png", "female", 10, 200, 150);
	new_character("Elissa", "Kind, sweet and caring and very friendly, sometimes overwhelmingly so!", "gfx/characters/character_elissa.png", "female", 0, 200, 150);
	new_character("Jake", "Errr, he looks normal enough, he speaks short and to the point, quietly with a creepy undertone.", "gfx/characters/character_jake.png", "male", 9, 200, 150);
	new_character("Sam", "Very phsyically adept, always on the go and never standing still, great in emergencies.", "gfx/characters/character_sam.png", "male", 16, 200, 150);
	new_character("Dr. Failing", "Dr. Anna Failing is a proud genius, but her people skills need much work!", "gfx/characters/character_dr_failing.png",  "female", 11, 200, 150);
	new_character("Dr. Elderberry", "A doctor in an hazmat suit, eccentric, humerous, often pretends to be a guard at the city gate.", "gfx/characters/character_dr_elderberry.png", "male", 20, 200, 200);
	new_character("Claud", "A zombie, loveable in his own way", "gfx/characters/zombie_claude.png", "male", 0, 200, 150);
	new_character("Drew", "A zombie", "gfx/characters/zombie_drew.png", "male", 0, 200, 150);
	new_character("Hilda", "A zombie", "gfx/characters/zombie_hilda.png", "female", 0, 200, 150);
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






