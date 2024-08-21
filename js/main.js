// 돋보기 모양을 클릭했을 때에도 focus를 적용시키고 싶음. 이부분은 css에서 관리하기 어려우니 js로 코드 작성
const searchEl = document.querySelector(".search");
const searchInputEl = document.querySelector("input");

searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색"); //속성 지정
});

searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", ""); //focus에 반대: 클래스 다시 지우고, 빈캄으로 남겨두기.
});

// 화면 우측에 있는 배지들을 일정 스크롤을 했을 때 자동으로 서서히 사라지게 만드는 기능 추가.
const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector("#to-top");
// window.addEventListener("scroll", function () {
//   console.log("scroll!");
// });
// 위의 함수를 구현해서 적용시키면 계속해서 함수가 실행되기 떄문에 사이트가 무거워짐.
// 즉, 사이트가 무거워지면, 스크롤 시 버벅거리는 현상이 생길 수도 있음.
// 그래서 lodash cdn을 검색해서 관련 라이브러리 이용.

// (+ 클릭시 위로 스크롤되는 top button 기능 구현)
window.addEventListener(
  "scroll",
  _.throttle(function () {
    console.log(window.scrollY); //스크롤할 때마다 scroll 얼만큼 되었는지 확인 가능.
    if (window.scrollY > 500) {
      //배지 숨기기
      // badgeEl.style.display = "none";
      // gsap.to(요소, 지속시간, 옵션);
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
        // 시각적으로는 투명도에 의해 요소가 사라진 것 처럼 보이지만,
        // 여전히 사용자는 보이지 않는 요소를 클릭할 수 있으므로
        // display: "none"을 적용해야함. js에서 css 요소 다룰 때 숫자가 아니면
        // 모두 "" 처리 해줘야함.
      });
      //top 버튼 보이기!
      gsap.to(toTopEl, 0.2, {
        x: 0, //버튼이 다시 보일 수 있도록 원래 위치로 이동.
      });
    } else {
      // badgeEl.style.display = "block";
      //배지 보이기
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
      //top 버튼 숨기기!
      // 참고로 gsap은 css 선택자만 적어 넣어도 요소를 찾을 수 있음.(#to-top 사용)
      // gsap.to("#to-top", 0.2, {
      //   x: 100, //오른쪽으로 버튼이 숨어질 수 있도록 100px이용
      // });
      gsap.to(toTopEl, 0.2, {
        x: 100, //오른쪽으로 버튼이 숨어질 수 있도록 100px이용
      });
    }
  }, 300) //300은 0.3초를 의미, 밀리세컨드
);
//_.throttle(함수, 시간)
/* 윈도우 부분에 스크롤 이벤트를 통해서 결국에는 화면을 스크롤하면 함수가 수십 개가 한 번에 실행이 되는데
그것을 0.3초 단위로 부하를 줘서 함수가 우르르 실행되는 것을 방지하는 용도로
lodash에서 제공하는 throttle이라는 기능을 사용함.
*/

// 버튼 클릭 시 위로 스크롤되어서 올라감.
toTopEl.addEventListener("click", function () {
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});

//VISUAL 부분
/*
비주얼 부분에서 보이는 컵 이미지들이 순차적으로 보이게 만드는 기능 구현
*/

const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7, //0.7, 1.4, 2.1, 2.7 (초)...
    // 순차적으로 각각의 요소를 나타내야함으로 지연시간을 둠.
    opacity: 1,
  });
});

// swiper 사용해서 내용이 자연스럽게 수직으로 slide되게 만드는 기능.
// new Swiper(선택자, 옵션)
new Swiper(".notice-line .swiper-container", {
  direction: "vertical",
  autoplay: true,
  loop: true,
  // autoplay는 자동으로 slide 되게, loop는 반복여부(다시 처음으로 돌아감.)
});

new Swiper(".promotion .swiper-container", {
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  loop: true, //반복재생
  autoplay: {
    delay: 5000, //5초
  },
  // 페이지네이션은 웹 디자인 및 개발에서 콘텐츠를 여러 페이지로 나누어 보여주는 방법
  pagination: {
    el: ".promotion .swiper-pagination", //페이지 번호 요소 선택자,
    clickable: true, //사용자의 페이지 번호 요소 제어
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});

new Swiper(".awards .swiper-container", {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next",
  },
});

/*toggle_promotion 안에 업로드 버튼을 누르면 보여지던 promotion 창이 숨겨지고 
다시 클릭하면 원래대로 promotion창이 보여지는 기능 추가(upload 아이콘 역할)*/

const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;
promotionToggleBtn.addEventListener("click", function () {
  isHidePromotion = !isHidePromotion; //반대가 되게 만듬.
  if (isHidePromotion) {
    //숨김처리
    promotionEl.classList.add("hide");
  } else {
    //보임처리
    promotionEl.classList.remove("hide");
  }
});

function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

//이미지를 둥둥 떠다니게 할 것임.
// floatingObject(요소, 지속시간, 위아래로 움직이는 사이즈)
function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  gsap.to(selector, random(1.5, 2.5), {
    y: size, //y축으로 얼마만큼 움직이면서 애니메이션 처리할 것인지(20만큼 아래로 내려감)
    repeat: -1, //무한반복
    yoyo: true, //한번 재생된 애니메이션을 뒤로 재생함 (자연스럽게 위 아래로 둥둥 뜨게 만들 수 있음.)
    // gsap easing 함수 추가 (좀 더 부드럽게 표현됨)
    ease: Power1.easeInOut,
    delay: random(0, delay),
  });
}
floatingObject(".floating1", 1, 15);
floatingObject(".floating2", 0.5, 15);
floatingObject(".floating3", 1.5, 20);

// ScrollMagic 이용
const spyEls = document.querySelectorAll("section.scroll-spy");

spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.8, //뷰포트 기준 맨 위를 0, 맨 아래를 1로 두었을때 스크롤 시 0.8위치에 해당되는 부분이 trigger가 됨.
  })
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});
// section을 태그 값으로 갖고 scroll-spy를 클래스 이름으로 갖는 요소들은 스크롤하다 지정된 특정 scene(0.8)을 지나면 show라는 클래스가 추가됨

// 연도를 매년 자동으로 바꿔주기 위한 기능 추가.
const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear(); //현재 날짜 정보(Date())
// getFullYear()은 현재 연도 정보줌
