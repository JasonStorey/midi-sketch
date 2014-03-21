var MIDI = window.MIDI;
var $ = require('jQuery'),
	Trigger = require('./trigger.js');

var Instrument = function() {
	var trigger,
		loaded;

	function init() {
		drawUI();
	}

	function drawUI() {
		for (var i = 21; i < 109; i++) {
			trigger = new Trigger(i);
			$('body').append(trigger.trigger);			
		 }; 
	}
	
	function loadSoundfont(soundfont) {
		loaded = false;
		MIDI.loadPlugin({
			soundfontUrl: "./soundfonts/",
			instrument: soundfont.id,
			callback: function(){
				if(loaded) {return;}
				loaded = true;
				MIDI.programChange(0, soundfont.number);
			}
		});
	}

	return {
		init: init,
		loadSoundfont: loadSoundfont
	}
};

module.exports = Instrument();