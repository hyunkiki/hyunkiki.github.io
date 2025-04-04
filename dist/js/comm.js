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

// 3. Skill 섹션

// 4. BANNER 디자인
// banner tit
const btl = gsap.timeline({
  scrollTrigger: {
    trigger: ".banner_tit",
    start: "top 100%",
    end: "bottom 90%",
    scrub: 1,
    markers: true,
  },
});
btl.fromTo(
  ".letter",
  { y: 20, opacity: 0 },
  { y: 0, opacity: 1, duration: 3, ease: "power2.out", stagger: 0.15 }
);

// box1
const tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".banner_img_wr .box1",
    start: "top 100%",
    end: "bottom 90%",
    scrub: 1,
    markers: false,
  },
});
tl1.fromTo(
  ".ban1",
  { clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)" },
  {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    duration: 4,
    ease: "power2.out",
  },
  0
);
tl1.fromTo(
  ".ban_tit1",
  { opacity: 0, y: "70%" },
  {
    opacity: 1,
    y: "0",
    duration: 3,
  }
);

// box2
const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".banner_img_wr .box2",
    start: "top 100%",
    end: "bottom 90%",
    scrub: 1,
    markers: false,
  },
});
tl2.fromTo(
  ".ban2",
  { clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)" },
  {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    duration: 4,
    ease: "power2.out",
  },
  0
);
tl2.fromTo(
  ".ban_tit2",
  { opacity: 0, y: "70%" },
  {
    opacity: 1,
    y: "0",
    duration: 3,
  }
);

// box3
const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".banner_img_wr .box3",
    start: "top 100%",
    end: "bottom 90%",
    scrub: 1,
    markers: false,
  },
});
tl3.fromTo(
  ".ban3",
  { clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)" },
  {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    duration: 4,
    ease: "power2.out",
  },
  0
);
tl3.fromTo(
  ".ban_tit3",
  { opacity: 0, y: "70%" },
  {
    opacity: 1,
    y: "0",
    duration: 3,
  }
);

// box4
const tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".banner_img_wr .box4",
    start: "top 100%",
    end: "bottom 90%",
    scrub: 1,
    markers: false,
  },
});
tl4.fromTo(
  ".ban4",
  { clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)" },
  {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    duration: 4,
    ease: "power2.out",
  },
  0
);
tl4.fromTo(
  ".ban_tit4",
  { opacity: 0, y: "70%" },
  {
    opacity: 1,
    y: "0",
    duration: 3,
  }
);

// 5. SNS 디자인
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
