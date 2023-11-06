import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Question } from '../components';
import FinishPage from './FinishPage';

const QuizPage = () => {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [finished, setFinished] = useState(false);
  const questions = useSelector((state) => state.questions);

  const onNextClick = async (selectedAnswers, correctAnswers, last) => {
    let isCorrect = false;

    selectedAnswers.forEach((answer) => {
      if (answer.correct) {
        isCorrect = true;
      } else {
        isCorrect = false;
      }
    });

    if (correctAnswers.length === selectedAnswers.length && isCorrect) {
      setScore((prev) => prev + 1);
    }

    if (last) {
      setFinished(true);
    }

    setCurrentQuestion(currentQuestion + 1);
  };

  const onPrevClick = () => {
    if (currentQuestion !== 0) {
      setCurrentQuestion(currentQuestion - 1);
      if (score !== 0) {
        setScore(score - 1);
      }
    }
  };

  const onRestart = () => {
    setScore(0);
    setCurrentQuestion(0);
    setFinished(false);
  };

  if (!questions.length) {
    return <div>Loading...</div>;
  }

  return finished ? (
    <FinishPage
      score={score}
      numberOfQuestions={questions.length}
      onRestart={onRestart}
    />
  ) : (
    <Question
      first={0 === currentQuestion}
      last={questions.length - 1 === currentQuestion}
      title={questions[currentQuestion].title}
      answers={questions[currentQuestion].answers}
      onNextClick={onNextClick}
      onPrevClick={onPrevClick}
    />
  );
};

export default QuizPage;
