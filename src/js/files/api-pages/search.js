import {isMobile, getResource2,getResource} from "../functions.js";




export async function pageSearch() {

      if (location.pathname === "/" || location.pathname === "/search.html") {
    const params = new URLSearchParams(window.location.search)
          const developers = await getResource("/an_object/");
        const area = await getResource("/an_object/");
        const data = await getResource2(" https://kvartirivdubai.ru/api/an_object/?developer="+params.get('developer')+"&area="+params.get('area')+"&properties="+params.get('type')+"&type="+params.get('lifestyle'));
        const type = await getResource("/an_object/");
        const data_developer = await getResource("/developer/");
        const dataArea = await getResource("/area/");
        const dataType = await getResource("/type/");
        const dataBlog = await getResource("/blog/");


            let developerArray = [];
            var developerTitle
            let developerObject = {};

            for (let i in developers) {

                // Extract the title
                developerTitle = developers[i]['developer'];

                // Use the title as the index
                developerObject[developerTitle] = developers[i];
            }
             for (let x in developerObject) {
                developerArray.push(developerObject[x]);
            }

         developerArray.forEach((char2, index) => {
            const selectContent = document.querySelector(".form-find__select-developer");
            const selectItem = document.createElement("option");
            selectItem.className = "";
            selectItem.innerHTML = `<option selected="">${char2.developer}</option>`;
            selectContent.appendChild(selectItem);

         });


             let areaArray = [];
            var areaTitle
            let areaObject = {};

            for (let i in area) {

                // Extract the title
                areaTitle = area[i]['area'];

                // Use the title as the index
                areaObject[areaTitle] = area[i];
            }
             for (let x in areaObject) {
                areaArray.push(areaObject[x]);
            }

         areaArray.forEach((char2, index) => {
            const selectContent = document.querySelector(".form-find__select-area");
            const selectItem = document.createElement("option");
            selectItem.className = "";
            selectItem.innerHTML = `<option selected="">${char2.area}</option>`;
            selectContent.appendChild(selectItem);

         });


             let typeArray = [];
            var typeTitle
            let typeObject = {};

            for (let i in type) {

                // Extract the title
                typeTitle = type[i]['type'];

                // Use the title as the index
                typeObject[typeTitle] = type[i];
            }
             for (let x in typeObject) {
                typeArray.push(typeObject[x]);
            }

         typeArray.forEach((char2, index) => {
            const selectContent = document.querySelector(".form-find__select-type");
            const selectItem = document.createElement("option");
            selectItem.className = "";
            selectItem.innerHTML = `<option selected="">${char2.type}</option>`;
            selectContent.appendChild(selectItem);

         });



        /* ===================== */
        // Area Properties
        const bestAreaBody = document.querySelector(".best-area__body");
        function numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        var BreakException2 = {};
        var aar2 = 0;
        try {
        dataArea.forEach((char, index) => {

            console.log(aar2);
          if (aar2 === 4) throw BreakException2;
          aar2+=1

            const a = document.createElement("a");
            a.className = "best-area__item item-area";
            a.innerHTML = `
                <div class="item-area__image-ibg"><img data-src="${char.mainphoto}" alt=""></div>
                <div class="item-area__content">
                    <div class="item-area__message">From AED ${char.starting_price}</div>
                    <div class="item-area__info">
                        <div class="item-area__title title title_w">${char.name}</div>
                        <div class="item-area__text">${char.description}</div>
                    </div>
                </div>`;
                bestAreaBody.appendChild(a);
        });
} catch (e) {
  if (e !== BreakException2) throw e;
}
        /* ===================== */

        /* ===================== */
        // Areas
        const areaBody = document.querySelector(".area__body");
        var BreakException = {};
        var aar = 0;
        try {
        dataArea.forEach((char, index) => {
         console.log(aar);
          if (aar === 5) throw BreakException;
          aar+=1
            const a = document.createElement("a");
            a.className = "area__item";
            a.innerHTML = `
                <div class="area__image-ibg"><img data-src="${char.mainphoto}" alt="Dubai island buildings"></div>
                <div class="area__title">
                    ${char.name}
                </div>`;
            areaBody.appendChild(a);
         });
} catch (e) {
  if (e !== BreakException) throw e;
}
        /* ===================== */

        /* ===================== */
        // Overwiews Slider
        const overviewsWrapper = document.querySelector(".overviews-slider__wrapper");
        data_developer.forEach((char, index) => {
            const div = document.createElement("div");
            div.className = "swiper-slide overviews-slider__slide";
            div.innerHTML = `
            <div class="swiper-slide overviews-slider__slide">
                <a href="${char.link}" class="overviews-slider__image-ibg"><img src="${char.mainphoto}" alt=""></a>
                <div class="overviews-slider__subtitle">${char.name}</div>
                <a href="${char.link}" class="button button_small overviews-slider__button">Video Overview</a>
            </div>`;
            overviewsWrapper.appendChild(div)
        })


        /* ===================== */
        // Lead
        const leadWrapper = document.querySelector(".lead__wrapper");
        data_developer.forEach((char, index) => {
            const a = document.createElement("a");
            a.className = "lead__card lead-card swiper-slide";
            a.innerHTML = `
                <div class="lead-card__body">
                    <div class="lead-card__image-ibg"><img data-src="${char.mainphoto}" alt=""></div>
                    <div class="lead-card__company-logo">
                        <img src="${char.logo}" alt="">
                    </div>
                    <div class="lead-card__content">
                        <div class="lead-card__title title" style=" display: -webkit-box;max-width: 450px;-webkit-line-clamp: 2;-webkit-box-orient: vertical; overflow: hidden;">${char.title}</div>
                        <div class="lead-card__text" style=" display: -webkit-box;max-width: 450px;-webkit-line-clamp: 4;-webkit-box-orient: vertical;overflow: hidden;">${char.text}</div>
                    </div>
                </div>`;
            leadWrapper.appendChild(a)
        })
        /* ===================== */

        /* ===================== */
        // News
        const newsWrapper = document.querySelector(".news__body");
        dataBlog.forEach((char, index) => {
            const div = document.createElement("div");
            div.className = "news__card card-news";
            const dateArr = char.created.split('-');
            console.log(dateArr);
            const getMonth = new Date(dateArr[1]).toLocaleDateString("en", {
                month: "long"
            });
            // console.log(typeof dateArr[0]);
            div.innerHTML = `
                <div class="card-news__body">
                    <a href="${char.link}" class="card-news__image-ibg"><img src="${char.mainphoto}" alt=""></a>
                    <div class="card-news__date">
                        <span class="card-news__icon _icon-calendar"></span>
                        <span class="card-news__date-text">
                            ${dateArr[2]} <sup>th</sup> ${getMonth} ${dateArr[0]}
                        </span>
                    </div>
                    <div class="card-news__content">
                        <div class="card-news__type-projects">
                            NEW PROJECTS 
                        </div>
                        <div class="card-news__title">${char.title}</div>
                        <div class="card-news__text">${char.description}</div>
                        <a href="${char.link}" class="card-news__button button button_small">
                            Video Overview
                        </a>
                    </div>
                </div>`;
            newsWrapper.appendChild(div)
        })




     data.forEach((char, index) => {
            const propertyContent = document.querySelector(".properties__content");
            const propertyItem = document.createElement("div");
            propertyItem.className = "properties__item item-properties ";
            propertyItem.setAttribute("data-index", char.id);
            propertyItem.setAttribute("data-tabs-title", "");
            propertyItem.innerHTML = `
                <a href="/more.html" class="item-properties__image-ibg">
                    <img src="${char.mainphoto}" alt="">
                </a>
                <div class="item-properties__content">
                    <div class="item-properties__body">
                        <div class="item-properties__title">${char.title}</div>
                        <div class="item-properties__subtitle">
                            Area: <span class="item-properties__value">
                                ${char.area}
                            </span>
                        </div>
                        <div class="item-properties__position">
                            <img src="./img/icons/building.svg" class="item-properties__icon" alt="Building icon">
                            <span class="item-properties__value">${char.developer}</span>
                        </div>
                        <div class="item-properties__info">
                            <a href="${char.video_link
                        }" class="item-properties__col">
                                <img src="./img/icons/youtube.svg" class="item-properties__icon" alt="Youtube icon">
                                <span class="item-properties__subtitle">
                                    Play Video Overview
                                </span>
                            </a>
                            <a href="${char.tour_360
                        }" class="item-properties__col">
                                <img src="./img/icons/360.svg" class="item-properties__icon" alt="360deg icon">
                                <span class="item-properties__subtitle">
                                    Open 3600 Tour
                                </span>
                            </a>
                        </div>
                        <div class="item-properties__subtitle">
                            from: 
                            <span class="item-properties__price">
                                AED ${char.starting_price.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, ",")}
                            </span>
                        </div>
                    </div>
                    <a href="/more.html#${char.id}" class="item-properties__next">
                        <span class="_icon-arrow-right"></span>
                    </a>
                </div>`;
            propertyContent.appendChild(propertyItem);
        });
};
}