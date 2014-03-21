var MIDI = window.MIDI;

var $ = require('jQuery'),
	Instrument = require('./Instrument.js');

function displayPicker() {
	var picker = $('<select>');
	var option;

		for(var id in MIDI.GM.byId) {
			var soundfont = MIDI.GM.byId[id];
			option = $('<option>' + soundfont.id + '</option>');
			option.data('soundfont', soundfont);
			picker.append(option);
		}

	picker.on('change', function() {
		var selectedOption = $("option:selected", this);
		Instrument.loadSoundfont(selectedOption.data().soundfont);
	});

	$('body').append(picker);
}

$('document').ready(function(){
	Instrument.init();
	displayPicker();
});
