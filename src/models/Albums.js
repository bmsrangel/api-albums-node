const mongoose = require('mongoose');

const AlbumSchema = new mongoose.Schema({
	url: {
		type: String,
		required: true
	},
	artist: {
		type: String,
		required: true
	},
	image: {
		type: String,
		required: true
	},
	thumbnail: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true
	}
});

mongoose.model('Album', AlbumSchema);
