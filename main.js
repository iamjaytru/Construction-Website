AOS.init();
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
    navToggle.style.display = "none";
    navClose.style.display = "block";
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
    navToggle.style.display = "block";
    navClose.style.display = "none";
  });
}

const navLink = document.querySelectorAll(".nav-link");

const linkAction = () => {
  navMenu.classList.remove("show-menu");
  navToggle.style.display = "block";
};

navLink.forEach((n) => n.addEventListener("click", linkAction));

const bgHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", bgHeader);

const swiperService = new Swiper(".services-swiper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 24,
  slidesPerView: "auto",

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);



// window.addEventListener('scroll', () =>{
//   const scrollDown = window.scrollY

// section.forEach(current =>{
//     const sectionHeight = current.offsetHeight,
//           sectionTop = current.offsetTop - 58,
//           sectionId = current.getAttribute('id'),
//           sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

//     if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
//         sectionsClass.classList.add('active-link')
//     }else{
//         sectionsClass.classList.remove('active-link')
//     }                                                    
// })
// })