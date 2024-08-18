# Starbucks-Clone-Web-Page
* 출처: fastcampus 프로트엔드 온라인 강의(박영웅 강사님)
* https://github.com/ParkYoungWoong/starbucks-vanilla-app

## 오픈 그래프(The Open Graph protocol)
* 웹페이지가 소셜 미디어(카톡, 페이스북 등)으로 공유될 때 보여지는 정보.
<img width="128" alt="image" src="https://github.com/user-attachments/assets/0f569e65-39e4-42bc-b3e9-53ca18bebb46">


## 트위터 카드(Twitter Cards)
* 웹페이지가 트위터로 공유될 때 보여지는 정보.

## favicon
* .ico 파일 제작 : iconifier.net
  
## Reset.css

* 각 브라우저의 기본 스타일을 초기화함.
```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css" />
```

## Google Fonts
* 페이지에서 사용할 '나눔고딕' 폰트 지정.
* https://fonts.google.com/?preview.layout=grid
* 위의 링크에서 폰트 골라서 css에 상속 할 수 있음. (html에 코드 추가 하고, font-family에 추가한 글꼴 추가.)
* 참고로 폰트마다 제공하는 굵기가 다름(원래는 100~900, 100단위로 제공하는데, 나눔 고딕을 예로 보면 400, 700, 800만 제공)
* 폰트는 생각보다 용량이 크기 때문에 한 페이지에 너무 많은 폰트를 사용하는 것을 좋지 않음.
* css 선언방식으로 link, import있는데, 주로 link 사용.
* 브라우저마다 제공되는 기본 폰트가 다르므로 항상 폰트 적용을 잘 고려해야함.

## margin과 position으로 가운데 정렬 하기
```
<div class="container">
  <div class="item"></div>
</div>
```
```
.container{
  width: 400px;
  height: 250px;
  background-color: royalblue;
}
.item {
  width: 100px;
  height: 100px;
  background-color: orange;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
```
* 위에 예시처럼 가로와 세로 너비를 미리 정해놓고, position: absolute로 부모요소를 기준으로 top, bottom, left, right을 0으로 지정해놓는다. 여기서 주의해야할 점은 부모요소는 position: relative;로 위치 지정을 해주어여함. 그러면 margin: auto;에 의해 부모요소 top, bottom, left, right을 기준으로 동일한 가로 세로의 margin값을 부여받아 가운데 정렬이 된다. (수평수직 정렬)

