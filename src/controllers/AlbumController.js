const mongoose = require('mongoose');

const Album = mongoose.model('Album');

module.exports = {
	async index(req, res) {
		const albums = await Album.find();

		return res.json(albums);
	},

	async store(req, res) {
		const album = await Album.create(req.body);

		return res.json(album);
	}
};
