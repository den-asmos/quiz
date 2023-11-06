import { useState } from 'react';
import { deleteIcon } from '../assets';
import Button from './Button';

const Answer = ({
  answer,
  onAnswerChange,
  onAnswerDelete,
  canDeleteAnswer,
}) => {
  const [answerValue, setAnswerValue] = useState(answer);
  const [correct, setCorrect] = useState(answer.correct);

  const onChange = ({ target }) => {
    const newAnswer = { ...answerValue, title: target.value };
    onAnswerChange(answer, newAnswer);
    setAnswerValue(newAnswer);
  };

  const onCorrectChange = () => {
    const newAnswer = { ...answerValue, correct: !correct };
    onAnswerChange(answer, newAnswer);
    setCorrect((prev) => !prev);
  };

  return (
    <li className="mt-2 mb-4 py-2 px-4 flex justify-between items-center border border-[var(--color-mint)] rounded-md">
      <input
        type="text"
        value={answerValue.title}
        onChange={onChange}
        className="focus:outline-none"
      ></input>
      <div className="flex items-center gap-4">
        <Button
          className="flex gap-2 hover:cursor-pointer hover:disabled:cursor-default"
          disabled={!canDeleteAnswer}
        >
          <img
            src={deleteIcon}
            alt="delete-icon"
            onClick={() => onAnswerDelete(answer)}
            className="w-4 h-4"
          />
        </Button>
        <input
          type="checkbox"
          checked={correct}
          onChange={onCorrectChange}
          className="tick"
        />
      </div>
    </li>
  );
};

export default Answer;
