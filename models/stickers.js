import mongoose from 'mongoose'

const goalsSchema = mongoose.Schema({
  goal: {type: String, required: true},
  difficulty: String,
  reward: Number,
  dueDate: Date,
  reminder: Boolean,
  user: String
});

module.exports = mongoose.model('Goals', goalsSchema)
