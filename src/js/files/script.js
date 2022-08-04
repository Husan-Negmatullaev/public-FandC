import { isMobile, removeClasses } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

window.onload = function () {
    // Header fixing
    const headerElement = document.querySelector('.header') ?? document.querySelector(".project-header");

    const callback = function (entries, observer) {
        if (entries[0].isIntersecting) {
            // console.log(headerElement);
            headerElement.classList.remove('_scroll')
        } else {
            headerElement.classList.add('_scroll')
        }
    }

    const headerObserver = new IntersectionObserver(callback)
    headerObserver.observe(headerElement)

    const quizButton = document.querySelector(".quiz__button")

    if (quizButton) {
        quizButton.addEventListener("click", (e) => {
            e.preventDefault()
            Marquiz.showModal('62a9d7fb7cd214004ab0c35a')
        })
    }

    const menuLinks = document.querySelectorAll(".menu__link[data-spoller]");
}

document.addEventListener("click", documentActions);

document.addEventListener("mouseover", (event) => {
    const targetItem = event.target;

    if (window.innerWidth > 991) {
        if (targetItem.closest(".menu__item")) {
            const menuItem = targetItem.closest(".menu__item");
            menuItem.classList.add("_hover")
        }
    }
})

document.addEventListener("mouseout", (event) => {
    const targetItem = event.target;
    if (window.innerWidth > 991) {
        if (targetItem.closest(".menu__item")) {
            const menuItem = targetItem.closest(".menu__item");
            menuItem.classList.remove("_hover")
        }
    }
})

function documentActions(e) {
    const targetitem = e.target;
    if (window.innerWidth > 768 && isMobile.any()) {
        if (targetitem.classList.contains("menu-project__link") || targetitem.classList.contains("menu-project__arrow")) {
            // targetitem.classList.toggle("_hover");
            targetitem.closest(".menu-project__item").classList.toggle("_hover");
        }
        if (!targetitem.closest(".menu-project__item") && document.querySelectorAll(".menu-project__item._hover").length > 0) {
            removeClasses(document.querySelectorAll(".menu-project__item._hover"), "_hover")
        }
    }
    if (targetitem.closest(".menu__item")) {
        if (targetitem.closest(".menu__sub-blog")) {
            return;
        }
        targetitem.closest(".menu__item").classList.toggle("_hover");
    }
    if (targetitem.closest("[data-popup-content]")) {
        const dataPopupContent = targetitem.closest("[data-popup-content]").dataset.popupContent.split(",");
        const inputHiddenContents = document.querySelectorAll(".popup-discover__item_hidden input");
        for (let i = 0; i < dataPopupContent.length; i++) {
            const input = inputHiddenContents[i];
            input.value = dataPopupContent[i];
        }
        // dataPopupContent.forEach((content, id) => {
        //     inputHiddenContents[id].value = content;
        // });
    }
}