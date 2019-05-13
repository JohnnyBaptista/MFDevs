$(document).ready(function () {
	$(window).scroll(function () {
		if ($(window).scrollTop() > 120) {
			$('.menu').addClass('menuAnimation');
			// $('.imagem').addClass('ImagemAnimation');
		} else {
			$('.menu').removeClass('menuAnimation');
			// $('.imagem').removeClass('ImagemAnimation');
		}
	});
});


$(document).ready(function () {
	$('.carousel.carousel-slider').carousel({
		fullWidth: true,
		indicators: true,
		duration: 500
	});

	setInterval(() => {
		$('.carousel').carousel("next");
	}, 5000);
});


