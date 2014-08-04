// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function(){
	console.log("Loaded, bro");
<<<<<<< HEAD

  $('.play-button').on('click', start);
  $('.stop-button').on('click', stop);
	$('#myCanvas').on('click', canvasPlayAudio);
});

var context = new webkitAudioContext();

function stop() {
  source.noteOff(context.currentTime); // stop the source immediately
}

function start() {
  // Note: this will load asynchronously
  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.responseType = "arraybuffer"; // Read as binary data

  // Asynchronous callback
  request.onload = function() {
    var data = request.response;

    audioRouting(data);
  };
  request.send();
}

function audioRouting(data) {
  source = context.createBufferSource(); // Create Sound source
  buffer = context.createBuffer(data, true /*make mono*/); // Create source buffer from raw binary
  source.buffer = buffer; // Add buffered data to object
  source.connect(context.destination);  // Connect sound source to output
  playSound(source); // Pass the object to the play function
}

function playSound() {
  source.noteOn(context.currentTime); // play the source immediately
}

function canvasPlayAudio() {
=======
	$('#myCanvas').on('click', clickCanvas);
})

>>>>>>> d643a2285e3b2c57242133ef06aa448c007e3b6b

function clickCanvas() {
	
}
