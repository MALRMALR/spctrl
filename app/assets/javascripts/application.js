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
//= require AudioContextMonkeyPatch.js
//= require simple_reverb.js
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require backstretch
//= require_tree .

function domReady(){
	modalReady();

	console.log("Loaded, bro");
	var body = $("body");
	$('body').on('click', '#login', showLogIn);
	$('body').on('click', '#sign_up', showSignUp);
	$('#modal').on('click', '#exit', hideModal);

	$.backstretch([
	    "http://i.imgur.com/NSxwAIe.jpg",
			"http://i.imgur.com/DmGcSvO.jpg",
			"http://i.imgur.com/pjwsIMe.jpg"
	], {duration: 10000, fade: 600});

	// shows mouse coordinates on canvas page
	showCoordinates();

	// Calls Click Events for CANVAS.JS
	var canvas = $('#myCanvas');
	$(canvas).on('mousedown', clickEvents);

	//Wiring Web Audio Effects
	var ctx = new AudioContext();
	//player 1
	var audioElement = $('#sliders audio')[0]
	wireEffects(audioElement, ctx, 'delayTime', 'feedback', 'frequency', 'reverb', 'filter');

	//player 2
	var audioElement2 = $('#sliders audio')[1]
	wireEffects(audioElement2, ctx, 'delayTime2', 'feedback2', 'frequency2', 'reverb2', 'filter2');

	//player 3
	var audioElement3 = $('#sliders audio')[2]
	wireEffects(audioElement3, ctx, 'delayTime3', 'feedback3', 'frequency3', 'reverb3', 'filter3');

}

/////////////////////////////////////////
/////// HOME PAGE SIGNAL CHAIN //////////
/////////////////////////////////////////

function wireEffects(audioElement, ctx, inputName1, inputName2, inputName3, inputName4, inputName5) {
	audioElement.addEventListener('playing', function(){
		var source = ctx.createMediaElementSource(audioElement);

		//delay features
		var delay = ctx.createDelay();
		delay.delayTime.value = 0;

		var feedback = ctx.createGain();
		feedback.gain.value = 0;

		var filter = ctx.createBiquadFilter();
		filter.frequency.value = 1000;

		delay.connect(feedback);
		feedback.connect(filter);
		filter.connect(delay);

		//reverb
		var verb = new SimpleReverb(ctx, {
			seconds: 0,
			decay: 0,
			reverse: 0
		});
		verb.seconds = 0.01;
		verb.decay = 0.01;

		//filter
		var biFilter = ctx.createBiquadFilter();
		biFilter.type = biFilter.LOWPASS;
		biFilter.frequency.value = 100;
		biFilter.gain.value = 100;


		//effect connections
		source.connect(delay);
		delay.connect(verb.input);
		source.connect(biFilter);
		source.connect(ctx.destination);
		delay.connect(ctx.destination);
		verb.connect(ctx.destination);
		biFilter.connect(ctx.destination);

		var controls = $("div#sliders");
		//delay controls
		controls.find("input[name='"+inputName1+"']").on('input', function() {
			delay.delayTime.value = $(this).val();
		});

		controls.find("input[name='"+inputName2+"']").on('input', function() {
			feedback.gain.value = $(this).val();
		});

		controls.find("input[name='"+inputName3+"']").on('input', function() {
			filter.frequency.value = $(this).val();
		});

		//reverb control
		controls.find("input[name='"+inputName4+"']").on('input', function() {
			verb.seconds = parseInt($(this).val()) * 2;
			verb.decay = $(this).val() * 0.5;
		});
		//biquad filter control
		controls.find("input[name='"+inputName5+"']").on('input', function() {
			biFilter.frequency.value = parseInt($(this).val());
			console.log(biFilter.frequency.value);
		});
	});
}

//////////////////////////////////////
/////// CANVAS SIGNAL CHAIN //////////
//////////////////////////////////////

function clickEvents() {
	var canvas = $('#myCanvas')

	var context = new AudioContext() || new webkitAudioContext();

	// VCO
	var vco = context.createOscillator();
	vco.type = vco.SINE;                   // OSC generates SINE WAVE
	vco.frequency.value = this.frequency;
	vco.start(0);


	// GAIN
	var vca = context.createGain();
	vca.gain.value = 1;

	// FILTER - http://jsfiddle.net/MarijnS95/X38pk/3/
	var filter = context.createBiquadFilter();
	filter.type = filter.LOWPASS;
	filter.Q.value = 2;
	filter.frequency.value = 220; // in HZ
	filter.gain.value = 60;

	// Distortion


	//REVERB

	var convolver = new SimpleReverb(context, {
		seconds: 4,
		decay: 10,
		reverse: 1
	});
	convolver.seconds = 2;
	convolver.decay = 5;


	// Analyser

	var analyser = context.createAnalyser();  // This is used to create a visualization of audio wave

	// DELAY

	var delay = context.createDelay(5.0);


	// Effects Connections
	vco.connect(vca);
	vca.connect(filter)
	filter.connect(convolver.input)
	convolver.connect(delay)
	delay.connect(analyser)
	analyser.connect(context.destination);


	//Frequency Control - finds slider on canvas page and maps it to effects
	var canvasControls = $('div#canvas-controls');

		canvasControls.find("input[name='delay']").on('mousedown', function() {
			delay.delayTime.value = $(this).val();
		});

		canvasControls.find("input[name='frequency']").on('mousedown', function() {
			filter.frequency.value = $(this).val();
		})

		//originally had an underscore as first input
		canvas.mousedown(function (frequency) {
			console.log("CLIQUE CLIQUE")
			vco.frequency.value = frequency;
			vca.gain.value = 1; // sets filter gain to 1
		});
		// originally had two underscores as inputs
		canvas.mouseup(function () {
			console.log("LEAVING???")
			vca.gain.value = 0;  // sets gain to 0
		});
};



function showCoordinates() {
	var body = $('body');
	var canvas = $('#myCanvas')
	var heading = $('<h1>').addClass('coordinates');
	$(heading).appendTo(body);
		$(canvas).on("mousemove", function( event ) {
			$(heading).text("Position X: " + event.pageX + ", Position Y: "+ event.pageY);
		});
}

$(document).ready(domReady);
// page load via turbolinks
$(document).on('page:load', domReady);
