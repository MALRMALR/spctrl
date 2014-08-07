////////////////////////////////////////////////////////////
/////// Function for mousedown events on Canvas Page ///////
////////////////////////////////////////////////////////////


var ctx = new (window.AudioContext || window.webkitAudioContext);

// FREQ REF: http://www.phy.mtu.edu/~suits/notefreqs.html

function aMajor() {
  // E, G, B
  var freq = [294.94, 329.63, 392]
  for (var i = 0; i < freq.length; i++) {
    var mainosc = ctx.createOscillator();
    mainosc.frequency.value = freq[i];
    mainosc.connect(ctx.destination);
    currentTime = ctx.currentTime;
    mainosc.start(currentTime);
    mainosc.stop(currentTime + 0.6);
  };
}

function aSharpMajor() {
  // A#, C#, F
  var freq = [466.16, 277.18, 349.23]
  for (var i = 0; i < freq.length; i++) {
    var mainosc = ctx.createOscillator();
    mainosc.frequency.value = freq[i];
    mainosc.connect(ctx.destination);
    currentTime = ctx.currentTime;
    mainosc.start(currentTime);
    mainosc.stop(currentTime + 0.6);
  };
}

function bMajor() {
  // A, C#, E
  var freq = [440, 554.37, 329.63, 659.25]
  for (var i = 0; i < freq.length; i++) {
    var mainosc = ctx.createOscillator();
    mainosc.frequency.value = freq[i];
    mainosc.connect(ctx.destination);
    currentTime = ctx.currentTime;
    mainosc.start(currentTime);
    mainosc.stop(currentTime + 0.6);
  };
}

function cMajor() {
  // C4, E4, D4
  var freq = [261.63, 329.63, 392.00];

  for (var i = 0; i < freq.length; i++) {
    var mainosc = ctx.createOscillator();
    mainosc.frequency.value = freq[i];
    mainosc.connect(ctx.destination);
    currentTime = ctx.currentTime;
    mainosc.start(currentTime);
    mainosc.stop(currentTime + 0.6);
  };
}

function cSharpMajor() {
  // C#, F, G#
  var freq = [277.18, 349.23, 415.30];
  for (var i = 0; i < freq.length; i++) {
    var mainosc = ctx.createOscillator();
    mainosc.frequency.value = freq[i];
    mainosc.connect(ctx.destination);
    currentTime = ctx.currentTime;
    mainosc.start(currentTime);
    mainosc.stop(currentTime + 0.6);
  };
}

function dMajor() {
  // D, F#, A
  var freq = [587.33, 369.99, 440];
  for (var i = 0; i < freq.length; i++) {
    var mainosc = ctx.createOscillator();
    mainosc.frequency.value = freq[i];
    mainosc.connect(ctx.destination);
    currentTime = ctx.currentTime;
    mainosc.start(currentTime);
    mainosc.stop(currentTime + 0.6);
  };
}

function dSharpMajor() {
  // D#, G, A#
  var freq = [311.13, 392, 466.16]
  for (var i = 0; i < freq.length; i++) {
    var mainosc = ctx.createOscillator();
    mainosc.frequency.value = freq[i];
    mainosc.connect(ctx.destination);
    currentTime = ctx.currentTime;
    mainosc.start(currentTime);
    mainosc.stop(currentTime + 0.6);
  };
}

function eMajor() {
  //E, G, B
  var freq = [329.63, 392, 493.88]
  for (var i = 0; i < freq.length; i++) {
    var mainosc = ctx.createOscillator();
    mainosc.frequency.value = freq[i];
    mainosc.connect(ctx.destination);
    currentTime = ctx.currentTime;
    mainosc.start(currentTime);
    mainosc.stop(currentTime + 0.6);
  };
}

function fMajor() {
  // A, C, E
  var freq = [440, 523.25, 659.25];
  for (var i = 0; i < freq.length; i++) {
    var mainosc = ctx.createOscillator();
    mainosc.frequency.value = freq[i];
    mainosc.connect(ctx.destination);
    currentTime = ctx.currentTime;
    mainosc.start(currentTime);
    mainosc.stop(currentTime + 0.6);
  };
}

function fSharpMajor() {
  // F#, A#, C#
  var freq = [369.99, 466.16, 554.37]
  for (var i = 0; i < freq.length; i++) {
    var mainosc = ctx.createOscillator();
    mainosc.frequency.value = freq[i];
    mainosc.connect(ctx.destination);
    currentTime = ctx.currentTime;
    mainosc.start(currentTime);
    mainosc.stop(currentTime + 0.6);
  };
}

function gMajor() {
  // G, B, D
  var freq = [392, 493.88, 293.66];
  for (var i = 0; i < freq.length; i++) {
    var mainosc = ctx.createOscillator();
    mainosc.frequency.value = freq[i];
    mainosc.connect(ctx.destination);
    currentTime = ctx.currentTime;
    mainosc.start(currentTime);
    mainosc.stop(currentTime + 0.6);
  };
}

function gSharpMajor() {
  // G#, C, D#
  var freq = [415.30, 440, 622.25]
  for (var i = 0; i < freq.length; i++) {
    var mainosc = ctx.createOscillator();
    mainosc.frequency.value = freq[i];
    mainosc.connect(ctx.destination);
    currentTime = ctx.currentTime;
    mainosc.start(currentTime);
    mainosc.stop(currentTime + 0.6);
  };
}

