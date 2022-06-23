import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

window.onload = function () {
    // Header fixing
    const headerElement = document.querySelector('.header');

    const callback = function (entries, observer) {
        if (entries[0].isIntersecting) {
            headerElement.classList.remove('_scroll')
        } else {
            headerElement.classList.add('_scroll')
        }
    }

    const headerObserver = new IntersectionObserver(callback)
    headerObserver.observe(headerElement)


        // Developers Page

    const developerCards = document.querySelectorAll('.developers__card');

    function liveSearch() {
        let searchQuery = document.querySelector(".developers__input").value;

        for (let i = 0; i < developerCards.length; i++) {
            if (developerCards[i].querySelector(".lead-card__title").textContent.toLowerCase()
                .includes(searchQuery.toLowerCase())) {
                developerCards[i].classList.remove("is-hidden");
            } else {
                developerCards[i].classList.add("is-hidden");
            }
        }
    }

    let typingTimer;
    let typeInterval = 100;
    let searchInput = document.querySelector('.developers__input');

    if (developerCards.length > 0) {
        searchInput.addEventListener('keyup', () => {
            clearTimeout(typingTimer);
            typingTimer = setTimeout(liveSearch, typeInterval);
        });
    }

    // Areas Page

    const areasCards = document.querySelectorAll('.areas-city__city-area');

    function liveSearchAres() {
        let searchQuery = document.querySelector(".areas-city__input").value;

        for (let i = 0; i < areasCards.length; i++) {
            if (areasCards[i].querySelector(".city-area__title").textContent.toLowerCase()
                .includes(searchQuery.toLowerCase())) {
                    areasCards[i].classList.remove("is-hidden");
            } else {
                areasCards[i].classList.add("is-hidden");
            }
        }
    }

    let typingTimerAreas;
    let typeIntervalAreas = 100;
    let searchInputAreas = document.querySelector('.areas-city__input');

    if (areasCards.length > 0) {
        searchInputAreas.addEventListener('keyup', () => {
            clearTimeout(typingTimerAreas);
            typingTimerAreas = setTimeout(liveSearchAres, typeIntervalAreas);
        });
    }

    const quizButton = document.querySelector(".quiz__button")

    if (quizButton) {
        quizButton.addEventListener("click", (e) => {
            e.preventDefault()
            Marquiz.showModal('62a9d7fb7cd214004ab0c35a')
        })
    }

    // setTimeout(function () {
    //     flsModules.popup.open("#quiz")
    // }, 4000)
}

