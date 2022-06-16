// import {track_list} from "./song_list";
// import { song_time, song_duration, song_slider, newSong, change_time, change_duration, change_slider } from "./audio_sliders_panel";

let track_list = [
  {
    name: "Havana",
    artist: "Camila Cabello",
    image: "https://images.pexels.com/photos/2264753/pexels-photo-2264753.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "src/havana.mp3"
  },
  {
    name: "Strangers in the night",
    artist: "Frank Sinatra",
    image: "https://images.pexels.com/photos/3100835/pexels-photo-3100835.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "src/strangers_in_the_night.mp3"
  },
  {
    name: "Let's twist again",
    artist: "Chubby Checker",
    image: "https://images.pexels.com/photos/1717969/pexels-photo-1717969.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "src/lets_twist_again.mp3"
  }
];

var video = document.getElementById("track_video");
video.src = "src/gif.mp4";

let is_playing = false;
let current_music = document.createElement('audio');
let track_index = 0;
let updateTimer;

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".time_song");
let total_duration = document.querySelector(".time_total_duration");

function start() {

    document.querySelector(".seek_slider").value = 0;
    document.querySelector(".current-time").textContent = "00:00";
    document.querySelector(".total-duration").textContent = "00:00";

}

function change_time(time) {
  $(".time_song").text(time);
  song_time = time;
}

function change_duration(time) {
  $(".time_total_duration").text(time);
  song_duration = time;
}

function change_slider_time(position) {
  document.querySelector(".seek_slider").value = position
}

function random_color() {
    let red = Math.floor(Math.random() * 256) + 64;
    let green = Math.floor(Math.random() * 256) + 64;
    let blue = Math.floor(Math.random() * 256) + 64;
    
    document.body.style.background = "rgb(" + red + ", " + green + ", " + blue + ")";
  }

function video_pause() {
  video.pause()
}

function video_play() {
  video.play();
}

function play_track() {
  is_playing = true;
  //loadTrack(track_index);
  current_music.play();
}

function pause_track() {
  is_playing = false;
  current_music.pause();
}

function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}

function setVolume() {
  current_music.volume = volume_slider.value / 100;
}

function seekUpdate() {
  let seekPosition = 0;

  setVolume();

  // Check if the current track duration is a legible number
  if (!isNaN(current_music.duration)) {
    seekPosition = current_music.currentTime * (100 / current_music.duration);
    seek_slider.value = seekPosition;

    // Calculate the time left and the total duration
    let currentMinutes = Math.floor(current_music.currentTime / 60);
    let currentSeconds = Math.floor(current_music.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(current_music.duration / 60);
    let durationSeconds = Math.floor(current_music.duration - durationMinutes * 60);

    // Adding a zero to the single digit time values
    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}

function seekTo() {
  let seekto = current_music.duration * (seek_slider.value / 100);
  current_music.currentTime = seekto;
}

function loadTrack(track_index) {

  updateTimer = setInterval(seekUpdate, 1000);
  clearInterval(updateTimer);
  //resetValues();
  current_music.src = track_list[track_index].path;
  current_music.load();

  $("#TName").text(track_list[track_index].name);
  $("#TSinger").text(track_list[track_index].artist);
  $("#pause_continue").attr('src','src/pause.png');


  //track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
  //now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;

  updateTimer = setInterval(seekUpdate, 1000);
  current_music.addEventListener("ended", nextTrack);
  random_color();
}

function nextTrack() {
  is_playing = false;
  if (track_index < track_list.length - 1)
    track_index += 1;
  else track_index = 0;
  loadTrack(track_index);
  play_track();
}

function previousTrack() {
  is_playing = false;
  if (track_index > 0)
    track_index -= 1;
  else track_index = track_list.length - 1;
  loadTrack(track_index);
  play_track();
}


var show = function(id) {
	document.getElementById(id).style.display ='block';
}
var hide = function(id) {
	document.getElementById(id).style.display ='none';
}

loadTrack(track_index);
video_pause();
show('popup1');


$(document).ready(function() {
    $("#pause_continue").click(function() {
        //   $(this).hide();

        random_color();
        //play_track();
        
        // console.log(this.src);

        // console.log(this == "...src/play.png");

        if (!is_playing) {
          video_play();
          $("#pause_continue").attr('src','src/pause.png');
          is_playing = true;
          play_track();
        }
        
        else if (is_playing) {
          video_pause();
          $("#pause_continue").attr('src','src/play.png');
          is_playing = false;
          pause_track();
        }

        // $("#TName").text('hello');
        // $("#TSinger").text('hefads');
    });

    $("#next").click(function() {
        // $(this).hide();
        random_color();
        // var video = document.getElementById("track_video")
        // video.pause();
        nextTrack();
      });
    
    $("#prev").click(function() {
        //   $(this).hide();
        random_color();
        // play();
        previousTrack();
    });

    $("#continue").click(function() {
      //   $(this).hide();
      random_color();
      // play();
    });

    $( ".seek_slider" ).change(function() {
      seekTo();
    });

    $( ".volume_slider" ).change(function() {
      setVolume();
    });
  });