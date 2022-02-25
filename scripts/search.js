import showSearchError from "./utils.js";
import getProperties from '../data/index.js';

const renderSearchData = (main) => {
    const searchTerm = (localStorage.getItem('search_term') || "").trim();
    if (!searchTerm) {
        showSearchError();
    }

    const searchData = getProperties(searchTerm).filter(property => property.propertyImage && property.neighborhood && property.price?.lead?.formatted);
    searchData.forEach((data) => {
        const container = document.createElement('div');
        container.className = 'search-container';
        container.onclick = () => window.location.href = '/pay.html';

        const image = document.createElement('img');
        image.className = "search-image";
        image.src = data.propertyImage.image.url;


        const right = document.createElement('div');
        right.className = "search-right";

        const heading = document.createElement('h1');
        heading.innerText = data.name;

        const subHeading = document.createElement('h2');
        subHeading.innerText = data.neighborhood.name;

        const desc1 = document.createElement('h3');
        desc1.innerText = data.sponsoredListing?.detailsHeadline || "";

        const desc2 = document.createElement('h3');
        desc2.innerText = data.sponsoredListing?.details || "";

        const footer = document.createElement('div');
        footer.className = "search-footer";

        const footerLeft = document.createElement('div');
        footerLeft.className = "search-footer-left";

        (data.offerSummary?.messages || []).forEach(offer => {
            const offerElement = document.createElement('h3');
            offerElement.innerText = offer.message;
            offerElement.className = "green";

            footerLeft.appendChild(offerElement);
        })

        const reviewContainer = document.createElement('div');
        reviewContainer.className = "search-review-container";
        reviewContainer.innerText = data.reviews?.localizedSubtitleA11y?.value || data.reviews.localizedSubtitle;

        footerLeft.appendChild(reviewContainer);

        const footerRight = document.createElement('div');
        footerRight.className = "search-footer-right";

        const price = document.createElement('h2');
        price.innerText = data.price.lead.formatted;

        const perNight = document.createElement('h3');
        perNight.innerText = 'per night';

        const discalimer = document.createElement('h4');
        discalimer.innerText = 'Excludes taxes and fees';

        footerRight.appendChild(price);
        footerRight.appendChild(perNight);
        footerRight.appendChild(discalimer);

        footer.appendChild(footerLeft);
        footer.appendChild(footerRight);

        right.appendChild(heading);
        right.appendChild(subHeading);
        right.appendChild(desc1);
        right.appendChild(desc2);
        right.appendChild(footer);

        container.appendChild(image);
        container.appendChild(right);


        main.appendChild(container);
    })
}

export default renderSearchData;