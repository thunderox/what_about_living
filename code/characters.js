
function character() {; }
var characters = [];
var char_number = 0;

function new_character(name, description, image_file, room, xpos, ypos)
{
	var char_num = add_clickable(name, image_file, xpos, ypos);

	clickables[char_num].room = room;

	characters[char_number] = new character;
	characters[char_number].name = name;
	characters[char_number].description = description;
	characters[char_number].room = room;

	char_number++;
	
}

function add_characters()
{

	new_character("Kai", "Fiercely loyal and always by your side.", "gfx/character_kai.png",1, 40, 150);
	new_character("Rain","Fiercely loyal and always by your side.", "", 0, 200, 150);
	new_character("Amy", "Don't be fooled by her cute charm, She can be mean and a bully, and will probably leave you for dead.", "", 0, 200, 150);
	new_character("Elissa", "Kind, sweet and caring and very friendly, sometimes overwhelmingly so!", "", 0, 200, 150);
	new_character("Jake", "Errr, he looks normal enough, he speaks short and to the point, quietly with a creepy undertone.", "", 0, 200, 150);
	new_character("Sam", "Very phsyically adept and loves everything to do with exercise. Always on the go and never standing still, can count on him in an emergency.", "", 0, 200, 150);
	new_character("Dr. Failing", "Dr. Anna Failing is a proud genius who excells at medical science, her excellence in this field is equal her to her total lack of respect for other human beings.", "gfx/character-anna-failing-standing.png",  11, 200, 150);
	new_character("Dr. Elderberry", "A doctor in an hazmat suit, eccentric and humerous, often seen pretending to be a guard at the city gate.", "", 0, 200, 150);
	new_character("Claud", "A zombie, loveable in his own way", "", 0, 200, 150);
	new_character("Drew", "A zombie", "", 0, 200, 150);
	new_character("Hilda", "A zombie", "", 0, 200, 150);
	new_character("Holly", "A zombie", "", 0, 200, 150);
}













