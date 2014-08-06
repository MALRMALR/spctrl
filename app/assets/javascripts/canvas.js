////////////////////////////////////////////////////////////
// Function for mousedown / mouseup events on Canvas Page //
////////////////////////////////////////////////////////////

// add wavesurfer.js


function clickEvents () {
  var canvas = $('#myCanvas')

  var context = new AudioContext();

  /* VCO */
  var vco = context.createOscillator();
  vco.type = vco.SINE;
  vco.frequency.value = this.frequency;
  vco.start(0);

  /* VCA */
  var vca = context.createGain();
  vca.gain.value = 0;

  /* FILTER
  http://jsfiddle.net/MarijnS95/X38pk/3/
  */

  var filter = context.createBiquadFilter();
  filter.type = filter.LOWPASS;
  filter.Q.value = 2;
  filter.frequency.value = 220; // in HZ
  filter.gain.value = 60;

  /* REVERB http://noisehack.com/custom-audio-effects-javascript-web-audio-api/ */

  var convolver = context.createConvolver();
    noiseBuffer = context.createBuffer(2, 2 * context.sampleRate, context.sampleRate),
    left = noiseBuffer.getChannelData(0),
    right = noiseBuffer.getChannelData(1);
    for (var i = 0; i < noiseBuffer.length; i++) {
      left[i] = Math.random() * 5 - 1;
      right[i] = Math.random() * 7 - 1;
    }
    convolver.buffer = noiseBuffer;

  // var convolver = new SimpleReverb(ctx, {
  //   seconds: 0,
  //   decay: 0,
  //   reverse: 0
  // });
  // convolver.seconds = 0.05;
  // convolver.decay = 0.5;


  /* Analyser */

  var analyser = context.createAnalyser();  // This is used to create a visualization of audio wave

  /* DELAY */

  var delay = context.createDelay(5.0);     //


  /* Connections */
  vco.connect(vca);
  vca.connect(filter)
  filter.connect(convolver)
  convolver.connect(delay)
  delay.connect(analyser)
  analyser.connect(context.destination);

//   // WAVESURVER JS
//
//   var wavesurfer = Object.create(WaveSurfer);
//
//   wavesurfer.init({
//     // your options here
//   });
//
//   wavesurfer.on('ready', function () {
//       var timeline = Object.create(WaveSurfer.Timeline);
//
//       timeline.init({
//           wavesurfer: wavesurfer,
//           container: "#wave-timeline"
//       });
//   });
//
// wavesurfer.load(context.destination);

  //originally had an underscore as first input
  canvas.mousedown(function (frequency) {
    console.log("CLIQUE CLIQUE")
    vco.frequency.value = frequency;
    vca.gain.value = 1;
  });
  // originally had two underscores as inputs
  canvas.mouseup(function () {
    console.log("DONE?")
    vca.gain.value = 0;  // sets gain to 0
  });
}
