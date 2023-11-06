const express = require('express');
const mongoose = require('mongoose');
const {
  getQuestions,
  addQuestion,
  deleteQuestion,
  editQuestion,
} = require('./controller');
const app = express();
const PORT = 7070;

app.use(express.json());

app.get('/questions', async (req, res) => {
  const questions = await getQuestions();
  res.json(questions);
});

app.post('/questions', async (req, res) => {
  try {
    await addQuestion(req.body);
    res.send(req.body);
  } catch (error) {
    console.error('Something went wrong...', error);
  }
});

app.put('/questions/:id', async (req, res) => {
  try {
    await editQuestion(req.params.id, req.body);
    res.json({
      _id: req.params.id,
      ...req.body,
    });
  } catch (error) {
    console.error('Something went wrong...', error);
  }
});

app.delete('/questions/:id', async (req, res) => {
  await deleteQuestion(req.params.id);
  res.json(req.params.id);
});

mongoose
  .connect(
    'mongodb+srv://eva:FUI6709ncw@cluster0.lakl2pt.mongodb.net/quiz?retryWrites=true&w=majority'
  )
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}...`);
    });
  });