function aMinor() {
  // A, E, C
  var freq = [440, 329.63, 523.25];
  for (var i = 0; i < freq.length; i++) {
    var mainosc = ctx.createOscillator();
    mainosc.frequency.value = freq[i];
    mainosc.connect(ctx.destination);
    currentTime = ctx.currentTime;
    mainosc.start(currentTime);
    mainosc.stop(currentTime + 0.6);
  };
}

function aSharpMinor() {
  // A#, C#, F
  var freq = [233.08, 277.18, 349.23]
  for (var i = 0; i < freq.length; i++) {
    var mainosc = ctx.createOscillator();
    mainosc.frequency.value = freq[i];
    mainosc.connect(ctx.destination);
    currentTime = ctx.currentTime;
    mainosc.start(currentTime);
    mainosc.stop(currentTime + 0.6);
  };
}

function bMinor() {
  // B, D, F#
  var freq = [493.88, 587.33, 369.99];
  for (var i = 0; i < freq.length; i++) {
    var mainosc = ctx.createOscillator();
    mainosc.frequency.value = freq[i];
    mainosc.connect(ctx.destination);
    currentTime = ctx.currentTime;
    mainosc.start(currentTime);
    mainosc.stop(currentTime + 0.6);
  };
}

function cMinor() {
  // B, D#, F#
  var freq = [246.94, 311.13, 369.99]
  for (var i = 0; i < freq.length; i++) {
    var mainosc = ctx.createOscillator();
    mainosc.frequency.value = freq[i];
    mainosc.connect(ctx.destination);
    currentTime = ctx.currentTime;
    mainosc.start(currentTime);
    mainosc.stop(currentTime + 0.6);
  };
}

function cSharpMinor() {
  // C#, E, G#
  var freq = [277.18, 349.23, 415.30];
  for (var i = 0; i < freq.length; i++) {
    var mainosc = ctx.createOscillator();
    mainosc.frequency.value = freq[i];
    mainosc.connect(ctx.destination);
    currentTime = ctx.currentTime;
    mainosc.start(currentTime);
    mainosc.stop(currentTime + 0.6);
  };
}

function dMinor() {
  // A4, D4, F4
  var freq = [440, 293.66, 349.23];

  for (var i = 0; i < freq.length; i++) {
    var mainosc = ctx.createOscillator();
    mainosc.frequency.value = freq[i];
    mainosc.connect(ctx.destination);
    currentTime = ctx.currentTime;
    mainosc.start(currentTime);
    mainosc.stop(currentTime + 0.6);
  };
}

function dSharpMinor() {
  // D#, F#, A#
  var freq = [311.13, 369.99, 466.16]
  for (var i = 0; i < freq.length; i++) {
    var mainosc = ctx.createOscillator();
    mainosc.frequency.value = freq[i];
    mainosc.connect(ctx.destination);
    currentTime = ctx.currentTime;
    mainosc.start(currentTime);
    mainosc.stop(currentTime + 0.6);
  };
}

function eMinor() {
  // E, G, B
  var freq = [329.63, 392, 493.88]
  for (var i = 0; i < freq.length; i++) {
    var mainosc = ctx.createOscillator();
    mainosc.frequency.value = freq[i];
    mainosc.connect(ctx.destination);
    currentTime = ctx.currentTime;
    mainosc.start(currentTime);
    mainosc.stop(currentTime + 0.6);
  };
}

function fMinor() {
  // F, G#, C
  var freq = [349.23, 415.30, 440]
  for (var i = 0; i < freq.length; i++) {
    var mainosc = ctx.createOscillator();
    mainosc.frequency.value = freq[i];
    mainosc.connect(ctx.destination);
    currentTime = ctx.currentTime;
    mainosc.start(currentTime);
    mainosc.stop(currentTime + 0.6);
  };
}

function fSharpMinor() {
  // F#, A, C#
  var freq = [369, 440, 554.37]
  for (var i = 0; i < freq.length; i++) {
    var mainosc = ctx.createOscillator();
    mainosc.frequency.value = freq[i];
    mainosc.connect(ctx.destination);
    currentTime = ctx.currentTime;
    mainosc.start(currentTime);
    mainosc.stop(currentTime + 0.6);
  };
}

function gMinor() {
  // G, A#, D
  var freq = [392, 466.16, 587.33]
  for (var i = 0; i < freq.length; i++) {
    var mainosc = ctx.createOscillator();
    mainosc.frequency.value = freq[i];
    mainosc.connect(ctx.destination);
    currentTime = ctx.currentTime;
    mainosc.start(currentTime);
    mainosc.stop(currentTime + 0.6);
  };
}

function gSharpMinor() {
  // G#, B, D#
  var freq = [415.30, 493.88, 622.25]
  for (var i = 0; i < freq.length; i++) {
    var mainosc = ctx.createOscillator();
    mainosc.frequency.value = freq[i];
    mainosc.connect(ctx.destination);
    currentTime = ctx.currentTime;
    mainosc.start(currentTime);
    mainosc.stop(currentTime + 0.6);
  };
}
