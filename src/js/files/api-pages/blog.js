import {getResource} from "../functions.js";


export async function pageBlog() {

      // Fakes the loading setting a timeout
    setTimeout(function() {
        $('body').addClass('loaded');
    }, 5000);


    const body = document.body;
    if (location.pathname === "/blog.html") {

        const blog = await getResource("/blog/");

            const overviewsWrapper = document.querySelector(".news-blog__body");

            blog.forEach((char, index) => {
                const div = document.createElement("div");
                div.className = "news-blog__card card-news";
                div.innerHTML = `
               <div class="card-news__body">
                                <a href="/sub-blog.html#${char.id}" class="card-news__image-ibg"><img data-src="${char.mainphoto}" alt=""></a>
                                <div class="card-news__date">
                                    <span class="card-news__icon _icon-calendar"></span>
                                    <span class="card-news__date-text">
                                        ${char.created}
                                    </span>
                                </div>
                                <div class="card-news__content">
                                    <div class="card-news__type-projects">
                                        
                                    </div>
                                    <div class="card-news__title">${char.title}</div>
                                    <div class="card-news__text">${char.description_ru_ru}</div>
                                    <a href="${char.link}" class="card-news__button button button_small">
                                        Video Overview
                                    </a>
                                </div>
                            </div>`;
                overviewsWrapper.appendChild(div)
            })


              // Get the modal
var modal = document.getElementById("myModal");

    modal.style.display = "none";




// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal


// When the user clicks on <span> (x), close the modal


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


    }}