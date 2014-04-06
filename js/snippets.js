	function(){
		var img = new Image();
		$(img).load(function(){
			$(img).hide();
			$('#loader').removeClass('loading').append(img);
			$(img).fadeIn('slow');
			console.log("the image has been loaded!");
		}). attr('src', getCurrentImage());
	}
	