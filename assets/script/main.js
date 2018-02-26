$(document).ready(function () {
	$('input[type="file"]').change(function(){
		var filename = $('input[type=file]').val().replace(/.*(\/|\\)/, '');
		console.log(filename);
		$("#file").empty();
		$("#file").append(filename);
	});
	$(".join-our-tribe").css("display", "none");
	$('#fullpage').fullpage({
		controlArrows: false,
		easing: 'easeInOutCubic',
		scrollingSpeed: 1000,
		autoScrolling: false,
		css3: true,
		fitToSection: false,
		onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) {
			if (direction == 'right') {
				let className = '.slide-' + Number(slideIndex + 2) + ' ';
				$(className + '.testimonial-box').toggleClass('fadeIn');
				$(className + '.testimonial-content').toggleClass('fadeIn');
				$(className + '.mugshot-steve').toggleClass('fadeIn');
				$(className + '.mugshot-devin').toggleClass('fadeIn');
			}
			$('.carousal').children().removeClass('highlight');
			$($('.carousal').children()[nextSlideIndex]).addClass('highlight');
		},
		onLeave: function (index, nextIndex, direction) {
			if (nextIndex > 1 && !isMobile()) {
				$('.header').addClass('header-invert');
				$('.scroll-btn').fadeOut();
			} else {
				$('.header').removeClass('header-invert');
				$('.scroll-btn').fadeIn();
			}

			$('.menu li').removeClass('active-menu');
			$($('.menu li')[nextIndex - 1]).addClass('active-menu');
		},
		anchors: ['Home', 'Our-Offerings', 'About-Us', 'Tribal-Leadership', 'Join-Our-Tribe', 'Contact-Us']
	});

	var currentHref = window.location.hash.substr(0);

	$('.menu li').removeClass('active-menu');
	$("[data-url='" + currentHref + "']").addClass('active-menu');

	$(".send-resume").click(function () {
		$(".triballeadership-white").addClass("animated fadeOut").one(
			'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
			function () {
				$(".triballeadership-white").css("display", "none");
				$(".join-our-tribe").addClass("animated fadeIn");
				$(".join-our-tribe").css("display", "flex");
				$(".page-5 .block-1").css("padding-top", "60px");
				$(".page-5 .block-2").css("padding-top", "0px");
				$(".page-5 .block-2").css("padding-bottom", "0px");

			}
		);
	});

	var page3ImgSrcs = [
		"assets/images/3_1.png",
		"assets/images/3_2.png",
		"assets/images/3_3.png",
	];
	$('.page-3 .block-1 .sub-block-1').delay(1000).fadeIn(1000, animateBackground());

	function animateBackground() {
		window.setTimeout(function () {
			var url = page3ImgSrcs[page3ImgSrcs.push(page3ImgSrcs.shift()) - 1];
			$('.page-3 .block-1 .sub-block-1').delay(3000).fadeOut(1000, function () {
				$(this).css("background-image", "url(" + url + ")")
			}).fadeIn(1000, animateBackground())
		});
	}

	setInterval(function () {
		$.fn.fullpage.moveSlideRight();
	}, 30000);
});

function menuButton() {
	if (isMobile()) {
		menuToggle();
	} else {
		$.fn.fullpage.moveTo(1, 0);
	}
}

function menuToggle() {
	if (isMobile()) {
		$('.menu-box').toggle("explode", {}, 500);
	}
}

function isMobile() {
	return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
}

function toggleDesc(element) {
	$(element).find('.member-desc').css({
		left: ($(element.parentElement).offset().left - $(element).offset().left)
	});
	$(element).find('.member-desc').stop(true, true).slideToggle('slow');
	$(element).find('.member-pic').toggleClass('member-active');
	$(element).siblings().toggleClass('fade-member');
}

function showDesc(element) {
	$(element).find('.member-desc').css({
		left: ($(element.parentElement).offset().left - $(element).offset().left)
	});
	$(element).find('.member-desc').stop(true, true).delay(800).fadeIn('slow');
	$(element).find('.member-pic').addClass('member-active');
	$(element).siblings().addClass('fade-member');
}

function hideDesc(element) {
	$(element).find('.member-desc').stop(true, true).delay(400).fadeOut('slow');
	$(element).find('.member-pic').removeClass('member-active');
	$(element).siblings().removeClass('fade-member');
}

function goToSlide(event) {
	var element = event.target;
	console.log(element)
	$(element).siblings().removeClass('highlight');
	$(element).addClass('highlight');
	$.fn.fullpage.moveTo(1, event.target.getAttribute("data-slide"));
}

function colorize() {
	$('.title').stop(true, true).delay(1000).toggleClass('title-color');
}
