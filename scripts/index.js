import showSearchError from "./utils.js";

const setSearchTerm = async (searchTerm = "") => {
    localStorage.setItem('search_term', searchTerm.trim());
};

const searchClickHandler = (searchTerm) => {
    if (!searchTerm) {
        showSearchError();
        return;
    }

    setSearchTerm(searchTerm);
    window.location.href = "/search.html";
}

export default { setSearchTerm, searchClickHandler };
