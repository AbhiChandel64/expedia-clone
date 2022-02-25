const getHeader = () => {
    return `
        <div class="header-left">
            <img src="https://www.expedia.co.in/_dms/header/logo.svg?locale=en_GB&amp;siteid=27&amp;2" alt="expedia logo"
                class="large-logo" id="header-logo">
            <select>
                <option value="more_travel">More travel</option>
                <option value="stays">Stays</option>
                <option value="flights">Flights</option>
                <option value="cars">Cars</option>
                <option value="packages">Packages</option>
                <option value="holiday_activities">Holiday Activities</option>
            </select>
        </div>

        <div class="header-right">
            <div class="header-right-english">
                <svg class="header-right-globe" aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"><svg>
                        <path
                            d="M11.99 2A10 10 0 1012 21.99 10 10 0 0011.99 2zm6.93 6h-2.95a15.65 15.65 0 00-1.38-3.56A8.03 8.03 0 0118.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82A14.09 14.09 0 0112 4.04zM4.26 14a8.17 8.17 0 010-4h3.38a16.45 16.45 0 000 4H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.99 7.99 0 015.08 16zm2.95-8H5.08a7.99 7.99 0 014.33-3.56A15.65 15.65 0 008.03 8zM12 19.96A14.09 14.09 0 0110.09 16h3.82A14.09 14.09 0 0112 19.96zM14.34 14H9.66a14.49 14.49 0 010-4h4.68a14.5 14.5 0 010 4zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 01-4.33 3.56zM16.36 14c.16-1.34.16-2.66 0-4h3.38a8.17 8.17 0 010 4h-3.38z">
                        </path>
                    </svg></svg>
                <a href="#">English</a>
            </div>
            <a href="#">Support</a>
            <a href="#">Trips</a>
            <a href="/signIn.html">Sign in</a>
        </div>
    `;
}

export default getHeader;