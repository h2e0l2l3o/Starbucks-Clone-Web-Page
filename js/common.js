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

// 연도를 매년 자동으로 바꿔주기 위한 기능 추가.
const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear(); //현재 날짜 정보(Date())
// getFullYear()은 현재 연도 정보줌
