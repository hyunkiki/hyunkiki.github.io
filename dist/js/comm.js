gsap.registerPlugin(ScrollTrigger);

// 1. Intro 애니메이션
const introMove = gsap.timeline();
introMove
  .to(".welcome_wr .welcome_img", {
    duration: 2,
    opacity: 1,
    scale: 1,
    ease: "bounce.out",
  })
  .to([".welcome_wr .welcome_txt01", ".welcome_wr .welcome_txt02"], {
    duration: 2,
    opacity: 1,
    y: "50%",
    ease: "bounce.out",
  });

// 2. Profile 섹션 애니메이션
document.addEventListener("DOMContentLoaded", () => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".profile_wr",
        start: "top 80%",
        end: "top 30%",
        scrub: 1,
      },
    })
    .fromTo(
      ".pro_img",
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 3, ease: "power2.out" }
    )
    .fromTo(
      ".txt_box",
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 3, ease: "power2.out" },
      0
    );
});

// 3. skill 부분
document.addEventListener("DOMContentLoaded", function () {
  const skillSection = document.querySelector(".skill");
  const bars = document.querySelectorAll(".bar-fill");
  let animated = false;

  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight * 0.8;
  }

  function handleScroll() {
    if (!animated && isInViewport(skillSection)) {
      bars.forEach((bar) => bar.classList.add("start"));
      animated = true;
    }
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // 초기 로딩 시 체크
});
// 4. SNS 디자인 Swiper
new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  speed: 5000,
  autoplay: { delay: 0, disableOnInteraction: false },
  freeMode: true,
  freeModeMomentum: false,
  breakpoints: {
    600: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});

// 5. Project 섹션 (가로 스크롤)
const horizontalSection = document.querySelector(".horizontal_section");
const wrapper = horizontalSection.querySelector(".wrapper");
const items = wrapper.querySelectorAll(".item");

// 첫 번째 아이템 제외하고 오른쪽으로 숨김
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
initScroll();

// 6. Modal (이미지 클릭 시 확대)
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal_img");
const closeBtn = document.querySelector(".close");

// banner_img만 이벤트 등록
document.querySelectorAll(".banner_img").forEach((thumb) => {
  thumb.addEventListener("click", function () {
    modal.style.display = "flex";
    modalImg.src = this.src;

    // 원본 사이즈 유지
    modalImg.style.maxWidth = "none";
    modalImg.style.width = this.naturalWidth + "px";
    modalImg.style.height = "auto";
  });
});

// 닫기 버튼
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
