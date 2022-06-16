// let now_playing = document.querySelector(".now-playing");
// let track_art = document.querySelector(".track-art");
// let track_name = document.querySelector(".track-name");
// let track_artist = document.querySelector(".track-artist");
 
// let playpause_btn = document.querySelector(".button_pause");
// let next_btn = document.querySelector(".button_next");
// let prev_btn = document.querySelector(".button_previous");
 
// let seek_slider = document.querySelector(".seek_slider");
// let volume_slider = document.querySelector(".volume_slider");
// let curr_time = document.querySelector(".current-time");
// let total_duration = document.querySelector(".total-duration");
 
// let track_index = 0;
// let isPlaying = false;
// let updateTimer;
 
// let curr_track = document.createElement('audio');






// function loadTrack(track_index) {
//     clearInterval(updateTimer);
//     resetValues();
   
//     curr_track.src = track_list[track_index].path;
//     curr_track.load();
   
//     track_art.style.backgroundImage =
//        "url(" + track_list[track_index].image + ")";
//     track_name.textContent = track_list[track_index].name;
//     track_artist.textContent = track_list[track_index].artist;
//     now_playing.textContent =
//        "PLAYING " + (track_index + 1) + " OF " + track_list.length;
   
//     updateTimer = setInterval(seekUpdate, 1000);
   
//     curr_track.addEventListener("ended", nextTrack);
   
//     random_bg_color();
//   }
   
//   function random_bg_color() {
//     let red = Math.floor(Math.random() * 256) + 64;
//     let green = Math.floor(Math.random() * 256) + 64;
//     let blue = Math.floor(Math.random() * 256) + 64;
   
//     let bgColor = "rgb(" + red + ", " + green + ", " + blue + ")";
   
//     document.body.style.background = bgColor;
//   }
   
//   function resetValues() {
//     curr_time.textContent = "00:00";
//     total_duration.textContent = "00:00";
//     seek_slider.value = 0;
//   }


