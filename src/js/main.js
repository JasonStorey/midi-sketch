var $ = require('jQuery'),
	instrument = require('./Instrument.js');


$('document').ready(function(){
	instrument.loadSoundfont('acoustic_grand_piano');
});