## Google Material Icons
* [구글에서 무료로 제공하는 메터리얼 아이콘](https://fonts.google.com/icons)
```
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
```
* Html에 위 코드를 넣고 원하는 아이콘의 이름을 찾아서 사용하면 아이콘 무료로 사용가능.

## .inner의 역할
*inner 클래스는 내용을 한 가운데로 몰아주기 위해 추가해준다.
```
          <li class="item">
            <div class="item__name">COFFEE</div>
            <div class="item__contents">
              <div class="contents__menu">
                <div class="inner">COFFEE</div>
                <!-- INNER의 역할: 텍스트(내용)을 가운데에 몰아주는 역할 -->
              </div>
              <div class="contents__texture">
                <div class="inner">COFFEE</div>
              </div>
            </div>
          </li>
```
  * header > .inner: header 요소의 직접 자식인 .inner 요소만 선택합니다.
    + 즉, .inner 클래스가 적용된 요소가 반드시 header 요소의 바로 아래에 있어야만 선택됩니다.
   
    + 아래 예에서 첫 번째 .inner는 선택되지만, 두 번째 .inner는 div 안에 중첩되어 있어 선택되지 않습니다.
      ```
      <header>
          <div class="inner">This will be selected</div>
          <div>
              <div class="inner">This will not be selected</div>
          </div>
      </header>

      ```
      
  * header .inner: header 요소의 모든 후손 중 .inner 클래스를 가진 요소를 선택합니다.
    + 후손 선택자로, header .inner는 header 요소의 어디든지 존재하는 후손인 .inner 클래스를 가진 모든 요소를 선택합니다.
    + 여기서 후손은 header 요소의 직접 자식이거나, 자식의 자식(또는 더 깊이 중첩된 요소)일 수 있습니다.
    + 아래 예에서는 두 .inner 요소 모두 선택됩니다. 첫 번째 .inner는 직접 자식이고, 두 번째 .inner는 더 깊이 중첩된 후손이기 때문에 둘 다 header .inner에 의해 선택됩니다.
      
      ```
      <header>
          <div class="inner">This will be selected</div>
          <div>
              <div class="inner">This will also be selected</div>
          </div>
      </header>

      ```
## BEM (Block Element Modifier)
* **Html 클래스 속성의 작명법**
* **요소__일부분**: **underscore(Lodash) 기호로 요소의 일부분을 표시**
* **요소--상태: Hyphen(Dash) 기호로 요소의 상태를 표시**
  
  <img width="410" alt="image" src="https://github.com/user-attachments/assets/0a70ecd8-0f45-4bd1-a148-7e3f3f01f8ed">

## [Lodash](https://lodash.com/)
* 다양한 유틸리티 함수들을 제공하는 자바스크립트 라이브러리.
* 특히 배열, 객체, 문자열, 숫자 등의 데이터 처리 시 유용.
* Lodash의 주요 기능
  + 배열 및 객체 처리: 배열과 객체의 깊은 복사, 병합, 필터링, 맵핑 등을 손쉽게 처리할 수 있습니다.
  + 유틸리티 함수: 함수의 지연 실행, 클로저, 함수 조합 등의 기능을 제공합니다.
  + 성능 최적화: 복잡한 데이터 구조를 다룰 때 성능을 높이기 위한 최적화 기능을 제공합니다.
  + 코드 가독성 향상: 코드의 가독성을 높여 개발 및 유지보수에 용이합니다.

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js" integrity="sha512-WFN04846sdKMIP5LKNphMaWzU7YpMyCU245etK3g/2ARYbPK9Ub18eG+ljU96qKRCWh+quCY7yefSmlkQw1ANQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```
+ html에 script 태그 전에 추가해주고 사용.

### **Lodash의 의미**
* **"Lodash"라는 이름은 원래 Underscore.js라는 비슷한 목적을 가진 라이브러리에서 유래**되었습니다. **Lodash는 Underscore.js의 기능을 확장하고 성능을 개선한 라이브러리**입니다. **"Lo-"는 로우(low, 낮은) 레벨**의 의미를, **"dash"는 "underscore"의 _와 관련된 의미**를 가질 수 있습니다. 이 라이브러리는 **"underscore"의 기능을 강화하거나 대체한다는 의미**를 가지고 있습니다

```
const _ = require('lodash');

let array = [1, 2, 3, 4, 5];
let evens = _.filter(array, function(num) {
    return num % 2 === 0;
});

console.log(evens); // [2, 4]
```
  * 이 예시에서 lodash의 filter 함수는 배열에서 짝수만을 필터링하여 반환
  * [Lodash API](https://lodash.com/docs/4.17.15)
  * [Lodash throttle](https://lodash.com/docs/4.17.15#throttle)
      + 'throttle'은 연속된 이벤트가 발생할 때, 이벤트가 발생할 수 있는 횟수를 제한해서 자원을 효율적으로 사용하도록 돕는다.
      + **throttle(스로틀)은 자바스크립트에서 주로 사용되는 성능 최적화 기법으로, 특정 함수가 일정 시간 동안 여러 번 호출되더라도 그 중 한 번만 실행되도록 제한하는 방법**
      + 특히, 이벤트 헨들러가 짧은 시간 동안 여러번 호출될 수 있는 상황에서 유용.
  * 참고:
      + **Throttle과 debounce 비교**
        + Throttle: 주기적으로 함수를 실행합니다. 즉, 이벤트가 반복해서 발생하더라도 정해진 시간마다 한 번씩 실행됩니다.
        + Debounce: 이벤트가 더 이상 발생하지 않을 때까지 기다린 후, 일정 시간이 지나면 함수를 실행합니다. 즉, 이벤트 발생이 멈출 때까지 실행을 지연시킵니다.
       
        + 언제 사용하나요?
          + 스크롤 이벤트: 사용자가 페이지를 스크롤할 때.
          + 윈도우 리사이즈 이벤트: 사용자가 브라우저 창 크기를 조정할 때.
          + 마우스 움직임 이벤트: 사용자가 마우스를 움직일 때.

## 스타벅스 Swiper center에 보여지는 이미지
* 정가운데에 보여지는 이미지는 swiper-slide-active라는 이름의 클래스를 갖게 됨.
  
  <img width="943" alt="image" src="https://github.com/user-attachments/assets/12605817-3558-44e7-b948-9200b103fd53">

* 추가된 클래스 이름을 이용해서 정중앙에 보이는 슬라이드는 선명하게 그리고, 지나가거나 다음으로 보여질 슬라이드들은 흐릿하게 css로 표현 가능.

```
.notice .promotion .swiper-slide{
  opacity: .2;
}

.notice .promotion .swiper-slide-active {
  opacity: 1;
}
```
    
## swiper-pagination 
* swiper-pagination은 기본적으로 css 스타일이 정해져있음. 
* 개발자 도구로 보면 swiper-pagination에 기본으로 지정된 스타일 css 코드를 볼 수 있음.

  <img width="451" alt="image" src="https://github.com/user-attachments/assets/2d279cd1-46f1-4abe-a578-9ce89ae6c159">

* 그래서 특정하게 위치값을 굳이 지정하지 않아도 span태그로 추가된 swiper-pagination-bullet 클래스는 inline-box임으로, 기본으로 추가된 스타일 코드 떄문에 (text-align: center) 중앙에 오게됨.

  <img width="443" alt="image" src="https://github.com/user-attachments/assets/e4698c2e-b280-443b-83e4-3b2e38f28ac3">

* 마찬가지로 swiper-pagination-bullet-active라는 클래스도 생김...
* swiper 사용할 때 이렇게 각각의 기본 css 스타일을 바꾸고 싶다면 페이지를 직접 로드해서 개발자 도구 열어서 클래스 이름 확인 후 그 클래스 이름을 사용해서 css 코드 변경해주면 됨.

## 가로 세로 너비 비율 2:1인 요소 만들기

```
<div class="container">
  <div class="item"></div>
</div>
```

```
.container{
  width: 100px;
  background-color: royalblue;
}

.container .item{
  width: 100%;
  height: 0;
  padding-top: 50%;
}
```

* 원래는 height가 0이기 떄문에 요소가 보이지 않지만, padding-top에 50%를 입력하면 %는 부모요소의 width를 기준으로 지정됨으로, item의 부모요소인 container의 width 100px의 반만큼을 padding-top 값으로 갖게 됨으로, 위로 그만큼 채워져, 가로 세로 비율이 2:1인 사이즈의 요소가 보이게됨.

```
.container{
  width: 100px;
  padding-top: 50%;
  background-color: royalblue;
}

.container .item{
  width: 100%;
  height: 0;
  padding-top: 50%;
  background-color: orange;
}
```

<img width="236" alt="image" src="https://github.com/user-attachments/assets/33f051ef-4c90-48c5-9cd7-59e4d07177ca">


* 위의 이미지처럼, container에 padding-top 50%를 부여하면 전체 보여지는 요소가 뷰포트(container의 부모요소)의 절반 만큼이 높이로 채워져 보임.

* **즉, 이렇게 부모요소와 자식 요소 하나를 가지고서 몇대 몇 비율의 가로 너비 세로너비를 가지고 있는 요소의 크기를 만들어 낼 수 있음**
* 이런 방법은 유튜브나 비메오 영상을 삽일할 때 유용하게 쓸 수 있음.
* **비메오(vimeo) 영상**: 비메오라는 비디오 공유 플랫폼에 업로드된 동영상을 의미합니다. 비메오는 고화질 비디오 콘텐츠를 제작, 공유, 스트리밍할 수 있는 플랫폼으로, 특히 창작자, 예술가, 영화 제작자 등 전문적인 비디오 콘텐츠 제작자들이 자주 사용하는 서비스.
* **일반적인 유튜브나 비메오 영상들은 기본적으로 가로 사이즈가 16, 세로 사이즈가 9인 16:9 비율로 영상이 제공됨.**
* 즉, padding-top에 **56.25%** 를 입력하면 컨테이너의 가로 너비가 얼마든지 간에 항상 16대 9 비율로 요소가 출력됨.
* **FHD(Full High Definition): 화면 해상도** -> 1920 x 1080 픽셀의 해상도를 갖음.(1080p)// 16:9 비율.

## YOUTUBE API
* [IFrame Player API](https://developers.google.com/youtube/iframe_api_reference?hl=ko) 를 통해 YouTube 동영상 제어 가능.

```
<!DOCTYPE html>
<html>
  <body>
    <!-- 1. The <iframe> (and video player) will replace this <div> tag. -->
    <div id="player"></div>

    <script>
      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: 'M7lc1UVf-VE',
          playerVars: {
            'playsinline': 1
          },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }
    </script>
  </body>
