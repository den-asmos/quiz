import { useState } from 'react';
import Button from './Button';

const Question = ({
  title,
  answers,
  onNextClick,
  onPrevClick,
  first,
  last,
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const correctAnswers = answers.filter((item) => item.correct);

  const onSelect = (answer) => {
    const answers = selectedAnswers.includes(answer)
      ? selectedAnswers.filter((item) => item._id !== answer._id)
      : [...selectedAnswers, answer];
    setSelectedAnswers(answers);
  };

  const onContinue = () => {
    console.log(selectedAnswers, correctAnswers);
    onNextClick(selectedAnswers, correctAnswers, last);
    setSelectedAnswers([]);
  };

  return (
    <div className="w-[60%] my-4 p-4 border border-[var(--color-mint)] rounded-md">
      <h1 className="mb-4 text-3xl">{title}</h1>
      <ul>
        {answers.map((answer) => (
          <li
            key={answer._id}
            onClick={() => onSelect(answer)}
            className={`my-2 py-2 px-4 border border-[var(--color-mint)] rounded-md hover:bg-[var(--color-mint)] duration-200 ease-in ${
              selectedAnswers.includes(answer) && 'bg-[var(--color-mint)]'
            }`}
          >
            {answer.title}
          </li>
        ))}
      </ul>

      <div className="mt-4 flex justify-between items-center">
        <Button title="Назад" onClick={onPrevClick} disabled={first} />
        <Button
          title={`${last ? 'Завершить' : 'Далее'}`}
          onClick={onContinue}
          disabled={!selectedAnswers.length}
        />
      </div>
    </div>
  );
};

export default Question;
