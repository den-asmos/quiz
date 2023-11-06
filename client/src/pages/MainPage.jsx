import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components';

const MainPage = () => {
  const [attempts, setAttempts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const attemptsFromLocalStorage = localStorage.getItem('attempts')
      ? JSON.parse(localStorage.getItem('attempts'))
      : [];

    setAttempts(attemptsFromLocalStorage);
  }, []);

  return (
    <div className="p-4 w-full flex flex-col justify-center items-center">
      <div className="w-full flex justify-center gap-8">
        <Button title="Запустить тест" onClick={() => navigate('/quiz')} />
        <Button title="Редактировать тест" onClick={() => navigate('/edit')} />
      </div>
      <h2 className="mt-8 mb-4 text-2xl">История прохождений</h2>
      <ul className="w-[50%]">
        {attempts.map((attempt) => (
          <li
            key={attempt.date.toString()}
            className="my-2 py-2 px-4 flex justify-between border border-[var(--color-mint)] rounded-md"
          >
            <p>{attempt.date.slice(0, 10)}</p>
            <p>
              Верно {attempt.numberOfCorrectAnswers} из{' '}
              {attempt.numberOfQuestions}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainPage;
