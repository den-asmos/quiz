const mongoose = require('mongoose');

const QuestionSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  answers: {
    type: [{ title: String, correct: Boolean }],
    required: true,
  },
});

const Question = mongoose.model('Question', QuestionSchema);

module.exports = { Question };
