$(document).ready(function() {
	$(".join-our-tribe").css("display","none");
	$('#fullpage').fullpage({
		controlArrows: false,
		easing: 'easeInOutCubic',
		scrollingSpeed: 1000,
		scrollOverflow: true,
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){
			if(direction == 'right') {
				let className = '.slide-' + Number(slideIndex + 2) + ' ';
				$( className + '.testimonial-box').toggleClass('fadeIn');
			}
			$('.carousal').children().removeClass('highlight');
			$($('.carousal').children()[nextSlideIndex]).addClass('highlight');
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
		anchors:['Home', 'Our-Offerings', 'About-Us', 'Tribal-Leadership', 'Join-Our-Tribe', 'Contact-Us']
	});

	var currentHref = window.location.hash.substr(0);

	$('.menu li').removeClass('active-menu');
	$("[data-url='"+currentHref+"']").addClass('active-menu');

	$('#campFire').on('ended', function () {
	  this.load();
	  this.play();
	});
	$('#campFire')[0].play();

	$(".send-resume").click(function() {
	  $( ".triballeadership-white" ).addClass("animated fadeOut").one(
	    'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
	    function(){
	      $(".triballeadership-white").css("display","none");
	      $(".join-our-tribe").addClass("animated fadeIn");
	      $(".join-our-tribe").css("display","flex");

	    }
	  );
	});

	var page3ImgSrcs =[
	    "assets/images/3_1.png",
	    "assets/images/3_2.png",
	    "assets/images/3_3.png",
	];
	$('.page-3 .block-1 .sub-block-1').delay(1000).fadeIn(1000, animateBackground());
	function animateBackground() {
	    window.setTimeout(function(){
	        var url = page3ImgSrcs[page3ImgSrcs.push(page3ImgSrcs.shift()) - 1];
	        $('.page-3 .block-1 .sub-block-1').delay(3000).fadeOut(1000, function(){
	            $(this).css("background-image", "url(" + url + ")")
	        }).fadeIn(1000, animateBackground())
	    });
	}

	setInterval(function () {
        $.fn.fullpage.moveSlideRight();
    }, 9000);
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

function goToSlide(event) {
	var element = event.target;console.log(element)
	$(element).siblings().removeClass('highlight');
	$(element).addClass('highlight');
	$.fn.fullpage.moveTo(1, event.target.getAttribute("data-slide"));
}
