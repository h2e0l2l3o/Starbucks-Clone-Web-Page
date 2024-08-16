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
    
