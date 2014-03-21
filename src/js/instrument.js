var $ = require('jQuery');
var MIDI = window.MIDI;

var Instrument = function() {

	function setupUI() {

		var trigger;
		 
		trigger = $('<a>').addClass('trigger');
		trigger.on('click', function(){
			playNote(50);
		});

		$('body').append(trigger);
	}

	function playNote(note) {
		var delay = 0; // play one note every quarter second
		var velocity = 127; // how hard the note hits
		// play the note
		MIDI.setVolume(0, 127);
		MIDI.noteOn(0, note, velocity, delay);
		MIDI.noteOff(0, note, delay + 0.75);
	}
	
	function loadSoundfont(instrument) {
		MIDI.loadPlugin({
			soundfontUrl: "./soundfonts/",
			instrument: instrument,
			callback: setupUI
		});
	}

	return {
		loadSoundfont: loadSoundfont
	}
};

module.exports = Instrument();