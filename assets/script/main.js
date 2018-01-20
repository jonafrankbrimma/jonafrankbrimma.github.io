$(document).ready(function() {
	$('#fullpage').fullpage({
		controlArrows: true,
		easing: 'easeInOutCubic',
		scrollingSpeed: 1000,
		scrollOverflow: true,
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){
			if(direction == 'right') {
				let className = '.slide-' + Number(slideIndex + 2) + ' ';
				$( className + '.testimonial-box').toggleClass('fadeIn');
			}
		},
		onLeave: function(index, nextIndex, direction){
			if(nextIndex > 1 && !isMobile()) {
				$('.header').addClass('header-invert');
				$('.scroll-btn').addClass('button-invert');
			} else {
				$('.header').removeClass('header-invert');
				$('.scroll-btn').removeClass('button-invert');
			}

			$('.menu li').removeClass('active-menu');
			$($('.menu li')[nextIndex - 1]).addClass('active-menu');
		},
		anchors:['Home', 'Our-Offerings', 'About-Us', 'Tribal-Leadership']
	});

	var currentHref = window.location.hash.substr(0);

	$('.menu li').removeClass('active-menu');
	$("[data-url='"+currentHref+"']").addClass('active-menu');
    
	$('#campFire').on('ended', function () {
	  this.load();
	  this.play();
	});
});

function menuButton() {
	if (isMobile()) {
		menuToggle();
	} else {
		$.fn.fullpage.moveTo(1);
	}
}

function menuToggle() {
	if (isMobile()) {
		$('.menu-box').toggle( "explode", {}, 500 );
	}
}

function isMobile() {
	return ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) );
}

function toggleDesc(element) {
	$(element).find('.member-desc').css({ left : ( $(element.parentElement).offset().left - $(element).offset().left ) });
	$(element).find('.member-desc').stop( true, true ).slideToggle('slow');
	$(element).find('.member-pic').toggleClass('member-active');
	$(element).siblings().toggleClass('fade-member');
}

function showDesc(element) {
	$(element).find('.member-desc').css({ left : ( $(element.parentElement).offset().left - $(element).offset().left ) });
	$(element).find('.member-desc').stop( true, true ).delay(800).slideDown('slow');
	$(element).find('.member-pic').addClass('member-active');
	$(element).siblings().addClass('fade-member');
}

function hideDesc(element) {
	$(element).find('.member-desc').stop( true, true ).delay(800).slideUp('slow');
	$(element).find('.member-pic').removeClass('member-active');
	$(element).siblings().removeClass('fade-member');
}

