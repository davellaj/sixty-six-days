import mongoose from 'mongoose'

const usersSchema = mongoose.Schema({
  images: Array,
  quotes: Array
});

module.exports = mongoose.model('Users', usersSchema)
