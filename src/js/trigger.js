var $ = require('jQuery');
var MIDI = window.MIDI;

function Trigger(note) {
	this.note = note;
	this.trigger = $('<a>').addClass('trigger');
	this.trigger.on('mousedown', this.playNote.bind(this));
	this.trigger.on('mouseup', this.muteNote.bind(this));
}

Trigger.prototype.playNote = function() {
	var delay = 0,
		velocity = 127;
	
	console.log(this.note);
	
	MIDI.setVolume(0, 127);
	MIDI.noteOn(0, this.note, velocity, delay);
}

Trigger.prototype.muteNote = function() {
	MIDI.noteOff(0, this.note, 0);
}

Trigger.prototype.destroy = function() {
	this.trigger.remove();
	this.trigger = null;
	this.note = null;
}

module.exports = Trigger;