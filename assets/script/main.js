$(document).ready(function () {
	$('input[type="file"]').change(function(){
		var filename = $('input[type=file]').val().replace(/.*(\/|\\)/, '');
		// console.log(filename);
		$("#file").empty();
		$("#file").append(filename+'<i class="spin-css fa fa-spinner fa-spin"></i>');
		$(".fa-spin").css("display", "block");

	});
	$(".fa-spin").hide();
	$(".join-our-tribe").css("display", "none");
	$(".acknowledge").css("display", "none");
	$(".contact-response").css("display","none");
	$('#fullpage').fullpage({
		controlArrows: false,
		easing: 'easeInOutCubic',
		scrollingSpeed: 1000,
		autoScrolling: false,
		css3: true,
		fitToSection: false,
		lockAnchors: false,
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

	$(".send").click(function () {
		$(".resume-form").addClass("animated fadeOut").one(
			'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
			function () {
				$(".resume-form").css("display", "none");
				$(".acknowledge").addClass("animated fadeIn");
				$(".acknowledge").css("display", "flex");
			}
		);
	});

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
	$(".back").click(function () {
		$(".join-our-tribe").addClass("animated fadeOut").one(
			'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
			function () {
				$(".join-our-tribe").css("display", "none");
				$(".triballeadership-white").removeClass("animated fadeOut");
				$(".join-our-tribe").removeClass("animated fadeIn");
				$(".acknowledge").removeClass("animated fadeIn");
				// $(".resume-form").css("display", "flex");
				$(".triballeadership-white").addClass("animated fadeIn");
				$(".triballeadership-white").css("display", "flex");
				$(".page-5 .block-1").css("padding-top", "0px");
				$(".page-5 .block-2").css("padding-top", "50px");
				$(".page-5 .block-2").css("padding-bottom", "50px");
			}
		);
	});
	$(".browse").click(function () {
		$(".resume-form").addClass("animated fadeOut").one(
			'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
			function () {
				$(".resume-form").css("display", "none");
				$(".acknowledge").addClass("animated fadeIn");
				$(".acknowledge").css("display", "flex");
			}
		);
	});
	$(".contact-submit").click(function () {
		$(".contact-form").addClass("animated fadeOut").one(
			'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
			function () {
				$("#contact-name").val("");
				$("#email").val("");
				$("#company").val("");
				$("#phone").val("");
				$("#contact-info").val("");
				$(".contact-form").css("display", "none");
				$(".contact-response").addClass("animated fadeIn");
				$(".contact-response").removeClass("fadeIn");
				$(".contact-form").removeClass("animated");
				$(".contact-response").removeClass("animated");
				$(".contact-form").removeClass("fadeOut");
				$(".contact-response").css("display", "flex");
			}
		);
	});
	$(".contact-back").click(function () {
		$(".contact-response").addClass("animated fadeOut").one(
			'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
			function () {
				$(".contact-response").css("display", "none");
				$(".contact-form").addClass("fadeIn");
				$(".contact-form").css("display", "block");

				$(".contact-form").removeClass("fadeIn");
				$(".contact-response").removeClass("fadeOut");

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
	}, 50000000);
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
