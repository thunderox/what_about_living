
		var number_of_images_loaded = 0;
		var display_now = false;
		var mouse_over_object = 0;

		function image_loaded(cn)
		{
			clickables[cn].width = clickables[cn].image.width;
			clickables[cn].height = clickables[cn].image.height;

			number_of_images_loaded++;

			if ( number_of_images_loaded == visible_clickables.length ) { display_now = true;  }
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

			show_clickable(ctx, "player1");
		
			ctx.globalAlpha = 1.0;

			show_clickable(ctx, "inventory_list");

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

		}

	









