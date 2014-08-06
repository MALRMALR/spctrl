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
//= require_tree .

$(document).ready(function(){
	console.log("Loaded, bro");

	$('body').on('click', '#login', showLogIn);
	$('body').on('click', '#sign_up', showSignUp);
	$('#modal').on('click', '#exit', hideModal);
	// $('#modal').on('click', '.logIn', logIn);

	$(document).on("page:load", function() {

		//Wiring Web Audio Effects
		var ctx = new AudioContext();
		//player 1
		var audioElement = $('#sliders audio')[0]
		wireEffects(audioElement, ctx, 'delayTime', 'feedback', 'frequency', 'reverb', 'reverbGain', 'filter', 'filterGain');

		//player 2
		var audioElement2 = $('#sliders audio')[1]
		wireEffects(audioElement2, ctx, 'delayTime2', 'feedback2', 'frequency2', 'reverb2', 'reverbGain2', 'filter2', 'filterGain2');

		//player 3
		var audioElement3 = $('#sliders audio')[2]
		wireEffects(audioElement3, ctx, 'delayTime3', 'feedback3', 'frequency3', 'reverb3', 'reverbGain3', 'filter3', 'filterGain3');
	});

	//Wiring Web Audio Effects when no new page
	var ctx = new AudioContext();
	//player 1
	var audioElement = $('#sliders audio')[0]
	wireEffects(audioElement, ctx, 'delayTime', 'feedback', 'frequency', 'reverb', 'reverbGain', 'filter', 'filterGain');

	//player 2
	var audioElement2 = $('#sliders audio')[1]
	wireEffects(audioElement2, ctx, 'delayTime2', 'feedback2', 'frequency2', 'reverb2', 'reverbGain2', 'filter2', 'filterGain2');

	//player 3
	var audioElement3 = $('#sliders audio')[2]
	wireEffects(audioElement3, ctx, 'delayTime3', 'feedback3', 'frequency3', 'reverb3', 'reverbGain3', 'filter3', 'filterGain3');

	// Calls Click Events for Canvas Page
	clickEvents();
});


function wireEffects(audioElement, ctx, inputName1, inputName2, inputName3, inputName4, inputName5, inputName6, inputName7) {
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

		//reverb node
    var verb = new SimpleReverb(ctx, {
      seconds: 0,
      decay: 0,
      reverse: 0
    });
    verb.seconds = 1;
    verb.decay = 1;


    var verbGain = ctx.createGain();
    verbGain.gain.value = 0;

    verb.connect(verbGain);
    verbGain.connect(ctx.destination);

		//filter node
    var biFilter = ctx.createBiquadFilter();
    biFilter.type = biFilter.LOWPASS;
    biFilter.frequency.value = 100;
    biFilter.gain.value = 100;

    var biFilterGain = ctx.createGain();
    biFilterGain.gain.value = 0;

    biFilter.connect(biFilterGain);
    biFilterGain.connect(ctx.destination)


		//effect connections
    source.connect(delay);
    delay.connect(verb.input);
    source.connect(biFilter);
    source.connect(ctx.destination);
    delay.connect(ctx.destination);
    //verb.connect(ctx.destination);
    biFilter.connect(ctx.destination);;

    var controls = $("div#sliders");
    //delay controls
    controls.find("input[name='"+inputName1+"']").on('input', function() {
      delay.delayTime.value = $(this).val();
    });

    controls.find("input[name='"+inputName2+"']").on('input', function() {
      feedback.gain.value = $(this).val();
      console.log(feedback.gain.value)
    });

    controls.find("input[name='"+inputName3+"']").on('input', function() {
      filter.frequency.value = $(this).val();
    });

    //reverb control
    controls.find("input[name='"+inputName4+"']").on('input', function() {
      verb.seconds = parseInt($(this).val());
      console.log(verb.seconds);
    });

    controls.find("input[name='"+inputName5+"']").on('input', function() {
      verbGain.gain.value = parseInt($(this).val());
      console.log(verbGain.gain.value);
    });


    //biquad filter controll
    controls.find("input[name='"+inputName6+"']").on('input', function() {
      biFilter.frequency.value = parseInt($(this).val());
      console.log(biFilter.frequency.value);
    });

    controls.find("input[name='"+inputName7+"']").on('input', function() {
      biFilterGain.gain.value = parseInt($(this).val());
      console.log(biFilterGain.gain.value);
    });
	});
}
