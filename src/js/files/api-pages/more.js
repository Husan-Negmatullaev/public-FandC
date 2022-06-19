import { isMobile, getResource, getHash, getDigFormat, getDigFromString } from "../functions.js";
import { flsModules } from "../modules.js";


// https://kvartirivdubai.ru/api/an_object/
export async function pageMore() {
    const body = document.body
    if (location.pathname === "/more.html") {


        // Get the modal
var modal = document.getElementById("myModal");
    modal.style.display = "none";




// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";

}

// When the user clicks on <span> (x), close the modal


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

        const dataCurrentObject = await getResource(`/an_object/${getHash()}`);
        const dataDeveloper = await getResource("/developer/")
        const dataAllObject = await getResource("/an_object/")


        /* ======================== */
        // Apartment
        const apartmentPrice = document.querySelector('.apartments__info-number');
        const apartmentPrice2 = document.createElement("div");
        apartmentPrice2.className = "apartments__info-number";
        apartmentPrice2.innerHTML = `<p>${dataCurrentObject.starting_price}</p>`;
        apartmentPrice.appendChild(apartmentPrice2);

        const apartmentHandover = document.querySelector('.apartments__info-number2');
        const apartmentHandover2 = document.createElement("div");
        apartmentHandover2.className = "apartments__info-number";
        apartmentHandover2.innerHTML = `<h4>${dataCurrentObject.post_handover}</h4>`;
        apartmentHandover.appendChild(apartmentHandover2);

         const apartmentBooking = document.querySelector('.apartments__info-number3');
        const apartmentBooking2 = document.createElement("div");
        apartmentBooking2.className = "apartments__info-number";
        apartmentBooking2.innerHTML = `<h4>${dataCurrentObject.booking}</h4>`;
        apartmentBooking.appendChild(apartmentBooking2);




        const apartmentTitle = document.querySelector('.apartments__title');
        apartmentTitle.textContent = dataCurrentObject.title;

        const apartmentSafe = document.querySelector('.apartments__safe');
        apartmentSafe.style.marginTop = apartmentTitle.offsetHeight+20+'px';

        const apartmentText = document.querySelector('.apartments__text');
        apartmentText.innerHTML = dataCurrentObject.description

        const apartmentWrapper = document.querySelector('.apartments-slider__wrapper');
        dataCurrentObject.object_gallery.unshift({
            id: 0,
            image: dataCurrentObject.mainphoto,
            object_gallery: 1
        });

        dataCurrentObject.object_gallery.forEach((item) => {
            const div = document.createElement('div');
            div.className = "apartments-slider__slide swiper-slide";
            div.innerHTML = `
                <div object-plan="${item.object_gallery}" class="apartments-slider__image-ibg">
                    <img src="${item.image}" alt="">
                </div>`;
            apartmentWrapper.appendChild(div)
        });
        // console.dir(apartmentTitle, apartmentTitle.offsetHeight);
        /* ======================== */

        /* ======================== */
        // Discover
        const discoverTitle = document.querySelector('.discover-content-image__title');
        discoverTitle.textContent = dataCurrentObject?.title_two_ru_ru ? dataCurrentObject.title_two : dataCurrentObject.title_en_us;

        const discoverImage = document.querySelector('.discover-content-image__image-ibg img');
        const discoverImageSmall = document.querySelector('.discover-content-image__image-small');
        discoverImage.src = dataCurrentObject.photo;
        discoverImageSmall.src = dataCurrentObject.photo_two;

        const discoverText = document.querySelector('.discover__text');
        discoverText.innerHTML = dataCurrentObject.text_ru_ru;
        /* ======================== */

        /* ======================== */
        // Gallery
        // inline-gallery__wrapper
        const inlineGalleryWrapper = document.querySelector(".inline-gallery__wrapper");
        dataCurrentObject.exterior_gallery.forEach((item) => {
            const div = document.createElement("div");
            div.className = "inline-gallery__slide swiper-slide";
            div.innerHTML = `
                <div exterior-gallery="${item.exterior_gallery}" class="inline-gallery__image-ibg"><img src="${item.exterior}" alt=""></div>
            `;
            inlineGalleryWrapper.appendChild(div);
        })
        
        const galleryBottomWrapper = document.querySelector('.gallery-bottom__wrapper');
        dataCurrentObject.exterior_gallery.forEach((item) => {
            const div = document.createElement('div');
            div.className = "gallery-bottom__slide swiper-slide";
            div.innerHTML = `
                <div exterior-gallery="${item.exterior}" class="gallery-bottom__image-ibg"><img src="${item.exterior}" alt=""></div>
            `;
            galleryBottomWrapper.appendChild(div);
        });
        /* ======================== */
        

        /* ======================== */
        // located
        const locatedTopLeft = document.querySelector('.located-top__image-1-ibg img');
        const locatedTopRight = document.querySelector('.located-top__image-2-ibg img');
        const locatedBottomImage = document.querySelector('.located-bottom__image-ibg img');
        const locatedTopTitle = document.querySelector('.located-top__title');
        const locatedBottomText = document.querySelector('.located-bottom__text');
        locatedTopLeft.src = dataCurrentObject.photo_three;
        locatedTopRight.src = dataCurrentObject.photo_four;
        locatedBottomImage.src = dataCurrentObject.mainphoto_two;
        locatedTopTitle.textContent = dataCurrentObject.title_three;
        locatedBottomText.innerHTML = dataCurrentObject.content;
        /* ======================== */

        /* ======================== */
        // advantages
        const advantagesBody = document.querySelector('.advantages-time__body');
        dataCurrentObject.object_logo_gallery.forEach((item) => {
            const div = document.createElement("div");
            div.className = "advantages__card advantages-card";
            div.innerHTML = `
                <div class="advantages-card__content">
                    <div class="advantages-card__image">
                        <img src="${item.logo}" alt="">
                    </div>
                    <div class="advantages-card__title">15 Minutes</div>
                    <div class="advantages-card__subtitle">to Downtown Dubai</div>
                </div>
            `;

            advantagesBody.appendChild(div);
        })
        /* ======================== */

        /* ======================== */
        // bedroom

        // const bedroomTabsNavigation = document.querySelector('.bedroom-tabs__navigation');
        const bedroomTabsContent = document.querySelector('.bedroom-tabs__wrapper');
        dataCurrentObject.object_plan.forEach((item, index) => {
            // const button = document.createElement("button");
            // button.className = `bedroom-tabs__title tabs__title ${index === 0 && '_tab-active'}`;
            // button.setAttribute("type", "button");
            // button.textContent = index + 1 + " bedroom";

            const div = document.createElement("div");
                div.setAttribute("object-plan", item.object_plan)
                div.className = "bedroom-tabs-content__body swiper-slide";
                div.innerHTML = `
                    <div class="bedroom-tabs-content__content">
                        <div class="bedroom-tabs-content__title">${item.name}</div>
                        <div class="bedroom-tabs-content__area-info">
                            <div class="bedroom-tabs-content__area">
                                <span class="_icon-suite-area"></span>
                                Suite Area: ${item.suite_area} sqft
                            </div>
                            <div class="bedroom-tabs-content__area">
                                <span class="_icon-total-area"></span>
                                Total Area: ${item.total_area} sqft
                            </div>
                        </div>
                        <a href="" class="bedroom-tabs-content__button button button_small-large">Получить все планы флоры</a>
                        <br>
                        <a href="" class="bedroom-tabs-content__button button button_small-large-transparent">Скачать брошюру</a>
                    </div>
                    <div class="bedroom-tabs-content__image">
                        <div class="bedroom-tabs-content__image-ibg"><img src="${item.plan}" alt=""></div>
                    </div>
                `;
            bedroomTabsContent.appendChild(div);
            // bedroomTabsNavigation.appendChild(button);
            // console.log(item, index);
            // bedroomTabsNavigation.innerHTML = `
            //     <button type="button" class="bedroom-tabs__title tabs__title">${index + 1} bedroom</button>
            // `;
        })

        /* ======================== */

        /* ======================== */
        // payment
        const paymentTitle = document.querySelector(".payment__title");
        paymentTitle.textContent = dataCurrentObject.booking;

        const paymentContent = document.querySelector(".payment__content");
        dataCurrentObject.second_object_logo_gallery.forEach((item) => {
            const div = document.createElement("div");
            div.className = "payment__item item-payment";
            div.innerHTML = `
                <div second-object-logo-gallery="${item.second_object_logo_gallery}" class="item-payment__body">
                    <div class="item-payment__image-ibg"><img src="${item.second_logo}" alt=""></div>
                    <div class="item-payment__text">On Booking</div>
                </div>`;

            paymentContent.appendChild(div);
        })
        /* ======================== */

        /* ======================== */
        // FC-video
        // const fcButtonVideo = document.querySelector(".fc-video__button");
        // const regexp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        // const match = dataCurrentObject.video_link.match(regexp);
        // fcButtonVideo.dataset.popupYoutube = (match && match[7].length==11) ? match[7] : false;
        /* ======================== */

        /* ======================== */
        // Properties-Filter
        // const propertiesFilterContent = document.querySelector(".properties-filter .properties__content");
        // dataAnObject.forEach((char, index) => {
        //     const div = document.createElement("div");
        //     div.className = `properties__item item-properties ${char.properties.join(' ')}`;
        //     div.innerHTML = `
        //         <a href="/more.html" class="item-properties__image-ibg">
        //             <img src="${char.mainphoto}" alt="">
        //         </a>
        //         <div class="item-properties__content">
        //             <div class="item-properties__body">
        //                 <div class="item-properties__title">${char.area}</div>
        //                 <div class="item-properties__subtitle">
        //                     Area: <span class="item-properties__value">
        //                         ${dataAllObject[index]?.name ? dataAllObject[index].name : ''}
        //                     </span>
        //                 </div>
        //                 <div class="item-properties__position">
        //                     <img src="./img/icons/building.svg" class="item-properties__icon" alt="Building icon">
        //                     <span class="item-properties__value">Azizi</span>
        //                 </div>
        //                 <div class="item-properties__info">
        //                     <a href="${
        //                         char.video_link
        //                     }" class="item-properties__col">
        //                         <img src="./img/icons/youtube.svg" class="item-properties__icon" alt="Youtube icon">
        //                         <span class="item-properties__subtitle">
        //                             Play Video Overview
        //                         </span>
        //                     </a>
        //                     <a href="${
        //                         char.tour_360
        //                     }" class="item-properties__col">
        //                         <img src="./img/icons/360.svg" class="item-properties__icon" alt="360deg icon">
        //                         <span class="item-properties__subtitle">
        //                             Open 3600 Tour
        //                         </span>
        //                     </a>
        //                 </div>
        //                 <div class="item-properties__subtitle">
        //                     from:
        //                     <span class="item-properties__price">
        //                         AED ${char.starting_price.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, ",")}
        //                     </span>
        //                 </div>
        //             </div>
        //             <a href="/more.html#${char.id}" class="item-properties__next">
        //                 <span class="_icon-arrow-right"></span>
        //             </a>
        //         </div>`;
        //     propertiesFilterContent.appendChild(div);
        // })

        const $filterContent = $(".properties-filter .properties__content")
            .isotope({
                itemSelector: ".properties__item",
            });

        $('.properties-filter__actions').on( 'click', 'button', function() {
            var sortValue = $(this).attr('data-filter');
            $filterContent.isotope({ filter: sortValue });
        });
            
        $('.properties-filter__actions').each( function( i, buttonGroup ) {
            var $buttonGroup = $( buttonGroup );
            $buttonGroup.on( 'click', 'button', function() {
                $buttonGroup.find('.is-checked').removeClass('is-checked');
                $( this ).addClass('is-checked');
            });
        });
              

        /* ======================== */
    }
}
