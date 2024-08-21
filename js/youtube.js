// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  // <div id="player"></div>
  // 아이디라고 해서 인수로 넣을 떄 #쓸 필요 없음.
  new YT.Player("player", {
    // 유튜브 영상 아이디: 링크에서 v=(뒤에있는 여기 ID) 복사
    videoId: "An6LvWQuj_8", //최초 재생할 유튜브 영상 ID
    playerVars: {
      autoplay: true, //자동 재생 유무
      loop: true, // 반복 재생 유무
      playlist: "An6LvWQuj_8", //반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      onReady: function (event) {
        event.target.mute(); //음소거
      },
    },
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
