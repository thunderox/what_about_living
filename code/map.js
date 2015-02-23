
function room() {; }
var rooms = [];

function new_room(room_number, name, image_file, north, south, east, west)
{
	rooms[room_number] = new room;
	rooms[room_number].name = name;
	rooms[room_number].image_file = image_file;
	rooms[room_number].north = north;
	rooms[room_number].south = south;
	rooms[room_number].east = east;
	rooms[room_number].west = west;
}

new_room(1, "Hospital", "gfx/room3_hospital.jpg", 0, 3, 0, 0);
new_room(2, "Car Park", "gfx/carpark.png", 0, 6, 3, 0);
new_room(3, "Hospital", "gfx/room3_hospital.jpg", 1, 7, 4, 2);
new_room(4, "Chemist", "gfx/", 0, 8, 5, 3);
new_room(5, "Staff Room", "gfx/", 0, 0, 0, 4);
new_room(6, "Road", "gfx/road1.jpg", 2, 12, 7, 0);
new_room(7, "Road", "gfx/road1.jpg", 3, 13, 8, 6);
new_room(8, "Road", "gfx/road1.jpg", 4, 14, 11, 7);
new_room(9, "Hideout", "gfx/", 0, 11, 10, 0);
new_room(10, "Home", "gfx/", 0, 0, 0, 9);
new_room(11, "Hallway", "gfx/", 9,0,0,8);
new_room(12, "Recreation Area", "gfx/", 6, 17, 13, 0);
new_room(13, "Recreation Area", "gfx/", 7, 18, 0, 0);
new_room(14, "Supermarket", "gfx/", 8, 0, 15, 0);
new_room(15, "Road", "gfx/road1.jpg", 0, 0, 16, 14);
new_room(16, "Road", "gfx/road1.jpg", 0, 20, 0, 15);
new_room(17, "Recreation Area", "gfx/", 12, 19, 0, 0);
new_room(18, "Recreation Area", "gfx/", 13, 0, 0, 0);
new_room(19, "The Toilets", "gfx/toilet.png", 17, 0, 0, 0);
new_room(20, "Check Point", "gfx/checkpont.png", 16, 0, 0, 0);




