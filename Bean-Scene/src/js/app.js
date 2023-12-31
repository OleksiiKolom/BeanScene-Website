import * as flsFunctions from './modules/functions.js';

flsFunctions.isWebp();

$(document).ready(function () {
	$('.header__burger').click(function () {
		$('.header__burger, .navigation__list').toggleClass('active');
		$('body').toggleClass('lock');
	});

	$('.navigation__link').click(function () {
		if ($('.navigation__list').hasClass('active')) {
			$('.header__burger, .navigation__list').removeClass('active');
			$('body').removeClass('lock');
		}
	});

	window.addEventListener('scroll', function () {
		scrollY > 0 ? document.querySelector('.header').classList.add('scroll') : document.querySelector('.header').classList.remove('scroll');
	})

	const swiper = new Swiper('.swiper-reviews', {

		loop: true,

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		autoplay: {
			delay: 3000,
			disableOnInteraction: true
		},

		speed: 800,
		autoHeight: true
	});
});