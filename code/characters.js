
function character() {; }
var characters = [];
var char_number = 0;
var dialogue_mode = false;
var dialogue_character = -1;


function dialogue() {; }

function new_character(name, description, image_file, room, xpos, ypos)
{
	var char_num = add_clickable(name, image_file, xpos, ypos);

	clickables[char_num].room = room;
	clickables[char_num].description = description;
	clickables[char_num].type = 1;
	clickables[char_num].character_num = char_number;

	characters[char_number] = new character;
	characters[char_number].name = name;
	characters[char_number].description = description;
	characters[char_number].room = room;

	characters[char_number].dialogue = [];
	characters[char_number].current_dialogue = 0;

	char_number++;
	
}


function add_characters()
{

	new_character("Kai", "Fiercely loyal and always by your side.", "gfx/characters/character_kai.png",1, 40, 150);
	new_character("Rain","Fiercely loyal and always by your side.", "", 0, 200, 150);
	new_character("Amy", "Don't be fooled by her cute charm, She can be mean and a bully, and will probably leave you for dead.", "gfx/characters/character_amy.png", 10, 200, 150);
	new_character("Elissa", "Kind, sweet and caring and very friendly, sometimes overwhelmingly so!", "gfx/characters/character_elissa.png", 0, 200, 150);
	new_character("Jake", "Errr, he looks normal enough, he speaks short and to the point, quietly with a creepy undertone.", "gfx/characters/character_jake.png", 9, 200, 150);
	new_character("Sam", "Very phsyically adept and loves everything to do with exercise. Always on the go and never standing still, can count on him in an emergency.", "gfx/characters/character_sam.png", 16, 200, 150);
	new_character("Dr. Failing", "Dr. Anna Failing is a proud genius who excells at medical science, her excellence in this field is equal her to her total lack of respect for other human beings.", "gfx/characters/character_dr_failing.png",  11, 200, 150);
	new_character("Dr. Elderberry", "A doctor in an hazmat suit, eccentric and humerous, often seen pretending to be a guard at the city gate.", "gfx/characters/character_dr_elderberry.png", 20, 200, 200);
	new_character("Claud", "A zombie, loveable in his own way", "gfx/characters/zombie_claude.png", 0, 200, 150);
	new_character("Drew", "A zombie", "gfx/characters/zombie_drew.png", 0, 200, 150);
	new_character("Hilda", "A zombie", "gfx/characters/zombie_hilda.png", 0, 200, 150);
	new_character("Holly", "A zombie", "gfx/characters/zombie_holly.png", 0, 200, 150);

	//---------------------- Doctor Failing Dialogue

	add_dialogue ("Dr. Failing", "greet", "Oh it's you.");
	add_dialogue ("Dr. Failing", "greet2", "Mmm you again.");



	//---------------------------------------------------

}



function add_dialogue(character_name, dialogue_title, dialogue_text)
{
	for (x=0; x<characters.length; ++x)
	{
		if ( character_name == characters[x].name )
		{
			var new_dialogue = new dialogue;
			new_dialogue.title = dialogue_title;
			new_dialogue.text = dialogue_text;
			characters[x].dialogue.push(new_dialogue);
		}
	}
}








