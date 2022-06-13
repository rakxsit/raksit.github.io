$(function(){

	/* Sets video at certain time */
	document.getElementById('labphon17_video').addEventListener('loadedmetadata', function() {
	  this.currentTime = 1;
	}, false);

	/* Get rid of anchor in URL */
	$('a[href*=#]').bind("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 5);
		e.preventDefault();
	});

})(jQuery);