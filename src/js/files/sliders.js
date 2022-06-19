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
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.overviews-slider__body')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.overviews-slider__body', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 32,
			watchOverflow: true,
			loop: true,
			loopAdditionalSlides: 5,
			preloadImages: false,
			// autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.overviews-slider .slider-arrow_prev',
				nextEl: '.overviews-slider .slider-arrow_next',
			},

			// Пагинация
			// pagination: {
			// 	el: '.controls-slider-main__dotts',
			// 	clickable: true,
			// },

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Брейкпоинты
			breakpoints: {
				// 320: {
				// 	slidesPerView: 1,
				// 	spaceBetween: 0,
				// 	autoHeight: true,
				// },
				// 768: {
				// 	slidesPerView: 2,
				// 	spaceBetween: 20,
				// },
				992: {
					slidesPerView: 2,
					spaceBetween: 10,
				},
				// 1268: {
				// 	slidesPerView: 4,
				// 	spaceBetween: 30,
				// },
			},

			// События
			on: {

			}
		});
	}
	if (document.querySelector('.lead__body')) {
		new Swiper('.lead__body', {
			modules: [Pagination, Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 20,
			watchOverflow: true,
			loop: true,
			loopAdditionalSlides: 5,
			preloadImages: false,
			speed: 800,

			// effect: 'fade',
			// autoplay: {
			// 	delay: 3000,
			// 	disableOnInteraction: false,
			// },

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
	if (document.querySelector('.inline-gallery__body')) {
		const thumbsSlider = new Swiper('.gallery-bottom', {
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

		new Swiper('.inline-gallery__body', {
			modules: [Navigation, Pagination, Thumbs],
			spaceBetween: 10,
			loop: true,
			watchOverflow: true,
			observer: true,
			observeParents: true,
			speed: 800,

			navigation: {
				nextEl: ".inline-gallery-slider .slider-arrow_next",
				prevEl: ".inline-gallery-slider .slider-arrow_prev",
			},
			thumbs: {
				swiper: thumbsSlider,
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
	}, 0)
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});