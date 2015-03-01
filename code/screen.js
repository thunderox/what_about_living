
		var number_of_images_loaded = 0;
		var mouse_over_object = 0;
		

		function image_loaded(cn)
		{
			clickables[cn].width = clickables[cn].image.width;
			clickables[cn].height = clickables[cn].image.height;

			number_of_images_loaded++;

		}

		function init_canvas()
		{
			update_visible_clickables_list();
			number_of_images_loaded = 0;


			for (x=0; x<visible_clickables.length; ++x)
			{	
				cn = visible_clickables[x];
				clickables[cn].image = new Image();
				clickables[cn].image.oncomplete = image_loaded(cn);
				clickables[cn].image.src = clickables[cn].image_name;

			}
		}


		function show_canvas()
		{
			var c = document.getElementById("myCanvas");
			var ctx = c.getContext("2d");

			if ( !clickables[0].image.complete)
			{
				ctx.fillStyle = "#000000";
				ctx.fillRect(0,0,800,500);
				return;
			}

			ctx.drawImage ( clickables[0].image, clickables[0].xpos, clickables[0].ypos );

			for (x=visible_clickables.length-1; x>0; --x)
			{	
				cn = visible_clickables[x];
				ctx.drawImage ( clickables[cn].image, clickables[cn].xpos, clickables[cn].ypos );
				clickables[cn].width = clickables[cn].image.width;
				clickables[cn].height = clickables[cn].image.height;
			}


			ctx.fillStyle = "#000000";
	 
			ctx.fillStyle = "rgba(0,0,0, 0.75)";
			ctx.fillRect(0,0,800,40);
			ctx.fillStyle = "#000000";
			ctx.strokeRect(0,0,800,40);
		
			ctx.globalAlpha = 1.0;

			ctx.fillStyle = "#ffffff";

			if (mouse_over_object == 0)
			{
				ctx.font = "26px DrawingWithMarkers";
				ctx.fillText("Current location - " + rooms[current_room_number].name,10,30, 786);
			}
			else
			{
				ctx.font = "26px DrawingWithMarkers";	
				ctx.fillText(clickables[mouse_over_object].name + " - " + clickables[mouse_over_object].description,10,30, 786);

			}

			//---- show inventory if list open

			if ( clickables[get_clickable_number("inventory_list") ].visible == true)
			{
				ctx.fillStyle = "#000000";
				ctx.font = "26px DrawingWithMarkers";	
				ctx.fillText("You are carrying" ,800-270 ,128+76 ,256);

				for (x=0; x<inventory_list.length; ++x)
				{
					var cn = inventory_list[x];
					ctx.fillText( clickables[cn].name ,800-270 ,(128+120) + x*28 ,256);
				}
			}

			//---- dialogue mode - show what character is saying and player responses -------
	
			if ( dialogue_mode == true )
			{
				ctx.fillStyle = "rgba(0,0,0, 0.75)";
				ctx.fillRect(0,270,800,500-270);

				ctx.fillStyle = "rgba(255,255,255, 1.0)";
				ctx.font = "24px DrawingWithMarkers";

				var char_text = characters[current_character].dialogue.split(":");

				char_text[0] = characters[current_character].name + " - " + char_text[0];

				for (x=0; x<char_text.length; ++x)
				{
					ctx.fillText( char_text[x] ,10 ,300 + (x*24) , 786);
				}		

				ctx.font = "22px DrawingWithMarkers";	

				for (x=0; x< characters[current_character].player_response.length; ++x)
				{
					if (current_player_response == x)
					{
						ctx.fillStyle = "rgba(16,0,0, 0.8)"; 
						ctx.fillRect(10,400 + (x*40),786-10,36);
						ctx.fillStyle = "rgba(255,100,100, 1.0)";
					}
						else { ctx.fillStyle = "rgba(255,255,255, 1.0)"; }

					ctx.fillText( characters[current_character].player_response[x] ,10 ,420 + (x*40) , 786);
				}

			}

		}

	









