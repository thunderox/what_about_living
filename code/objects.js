
function object() {; }
var objects = [];
var object_number = 0;
var inventory_list_object_hover = -1;
var inventory_list_object_clicked = -1;

function new_object(name, description, image_file, room, xpos, ypos, can_be_carried)
{
	var obj_num = add_clickable(name, image_file, xpos, ypos);
	clickables[obj_num].room = room;
	clickables[obj_num].description = description;
	clickables[obj_num].object_number = object_number;

	objects[object_number] = new object;
	objects[object_number].description = description;
	objects[object_number].image = new Image(); 
	objects[object_number].image.src = image_file;
	objects[object_number].image.width = objects[object_number].image.width / 2;
	objects[object_number].image.height = objects[object_number].image.height / 2;
	objects[object_number].room = room;
	objects[object_number].xpos = xpos;
	objects[object_number].ypos = ypos;
	objects[object_number].can_be_carried = can_be_carried;
	object_number++;
}

	function add_objects()
	{

		new_object("a tin of food", "A tin of food could be useful", "gfx/objects/tin_of_food.png", 14, 10, 280, true );
		new_object("a water bottle", "A bottle of water", "gfx/objects/water_bottle.png", 14, 400, 200, true );
		new_object("a can of pop", "Awesome! an unopened can of pop.", "gfx/objects/can_of_pop.png", 14, 440, 190, true );
		// new_object("Boxed food", "huh? We do have a microwave right?", "", 14, 50, 50, true );
		new_object("tooth brushes", "A new box of toothbrushes!", "gfx/objects/toothbrushes.png", 14, 200, 180, true );
		// new_object("Box of cookies", "COOKIES!!! All MINE!!!!!", "", 14, 50, 50, true );
		new_object("a gold locket", "A locket, it looks cheap but anything like this is a treasure now..I could give this as a gift to a dear friend.", "gfx/objects/gold_locket.png", 14, 300, 200, true );
		new_object("a cute Bunny plushy", "zomg!! I love this I bet this would be a cute gift for a dear friend. ", "gfx/objects/cute_bunny_plushy.png", 14, 10, 350, true );
		new_object("a snow globe", "Mhh! This is nice I wonder if a dear friend would like this for their birthday.", "gfx/objects/snow_globe.png", 14, 60, 190, true );
		new_object("the important papers", "These papers are the cure notes Dr. Failing wanted!", "gfx/objects/important_papers.png", 1, 500, 350, true );
		// new_object("Samples", "There's blood in this thing? Are these the samples Dr. Failing wanted?", "", 1, 50, 50, true );
		// new_object("Medicine", "What is this stuff I never heard of it before...", "", 3, 50, 50, true );
		new_object("the brain scrammer", "This is the proto machine that is going to wipe out the zombies!", "gfx/objects/brain_scrammer.png", 1, 450, 300, true );
		new_object("small weights", "Small training weights is this what Sam wanted?", "gfx/objects/small_weights.png", 17, 450, 300, true );
		new_object("ankle weights", "Heavy weights to put on your ankles, are these what Sam wanted?", "gfx/objects/ankle_weights.png", 13, 200, 400, true );
		new_object("heart rate monitor", "Wow, I'm surprised it still works, is this what Sam wanted?", "gfx/objects/heart_monitor.png", 17, 50, 350, true );
		new_object("the excercise expander", "Oh! it's one of those stretch exapnder things, is this what Sam wanted?", "gfx/objects/excercise_expanders.png", 18, 630, 320, true );
		new_object("the abandoned sweater", "Wow so soft...... maybe Elissa would like this?", "gfx/objects/abandoned_sweater.png", 12, 50, 350, true );
		new_object("the pile of clothes", "Were people swimming in the fountain... maybe Elissa would like this?", "gfx/objects/a_pile_of_clothes.png", 12, 400, 320, true );
		new_object("the forgotten underwear", "Why are these here? Maybe Elissa would like this?", "gfx/objects/forgotten_underwear.png", 19, 500, 380, true );
		new_object("toilet paper", "A reasonable request from Jake, maybe we'll share it?", "gfx/objects/toilet_paper.png", 19, 640, 200, true );
		new_object("a waste basket", "An understandable requirement from Jake, are we all that messy?", "gfx/objects/waste_basket.png", 19, 200, 380, true );
		new_object("a questionable magazine", "Well this USED to be normal, I wont question Jakes motives...!", "gfx/objects/questionable_magazine.png", 5, 550, 200, true );
		new_object("vaseline", "Actually can you oil a gun with this??..What's Jake want it for dry skin isn't really a concern right now.", "gfx/objects/vaseline.png", 4, 260, 320, true );
		new_object("a single latex glove", "Ah! A rubber glove why only one? Jakes weird sometimes.", "gfx/objects/latex_glove.png", -8, 50, 50, true );
		new_object("a recording of pigs squealing", "Why did Dr. Failing even have this??!? AND WHY DOES JAKE WANT IT??*!?", "gfx/objects/squealing_pig_cassette.png", -7, 50, 50, true );
		new_object("a goody package", "Assorted foods and luxury items for your hard work.", "gfx/objects/bag_of_goodies.png", -8, 50, 50, true );
		new_object("a photograph of you", "I'm glad they kept this picture, what a weird request from Jake!", "gfx/objects/photograph_of_you.png", 9, 50, 50, true );
		new_object("the cure research notes", "Dr. Failing was working on this for ages, I hope it works!", "gfx/objects/cure_notes.png", 3, 200, 160, true );

	}







//-------------------------------------------------------------------------------------------

function show_objects (room_number, ctx)
{


	for (obj=0; obj<object_number; obj++)
	{
		if (objects[obj].room == room_number)
		{
			ctx.drawImage(objects[obj].image, 
				objects[obj].xpos, 
				objects[obj].ypos,
				objects[obj].image.width,
				objects[obj].image.height);
		}
	}
}
