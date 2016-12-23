import mongoose from 'mongoose'

const goalsSchema = mongoose.Schema({
  goal: {type: String, required: true},
  completed: {type: Boolean, default: false},
  difficulty: String,
  reward: Number,
  dueDate: Date,
  reminder: Boolean,
  user: String
});

module.exports = mongoose.model('Goals', goalsSchema)
