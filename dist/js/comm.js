// //index.html
// document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//   anchor.addEventListener("click", function (e) {
//     e.preventDefault();

//     document.querySelector(this.getAttribute("href")).scrollIntoView({
//       behavior: "smooth",
//     });
//   });
// }); //header에 메뉴의 a태그를 누르면 해당영역으로 부드럽게 이동하기

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

//profile부분
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".profile_wr",
      start: "top 80%",
      end: "top 30%",
      scrub: 1,
      // markers: true,
    },
  });

  // 프로필 이미지 애니메이션
  tl.fromTo(
    ".pro_img",
    { opacity: 0, x: -100 },
    { opacity: 1, x: 0, duration: 3, ease: "power2.out" },
    0 // 동시에 시작
  );

  // 텍스트 박스 애니메이션 (연결된 순차 애니메이션)
  tl.fromTo(
    ".txt_box",
    { opacity: 0, x: 100 },
    { opacity: 1, x: 0, duration: 3, ease: "power2.out" },
    0 // 동시에 시작
  );
});

//skill 부분
gsap.registerPlugin(ScrollTrigger);
// ScrollTrigger 초기화 함수
function initScrollTrigger() {
  ScrollTrigger.create({
    trigger: "#main .skill",
    start: "top top",
    end: "bottom bottom",
    pin: "#main .skill .left",
    scrub: 1,

    onEnter: function () {
      $("#header").addClass("section2");
    },
    onLeaveBack: function () {
      $("#header").removeClass("section2");
    },
  });
}

//sns_design부분
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1, // 기본값: 가장 작은 화면
  spaceBetween: 30, // 슬라이드 간의 간격
  loop: true, // 무한 루프 활성화
  speed: 5000, // 슬라이드 전환 속도 (더 느리게 설정)
  autoplay: {
    delay: 0, // 지연 시간 없이 연속 이동
    disableOnInteraction: false, // 사용자 조작 후에도 자동 이동 유지
  },
  freeMode: true, // 자유롭게 스크롤하는 느낌
  freeModeMomentum: false, // 모멘텀 효과를 비활성화하여 끊김 방지
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  breakpoints: {
    600: {
      // 600px 이상일 때
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      // 1024px 이상일 때
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

// 미디어쿼리를 기반으로 ScrollTrigger 작동 제어
const mediaQuery = window.matchMedia("(max-width: 1024px)");

function handleMediaChange(e) {
  if (!e.matches) {
    // 1024px 초과: ScrollTrigger 활성화
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // 기존 트리거 제거
    initScrollTrigger();
  } else {
    // 1024px 이하: ScrollTrigger 비활성화
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }
}

// 초기 실행 및 이벤트 리스너 추가
handleMediaChange(mediaQuery);
mediaQuery.addEventListener("change", handleMediaChange);

//project부분
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
