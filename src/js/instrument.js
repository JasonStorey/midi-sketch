var $ = require('jQuery');
var MIDI = window.MIDI;

var Instrument = function() {

	function setupUI() {
		var trigger;
		 
		trigger = $('<a>').addClass('trigger');
		trigger.on('mousedown', function(){
			playNote(50);
		});
		trigger.on('mouseup', function(){
			muteNote(50);
		});

		$('body').append(trigger);
	}

	function playNote(note) {
		var delay = 0,
			velocity = 127;

		MIDI.setVolume(0, 127);
		MIDI.noteOn(0, note, velocity, delay);
	}

	function muteNote(note) {
		MIDI.noteOff(0, note, 0);
	}
	
	function loadSoundfont(soundfont) {
		MIDI.loadPlugin({
			soundfontUrl: "./soundfonts/",
			instrument: soundfont.id,
			callback: function(){
				MIDI.programChange(0, soundfont.number);
				setupUI();
			}
		});
	}

	return {
		loadSoundfont: loadSoundfont,
		playNote: playNote,
		muteNote: muteNote
	}
};

module.exports = Instrument();