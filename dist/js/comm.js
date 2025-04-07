gsap.registerPlugin(ScrollTrigger);

// 1. intro 애니메이션
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
});

// 2. Profile 섹션 애니메이션 (DOMContentLoaded 후 실행)
document.addEventListener("DOMContentLoaded", () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".profile_wr",
      start: "top 80%",
      end: "top 30%",
      scrub: 1,
      markers: false,
    },
  });

  tl.fromTo(
    ".pro_img",
    { opacity: 0, x: -100 },
    { opacity: 1, x: 0, duration: 3, ease: "power2.out" },
    0
  ).fromTo(
    ".txt_box",
    { opacity: 0, x: 100 },
    { opacity: 1, x: 0, duration: 3, ease: "power2.out" },
    0
  );
});

// 3. BANNER 디자인
// banner tit

// 4. SNS 디자인
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  speed: 5000,
  autoplay: { delay: 0, disableOnInteraction: false },
  freeMode: true,
  freeModeMomentum: false,
  breakpoints: {
    600: { slidesPerView: 2, spaceBetween: 30 },
    1024: { slidesPerView: 3, spaceBetween: 30 },
  },
});

// 6. Project 섹션
const horizontalSection = document.querySelector(".horizontal_section");
const wrapper = horizontalSection.querySelector(".wrapper");
const items = wrapper.querySelectorAll(".item");

items.forEach((item, index) => {
  if (index !== 0) gsap.set(item, { xPercent: 100 });
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

  items.forEach((item, index) => {
    if (index !== items.length - 1) {
      tl.to(item, { scale: 0.9, opacity: 0 }).to(
        items[index + 1],
        { xPercent: 0 },
        "<"
      );
    }
  });
}

// 프로젝트 섹션 스크롤 초기화 실행
initScroll();
