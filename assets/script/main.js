$(document).ready(function() {
	$('#fullpage').fullpage({
		controlArrows: true,
		easing: 'easeInOutCubic',
		scrollingSpeed: 1000,
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){
			if(direction == 'right') {
				let className = '.slide-' + Number(slideIndex + 2) + ' ';
				$( className + '.testimonial-box').toggleClass('fadeIn');
			}
		}
	});

	$('.big-text').textillate({ in: { effect: 'fadeInLeftBig' } });
	$('.small-text').textillate({ in: { effect: 'fadeInLeftBig' } });
});