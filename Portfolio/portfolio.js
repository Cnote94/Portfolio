window.addEventListener("scroll", () => {
    let content = document.querySelector(".skills-link")


    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;

    if (contentPosition < screenPosition) {

        content.classList.add("activeX");

    } else {
        content.classList.remove("activeX");
    }
})
window.addEventListener("scroll", () => {
    let content = document.querySelector(".nextlevel")


    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;

    if (contentPosition < screenPosition) {

        content.classList.add("activeY");

    } else {
        content.classList.remove("activeY");
    }
})