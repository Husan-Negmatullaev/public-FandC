import { isMobile, getResource } from "../functions.js";




export async function pageDevelopers() {

       // Get the modal



    const body = document.body;
    if (location.pathname === "/" || location.pathname === "/developers.html") {
        const data = await getResource("/an_object/");
        const developers = await getResource("/an_object/");
        const area = await getResource("/an_object/");
        const type = await getResource("/an_object/");
        const data_developer = await getResource("/developer/");







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


        data.forEach((char, index) => {
            const propertyContent = document.querySelector(".best-properties__content");
            const propertyItem = document.createElement("div");
            propertyItem.className = "best-properties__item-propertie item-propertie";
            propertyItem.setAttribute("data-index", char.id);
            propertyItem.setAttribute("data-tabs-title", "");
            propertyItem.innerHTML = `
                                           <div class="best-properties__item-propertie item-propertie">
                                <div class="item-propertie__body">
                                    <a href="more.html#${char.id}" class="item-propertie__image-ibg">
                                        <img src="${char.mainphoto}" alt="">
                                        <div class="item-propertie__types">
                                            <span>${char.properties}</span>
                                        </div>
                                        <div class="item-propertie__stickers">
                                            
                                        </div>
                                    </a>
                                    <div class="item-propertie__content">
                                        <a href="#" class="item-propertie__title">${char.title}</a>
                                        <div class="item-propertie__location">
                                           ${char.area}
                                        </div>
                                        <div class="item-propertie__developer">
                                            <img src="img/icons/building.svg" alt="Building icon">
                                            ${char.developer}
                                        </div>
								        <button type="button" data-popup="#video" data-popup-youtube="6S5Zw2WuyFE" class="item-propertie__video-play _icon-play">
                                            Play Video Overview
                                        </button>
                                        <div class="item-propertie__price">
                                            
                                            <span class="item-propertie__value">${char.starting_price}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>`;

            propertyContent.appendChild(propertyItem);


        });
        /* ===================== */

        /* ===================== */
        // Developers

         const overviewsWrapper = document.querySelector(".developers__content");
         data_developer.forEach((char, index) => {
            const div = document.createElement("a");
            div.className = "developers__card lead-card";
            div.innerHTML = `
            <div class="lead-card__body">
                                    <div class="lead-card__image-ibg"><img src="${char.logo}" alt=""></div>
                                    <div class="lead-card__company-logo">
                                        <img src="${char.mainphoto}" alt="">
                                    </div>
                                    <div class="lead-card__content">
                                        <div class="lead-card__title title">${char.name}</div>
                                        <p class="lead-card__text">${char.title_ru_ru}</p>
                                    </div>
                                </div>`;
            overviewsWrapper.appendChild(div)
        })




    }


}
