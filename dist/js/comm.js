//index.html
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
}); //header에 메뉴의 a태그를 누르면 해당영역으로 부드럽게 이동하기

gsap.registerPlugin(ScrollTrigger);
const Intromove = gsap.timeline();

Intromove.to(".welcome_wr .welcome_img", {
  duration: 2,
  opacity: 1,
  scale: 1,
  ease: "bounce.out",
});

Intromove.to([".welcome_wr .welcome_txt01", ".welcome_wr .welcome_txt02"], {
  duration: 2,
  opacity: 1,
  y: "50%",
  ease: "bounce.out",
}); //intro부분

//skill 부분
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.create({
  trigger: "#main #skill",
  start: "top top",
  end: "bottom bottom",
  pin: "#main #skill .left",
  scrub: 1,

  onEnter: function () {
    $("#header").addClass("section2");
  },
  onLeaveBack: function () {
    $("#header").removeClass("section2");
  },
});

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
//project
gsap.registerPlugin(ScrollTrigger);
// Select the HTML elements needed for the animation
const horizontalSection = document.querySelector(".horizontal_section");
const wrapper = horizontalSection.querySelector(".wrapper");
const items = wrapper.querySelectorAll(".item");

// Set initial positions of items
items.forEach((item, index) => {
  if (index !== 0) {
    gsap.set(item, { xPercent: 100 });
  }
});

function initScroll() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: horizontalSection,
      pin: true,
      start: "top top",
      end: () => `+=${items.length * 100}%`,
      scrub: 1,
      invalidateOnRefresh: true,
    },
    defaults: { ease: "none" },
  });

  // Animate each item
  items.forEach((item, index) => {
    if (index !== items.length - 1) {
      tl.to(item, {
        scale: 0.9,
        opacity: 0,
      }).to(
        items[index + 1],
        {
          xPercent: 0,
        },
        "<"
      );
    }
  });
}

// Call the function
initScroll();
