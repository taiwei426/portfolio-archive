$(document).ready(function() {

	var arrayOfIcons = $('.icon').children();

	for(var e=0; e<arrayOfIcons.length; e++){
		arrayOfIcons[e].onclick = (function (j) {
			return function() {
				$('html, body').animate( {
					scrollTop: $(arrayOfArtworks[j]).offset().top
				}, 1000);
			}
		})(e);
	}

// ** http://jsfiddle.net/6dWA2/6/


//http://stackoverflow.com/questions/18415962/slowly-scroll-the-content-of-a-div-on-hover-and-stop-on-mouseoff

$('#iconTop').mouseover( function () {
   $('#menu').animate({ scrollTop: 0}, 1000);
});

$("#iconTop").mouseout( function () {
   $("#menu").stop()
});

$('#iconBottom').mouseover( function () {
   $('#menu').animate({ scrollTop: $(document).height() }, 10000);
});

$("#iconBottom").mouseout( function () {
   $("#menu").stop()
});

//******************************************//
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

	

});