</html>
```

* id ="player" 부분이 실제로 유튜브가 출력되는 요소임.
* tag라는 변수에 script 태그를 생성해서 그것을 tag에 할당함.
* tag.src에 외부 자바스크립트 라이브러리 할당됨.
* script 중에 제일 첫번쨰 요소를 firstScriptTag라는 변수에 할당해주고, 그것의 부모요소를 찾아서 tag를 삽입해줌.
* 외부 API에 있던 함수 onYouTubeIframeAPIReady() 사용.(이름 같게 사용해야함.)

### [플레이어 매개변수(playerVars)](https://developers.google.com/youtube/player_parameters.html?playerVersion=HTML5&hl=ko#Parameters)
* 유튜브 iframe player API사용시 사용 가능한 매개변수 옵션.

## 랜덤 숫자 생성 함수
```
function random(min, max){
  return parseFloat((Math.random() * (max -min) + min).toFixed(2))
}
// 범위 랜덤 함수(소수점 2자리까지)
// toFixed()는 숫자를 고정 소수점 형식으로 변환하는 메서드. 여기서는 소수점 이하 2자리까지 잘라냄.
// parseFloat()은 문자열을 부동소수점 숫자로 변환하는 함수.(string을 float으로)
```
* min, max를 넣어 원하는 범위 안에 있는 랜덤한 숫자 만들기 가능.

## GSAP(The GreenSock Animation Platform)
* **JS 기반 애니메이션 라이브러리, 웹페이지에서 복잡하고 매끄러운 애니메이션을 만들 수 있게함.**
* gsap.to(요소, 지속시간, 옵션);
* [gsap.to 속성들](https://gsap.com/docs/v3/GSAP/gsap.to()/)
*[GSAP Easing 함수](https://gsap.com/docs/v3/v2/Easing)

* GSAP의 주요 기능
  + 트위닝 애니메이션: Tweening은 두 상태 간의 중간 단계를 자동으로 생성하여 애니메이션을 만드는 방법. GSAP은 속성, CSS 스타일, SVG, 캔버스, 스크롤 위치 등 다양한 요소를 애니메이션화할 수 있음.
  + 타임라인 애니메이션: 여러 애니메이션을 순서대로, 또는 병렬로 제어할 수 있는 타임라인 기능을 제공. 타임라인을 사용하면 복잡한 애니메이션을 직관적으로 관리 가능
  + 성능 최적화: GSAP은 초당 60 프레임의 애니메이션을 목표로 하며, 다양한 브라우저 환경에서 최적화된 성능을 제공.
  + CSS 및 SVG 지원: GSAP은 CSS 스타일과 SVG 속성들을 직접 애니메이션화할 수 있어, 웹 페이지의 시각적 요소를 정교하게 제어 가능.
  + 강력한 컨트롤: 애니메이션의 시작, 중지, 반복, 역재생, 재개 등 다양한 제어 기능을 제공.

* 언제 GSAP을 사용하나요?
  + 복잡한 애니메이션이 필요한 경우: 단순한 CSS 애니메이션으로는 어렵거나 불가능한 애니메이션을 만들 때.
  + 성능이 중요한 경우: 애니메이션이 많은 웹 페이지에서 성능을 유지해야 할 때.
  + 정교한 제어가 필요한 경우: 타임라인을 사용하여 애니메이션의 순서나 타이밍을 세밀하게 조절할 때.

## 3D 애니메이션
* transform (rotateY함수), perspective, backface-visibility 속성 등을 이용해 3D 애니메이션을 css로 구현 가능.
* 예시:
```
<div class="container">
  <div class="item front">앞</div>
  <div class="item back">뒤</div>
