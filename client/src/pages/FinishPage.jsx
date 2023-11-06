import { useNavigate } from 'react-router-dom';
import { Button } from '../components';
import { useEffect } from 'react';

const FinishPage = ({ score, numberOfQuestions, onRestart }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const data = {
      date: new Date(),
      numberOfQuestions,
      numberOfCorrectAnswers: score,
    };
    const attempts = localStorage.getItem('attempts')
      ? JSON.parse(localStorage.getItem('attempts'))
      : [];

    attempts.push(data);
    localStorage.setItem('attempts', JSON.stringify(attempts));
  }, [numberOfQuestions, score]);

  return (
    <div className="w-[60%] flex flex-col justify-center items-center">
      <h1 className="mb-4 text-3xl">Тест завершён</h1>
      <p className="text-xl mb-8">
        Правильных ответов:{' '}
        <span className="text-[var(--color-green)]">{score}</span>
      </p>
      <div className="flex gap-8">
        <Button title="На главную" onClick={() => navigate('/')} />
        <Button title="Пройти ещё раз" onClick={onRestart} />
      </div>
    </div>
  );
};

export default FinishPage;
