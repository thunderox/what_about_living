
function room() {; }
var rooms = [];
var current_room_number = 6;

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


new_room(1, "Hospital ward", "gfx/rooms/room1_hospital.jpg", 0, 3, 0, 0);
new_room(2, "Car Park", "gfx/rooms/carpark.jpg", 0, 6, 3, 0);
new_room(3, "Hospital reception", "gfx/rooms/room3_hospital_reception.jpg", 1, 7, 4, 2);
new_room(4, "Chemist", "gfx/rooms/room4_chemist.jpg", 0, 8, 5, 3);
new_room(5, "Staff Room", "gfx/rooms/room5_chemist_staffroom.jpg", 0, 0, 0, 4);
new_room(6, "Road", "gfx/rooms/road1.jpg", 2, 12, 7, 0);
new_room(7, "Road", "gfx/rooms/road1.jpg", 3, 13, 8, 6);
new_room(8, "Road", "gfx/rooms/road1.jpg", 4, 14, 11, 7);
new_room(9, "Hideout", "gfx/rooms/room9_hideout.jpg", 0, 11, 10, 0);
new_room(10, "Home", "gfx/rooms/room10_home.jpg", 0, 0, 0, 9);
new_room(11, "Hallway", "gfx/rooms/room11_hideout_hallway.jpg", 9,0,0,8);
new_room(12, "Recreation Area", "gfx/rooms/room12_recreation_area.jpg", 6, 17, 0, 0);
new_room(13, "Recreation Area", "gfx/rooms/room13_recreation_area.jpg", 7, 18, 0, 0);
new_room(14, "Supermarket", "gfx/rooms/room14_supermarket.jpg", 8, 0, 15, 0);
new_room(15, "Road", "gfx/rooms/road1.jpg", 0, 0, 16, 14);
new_room(16, "Road", "gfx/rooms/road1.jpg", 0, 20, 0, 15);
new_room(17, "Recreation Area", "gfx/rooms/room17_recreation_area.jpg", 12, 19, 0, 0);
new_room(18, "Recreation Area", "gfx/rooWhatms/room18_recreation_area.jpg", 13, 0, 0, 0);
new_room(19, "The Toilets", "gfx/rooms/room19_bog.jpg", 17, 0, 0, 0);
new_room(20, "Check Point", "gfx/rooms/room20_checkpoint.jpg", 16, 0, 0, 0);



	function set_up_current_room()
	{
		clickables[0].image_name = rooms[current_room_number].image_file;

		if (rooms[current_room_number].north == 0) { set_clickable_visibility ("arrow_north", false); }
			else { set_clickable_visibility ("arrow_north", true); }

		if (rooms[current_room_number].south == 0) { set_clickable_visibility ("arrow_south", false); }
			else { set_clickable_visibility ("arrow_south", true); }

		if (rooms[current_room_number].east == 0) { set_clickable_visibility ("arrow_east", false); }
			else { set_clickable_visibility ("arrow_east", true); }

		if (rooms[current_room_number].west == 0) { set_clickable_visibility ("arrow_west", false); }
			else { set_clickable_visibility ("arrow_west", true); }
	}




