/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination, Thumbs } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	if (document.querySelector('.overviews-slider__body')) { 
		new Swiper('.overviews-slider__body', { 
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 32,
			watchOverflow: false,
			loop: true,
			loopAdditionalSlides: 5,
			preloadImages: false,
			speed: 800,

			navigation: {
				prevEl: '.overviews-slider .slider-arrow_prev',
				nextEl: '.overviews-slider .slider-arrow_next',
			},

			breakpoints: {
				992: {
					slidesPerView: 2,
					spaceBetween: 10,
				},
			},
		});
	}
	if (document.querySelector('.lead__body')) {
		new Swiper('.lead__body', {
			modules: [Pagination, Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 20,
			watchOverflow: false,
			loop: true,
			loopAdditionalSlides: 5,
			preloadImages: false,
			speed: 800,

			navigation: {
				prevEl: '.lead .slider-arrow_prev',
				nextEl: '.lead .slider-arrow_next',
			},

			pagination: {
				el: ".lead__pagination",
				clickable: true,
			},

			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 20,
				},
				991.98: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
			},
		});
	}
	if (document.querySelector('.apartments-slider__body')) {
		new Swiper('.apartments-slider__body', {
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 10,
			watchOverflow: true,
			loop: false,
			navigation: {
				prevEl: '.apartments .apartments-slider-controls_prev',
				nextEl: '.apartments .apartments-slider-controls_next',
			},
		});
	}
	if (document.querySelector('.gallery-interier__content')) {
		const thumbsInterier = new Swiper('.thumbs-interier', {
			modules: [Navigation, Pagination, Thumbs],
			watchOverflow: true,
			observer: true,
			observeParents: true,
			spaceBetween: 10,
			slidesPerView: 2,
			watchSlidesProgress: true,
			loop: true,
			speed: 800,

			breakpoints: {
				991.98: {
					slidesPerView: 4,
				},
				768.98: {
					slidesPerView: 3,
				},
			}
		})

		new Swiper('.gallery-interier__content', {
			modules: [Navigation, Pagination, Thumbs],
			spaceBetween: 10,
			loop: true,
			watchOverflow: true,
			observer: true,
			observeParents: true,
			speed: 800,

			navigation: {
				nextEl: ".inline-gallery-slider__arrows .slider-arrow_next",
				prevEl: ".inline-gallery-slider__arrows .slider-arrow_prev",
			},
			thumbs: {
				swiper: thumbsInterier,
			},
		})
	}
	if (document.querySelector('.gallery-exterier__content')) {
		const thumbsInterier = new Swiper('.thumbs-exterier', {
			modules: [Navigation, Pagination, Thumbs],
			watchOverflow: true,
			observer: true,
			observeParents: true,
			spaceBetween: 10,
			slidesPerView: 2,
			watchSlidesProgress: true,
			loop: true,
			speed: 800,

			breakpoints: {
				991.98: {
					slidesPerView: 4,
				},
				768.98: {
					slidesPerView: 3,
				},
			}
		})

		new Swiper('.gallery-exterier__content', {
			modules: [Navigation, Pagination, Thumbs],
			spaceBetween: 10,
			loop: true,
			watchOverflow: true,
			observer: true,
			observeParents: true,
			speed: 800,

			navigation: {
				nextEl: ".inline-gallery-slider__arrows .slider-arrow_next",
				prevEl: ".inline-gallery-slider__arrows .slider-arrow_prev",
			},
			thumbs: {
				swiper: thumbsInterier,
			},
		})
	}
	if (document.querySelector('.bedroom-tabs__content')) {
		new Swiper('.bedroom-tabs__content', {
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 20,
			watchOverflow: false,
			loop: true,
			preloadImages: false,
			speed: 800,

			navigation: {
				prevEl: '.bedroom-tabs__content .slider-arrow_prev',
				nextEl: '.bedroom-tabs__content .slider-arrow_next',
			},

			pagination: {
				el: ".bedroom-tabs__content .bedroom-tabs-pagination",
				clickable: true,
				renderBullet: function (index, className) {
					return `
						<span class="${className} bedroom-tabs-pagination__item">Plan ${index + 1}</span>
					`
				},
			},
		})
	}
	if (document.querySelector('.trusted-slider__body')) {
		new Swiper('.trusted-slider__body', {
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 20,
			watchOverflow: false,
			loop: true,
			preloadImages: false,
			speed: 800,

			navigation: {
				prevEl: '.trusted-slider__body .slider-arrow_prev',
				nextEl: '.trusted-slider__body .slider-arrow_next',
			},

			pagination: {
				el: ".trusted-slider__body .trusted-slider__pagination",
				clickable: true,
			},
		})
	}
	if (document.querySelector('.news__body')) {
		new Swiper('.news__body', {
			modules: [Pagination, Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 2,
			spaceBetween: 20,
			watchOverflow: true,
			loop: true,
			loopAdditionalSlides: 2,
			preloadImages: false,
			speed: 800,

			navigation: {
				prevEl: '.news__body .slider-arrow_prev',
				nextEl: '.news__body .slider-arrow_next',
			},

			pagination: {
				el: ".news__pagination",
				clickable: true,
			},

			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 20,
				},
				991.98: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
			},
		});
	}
	if (document.querySelector('.banner__body')) {
		new Swiper('.banner__body', {
			modules: [Pagination, Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 20,
			watchOverflow: false,
			loop: true,
			loopAdditionalSlides: 2,
			preloadImages: false,
			speed: 800,

			pagination: {
				el: ".banner__pagination",
				clickable: true,
			},
		});
	}
	// if (document.querySelector('.areas-city__body')) {
	// 	new Swiper('.areas-city__body', {
	// 		modules: [Pagination, Navigation],
	// 		observer: true,
	// 		observeParents: true,
	// 		slidesPerView: 1,
	// 		spaceBetween: 20,
	// 		watchOverflow: true,
	// 		loop: true,
	// 		loopAdditionalSlides: 2,
	// 		preloadImages: false,
	// 		speed: 800,

	// 		pagination: {
	// 			el: ".areas-city__pagination",
	// 			clickable: true,
	// 		},

	// 		breakpoints: {
	// 			767.98: {
	// 				slidesPerView: 1,
	// 				spaceBetween: 15,
	// 			},
	// 			991.98: {
	// 				slidesPerView: 2,
	// 				spaceBetween: 20,
	// 			},
	// 		},
	// 	});
	// }
	if (document.querySelector('.developers__body')) {
		new Swiper('.developers__body', {
			modules: [Pagination, Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 3,
			spaceBetween: 20,
			watchOverflow: true,
			loop: true,
			loopAdditionalSlides: 2,
			preloadImages: false,
			speed: 800,

			pagination: {
				el: ".developers__pagination",
				clickable: true,
			},

			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 10,
				},
				767.98: {
					slidesPerView: 2,
					spaceBetween: 15,
				},
				991.98: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
			},
		});
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	setTimeout(function () {
		initSliders();
	}, 1500)
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});