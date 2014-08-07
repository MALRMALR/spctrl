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
	    "http://i.imgur.com/NSxwAIe.jpg"
	  , "http://i.imgur.com/DmGcSvO.jpg"
	  , "http://i.imgur.com/pjwsIMe.jpg"
	], {duration: 8000, fade: 750});


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

$(document).ready(domReady;);
// page load via turbolinks
$(document).on('page:load', domReady);
