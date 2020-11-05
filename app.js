function toggleSearchInputVisibility() {

    const searchBlock = document.querySelector("header nav.personal-links div");

    if(searchBlock.className === "") {
        searchBlock.className = "active";
    } else {
        searchBlock.className = "";
    }
}

function toggleLinksVisibility() {

    const dropdownMenu = document.querySelector("header nav.redirect-links div")

    if(dropdownMenu.className === "") {
        dropdownMenu.className = "active"
    } else {
        dropdownMenu.className = ""
    }
}