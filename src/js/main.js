// var MIDI = require('../../lib/MIDI.js/MIDI.js');
var MIDI = window.MIDI;
var $ = require('jQuery');

$('document').ready(function(){
	MIDI.loadPlugin({
		soundfontUrl: "./soundfonts/",
		instrument: "acoustic_grand_piano",
		callback: function() {
			var delay = 0; // play one note every quarter second
			var note = 50; // the MIDI note
			var velocity = 127; // how hard the note hits
			// play the note
			MIDI.setVolume(0, 127);
			MIDI.noteOn(0, note, velocity, delay);
			MIDI.noteOff(0, note, delay + 0.75);
		}
	});
});
