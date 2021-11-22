// const navbar = document.querySelector(".navBar");
// const service = document.querySelector(".section2");
// const sticky = service.offsetTop;


// function navBarFixed() {
//     if (window.pageYOffset > sticky) {
//         navbar.classList.add(".sticky")
//     } else {
//         navbar.classList.remove(".sticky")
//     }
// }


const navbar = document.querySelector(".navBar");
const services = document.querySelector("#section2");
const sticky = services.offsetTop;

navSticky = () => {
    if (window.pageYOffset > sticky) {
        navbar.classList.add(".sticky")
    } else {
        navbar.classList.remove(".sticky")
    }
}