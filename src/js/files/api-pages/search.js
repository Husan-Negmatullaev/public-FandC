import {isMobile, getResource2,getResource} from "../functions.js";




export async function pageSearch() {

      // Fakes the loading setting a timeout
    setTimeout(function() {
        $('body').addClass('loaded');
    }, 5000);



      if (location.pathname === "/" || location.pathname === "/search.html") {
    const params = new URLSearchParams(window.location.search)

          const developers = await getResource("/an_object/");
        const area = await getResource("/an_object/");
        const data = await getResource2(" https://kvartirivdubai.ru/api/an_object/?developer="+params.get('developer')+"&area="+params.get('area')+"&properties="+params.get('type')+"&type="+params.get('lifestyle')+"&search="+params.get('search'));
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
                                        <a href="more.html#${char.id}" class="item-propertie__title">${char.title}</a>
                                        <div class="item-propertie__location">
                                           <a href = "search.html?types=Type&developer=&area=${char.area}&lifestyle=&min=&max=&search=">${char.area}</a>
                                        </div>
                                        <div class="item-propertie__developer">
                                            <img src="img/icons/building.svg" alt="Building icon">
                                            <a href = "search.html?types=Type&developer=${char.developer}&area=&lifestyle=&min=&max=&search=">${char.developer}</a>
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




};
}