</div>
```
```
.container{
  width: 100px;
  height: 100px;
  background-color: royalblue;
  perspective: 300px;
}

.container .item{
  width: 100px;
  height: 100px;
  border: 4px solid red;
  box-sizing: border-box;
  font-size: 60px;
  backface-visibility: hidden;
  transition: 1s;
}

.container:hover .item.front{
  position: absolute;
  transform: rotateY(180deg);
}
.container .item.front{
  position: absolute;
  transform: rotateY(0deg);
/* 굳이 0도로 지정하지 않아도 되지만, 명시적으로 넣어주는 것이 좋음. 구형 브라우저에서는 필요한 코드일수도...  */
}
.container .item.back{
  position: absolute;
  transform: rotateY(-180deg);
}
.container:hover .item.back{
  position: absolute;
  transform: rotateY(0deg);
  
}
```

## 스크롤 위치 계산 애니메이션(ScrollMagic)
* [ScrollMagic cdnjs.com](https://cdnjs.com/libraries/ScrollMagic)
```
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js" integrity="sha512-8E3KZoPoZCD+1dgfqhPbejQBnQfBXe8FuwL4z/c8sTrgeDMFEnoyTlH3obB4/fV+6Sg0a0XF+L/6xS4Xx1fUEg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```
*  **ScrollMagic이란?**
  + ScrollMagic은 **웹 페이지에서 스크롤 기반의 애니메이션을 쉽게 구현**할 수 있도록 도와주는 **JavaScript 라이브러리**. 이 라이브러리는 **특정 요소가 스크롤로 인해 뷰포트에 들어올 때, 또는 특정 위치에 도달할 때 특정 동작(애니메이션, 클래스 추가 등)을 트리거**할 수 있게 해줌.

```
const spyEls = document.querySelectorAll('section.scroll-spy');

spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 감시할 요소를 지정
      triggerHook: .8 // 트리거 지점 설정 (뷰포트의 80% 지점)
    })
    .setClassToggle(spyEl, 'show') // 클래스를 토글(상태를 전환)
    .addTo(new ScrollMagic.Controller()) // 컨트롤러에 이 씬을 추가
});
```
*이 코드는 section.scroll-spy라는 클래스를 가진 모든 섹션을 감시하여, 해당 섹션이 스크롤될 때 특정 동작을 수행하게함.

* **Scene**은 스크롤 이벤트에 반응하는 개별 단위. 특정 요소가 스크롤을 통해 뷰포트의 지정된 위치에 도달했을 때(또는 벗어났을 때) 어떤 행동을 취할지 정의.
* **triggerElement**: Scene이 감시할 HTML 요소를 지정. 이 요소가 특정 위치에 도달할 때 설정된 동작이 실행.
* **triggerHook**: 이 값은 0과 1 사이의 소수로, 뷰포트 내에서 트리거가 발생할 위치를 지정. 0은 뷰포트의 맨 위, 1은 뷰포트의 맨 아래를 의미하며, 여기서 0.8은 뷰포트의 80% 지점에서 트리거가 발생함을 뜻함.
* **setClassToggle(요소, 클래스 이름)**: setClassToggle() 메서드는 Scene이 트리거될 때 지정된 요소에 특정 클래스를 추가하거나 제거할 수 있음. 이 메서드에는 두 개의 인자가 필요.
  + 첫 번째 인자: 클래스를 추가/제거할 요소.
  + 두 번째 인자: 토글할 클래스 이름.
* **ScrollMagic.Controller()**: 여러 Scene을 관리하고 제어함.
* **addTo(ScrollMagic.Controller()):**: 생성된 Scene을 이 컨트롤러에 추가하여 스크롤 이벤트와 연결되도록함. 이로 인해 스크롤할 때마다 설정한 Scene이 실행됨.

<img width="362" alt="image" src="https://github.com/user-attachments/assets/38c73227-47b1-49b2-9d39-0a5410efb2ac">

* 위 이미지처럼 미리 지정한 scroll 위치를 지나게되면 scroll-spy라는 클래스 이름을 가진 요소들에 show라는 이름의 클래스가 추가되는 것을 알 수 있음.

## HTML 특수기호

<img width="458" alt="image" src="https://github.com/user-attachments/assets/4bea98f8-b91f-4e02-8d88-7bc5d72afd8b">

* html에서 쓰이는 특수기호들을 확인하기위한 링크: [html entities](https://www.w3schools.com/html/html_entities.asp)

  
