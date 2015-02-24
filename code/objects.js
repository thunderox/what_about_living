
function object() {; }
var objects = [];
var object_number = 0;

function new_object(name, description, image_file, room, xpos, ypos, can_be_carried)
{
	var obj_num = add_clickable(name, image_file, xpos, ypos);
	clickables[obj_num].room = room;

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

		// new_object("Tin of food", "A tin of food could be useful", "", 14, 50, 50, true );
		// new_object("Water bottle", "A bottle of water", "", 14, 50, 50, true );
		// new_object("Can of pop", "Awesome! an unopened can of pop.", "", 14, 50, 50, true );
		// new_object("Boxed food", "huh? We do have a microwave right?", "", 14, 50, 50, true );
		// new_object("Tooth brushes", "A new box of toothbrushes!", "", 14, 50, 50, true );
		// new_object("Box of cookies", "COOKIES!!! All MINE!!!!!", "", 14, 50, 50, true );
		// new_object("Gold locket", "A locket, it looks cheap but anything like this is a treasure now..I could give this as a gift to a dear friend.", "", 14, 50, 50, true );
		// new_object("Cute Bunny plushy", "zomg!! I love this I bet this would be a cute gift for a dear friend. ", "", 14, 50, 50, true );
		// new_object("Snow globe", "Mhh! This is nice I wonder if a dear friend would like this for their birthday.", "", 14, 50, 50, true );
		// new_object("Important papers", "These papers are the cure notes Dr. Failing wanted!", "", 1, 50, 50, true );
		// new_object("Samples", "There's blood in this thing? Are these the samples Dr. Failing wanted?", "", 1, 50, 50, true );
		// new_object("Medicine", "What is this stuff I never heard of it before...", "", 3, 50, 50, true );
		// new_object("Brain scrammer", "This is the proto machine that is going to wipe out the zombies!", "", 1, 50, 50, true );
		new_object("Small weights", "Small training weights is this what Sam wanted?", "gfx/small_weights.png", 12, 50, 50, true );
		// new_object("Ankle weights", "Heavy weights to put on your ankles, are these what Sam wanted?", "", 13, 50, 50, true );
		new_object("Heart rate monitor", "Wow, I'm surprised it still works, is this what Sam wanted?", "gfx/heart_monitor.png", 17, 50, 250, true );
		// new_object("Exercise expander", "Oh! it's one of those stretch exapnder things, is this what Sam wanted?", "", 18, 50, 50, true );
		new_object("Abandoned sweater", "Wow so soft...... maybe Elissa would like this?", "gfx/abandoned_sweater.png", 12, 50, 350, true );
		new_object("A pile of clothes", "Were people swimming in the fountain... maybe Elissa would like this?", "gfx/a_pile_of_clothes.png", 17, 350, 150, true );
		new_object("Forgotten underwear", "Why are these here? Maybe Elissa would like this?", "gfx/forgotten_underwear.png", 19, 500, 380, true );
		// new_object("Toilet paper", "A reasonable request from Jake, maybe we'll share it?", "", 19, 50, 50, true );
		// new_object("Waste basket", "An understandable requirement from Jake, are we all that messy?", "", 19, 50, 50, true );
		// new_object("Questionable magazine", "Well this USED to be normal, I wont question Jakes motives...!", "", 5, 50, 50, true );
		// new_object("Vaseline", "Actually can you oil a gun with this??..What's Jake want it for dry skin isn't really a concern right now.", "", 4, 50, 50, true );
		// new_object("A single latex glove", "Ah! A rubber glove why only one? Jakes weird sometimes.", "", -8, 50, 50, true );
		// new_object("A recording of pigs squealing", "Why did Dr. Failing even have this??!? AND WHY DOES JAKE WANT IT??*!?", "", -7, 50, 50, true );
		// new_object("Goody package", "Assorted foods and luxury items for your hard work.", "", -8, 50, 50, true );
		// new_object("A photograph of yourself", "I'm glad they kept this picture, what a weird request from Jake!", "", 1, 50, 50, true );
		// new_object("Cure research notes", "Dr. Failing was working on this for ages, I hope it works!", "", 9, 50, 50, true );

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
