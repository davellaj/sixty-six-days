import mongoose from 'mongoose'

const stickersSchema = mongoose.Schema({
  images: Array,
  quotes: Array
});

module.exports = mongoose.model('Stickers', stickersSchema)
