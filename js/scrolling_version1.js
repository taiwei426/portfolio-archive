$(document).ready(function() {

	var arrayOfArtworks = $('.artwork').children();

	var getCurrentImage = function(){
		for(var i=0; i<arrayOfArtworks.length; i++){
			if($(document).scrollTop()>=$(arrayOfArtworks[i]).offset().top && $(document).scrollTop()< $(arrayOfArtworks[i+1]).offset().top){
				return i;
			}
		}
	}

	$('.arrow_up').click(function scrollup(){
		$('html, body').animate( { 
			scrollTop: $(arrayOfArtworks[getCurrentImage()-1]).offset().top 
		}, 1000);
	});

	$('.arrow_down').click(function scrolldown(){
		$('html, body').animate( { 
			scrollTop: $(arrayOfArtworks[getCurrentImage()+1]).offset().top 
		}, 1000);
	});
	
	$('.arrow_top').click(function scrollToTop(){
		$('html, body').animate( { 
			scrollTop: 0}, 1000);
	});

	function showDescription(){
		$("#details"+getCurrentImage()).css("display","block");
	}

	function hideAllDescriptions(){
		$(".detailsInfo").css("display","none");
	}

	function detailToggle(){
		hideAllDescriptions();
		showDescription();
		$('#details').toggle(200);
	}

	$('a#detailsDescription').click(detailToggle);


	function scrollingDescription(){
		hideAllDescriptions();
		showDescription();
	}

	$(window).scroll(scrollingDescription);

	function showThumb(){
		$("#thumb"+getCurrentImage()).css("opacity","1");
	}

	function hideAllThumbs(){
		$(".icon").css("opacity",".4");
	}

	function thumbCurrent(){
		hideAllThumbs();
		showThumb();
	}

	$(window).scroll(thumbCurrent);

	$('a.menuSub1').click(function(){			
		$('html, body').animate({
			scrollTop:$('.section_1').offset().top}, 900);
	});
	
	$('a.menuSub2').click(function(){			
		$('html, body').animate({
			scrollTop:$('.section_2').offset().top}, 900);
	});
	$('a.menuSub3').click(function(){			
		$('html, body').animate({
			scrollTop:$('.section_3').offset().top}, 900);
	});


});
