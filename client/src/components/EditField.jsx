import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateQuestionAsync } from '../redux/actions';
import Button from './Button';
import Answer from './Answer';

const EditField = ({
  id,
  title,
  answers,
  onDelete,
  onChange,
  canDeleteQuestion,
  isLoading,
  setIsLoading,
}) => {
  const [titleValue, setTitleValue] = useState(title);
  const [answersValue, setAnswersValue] = useState(answers);
  const dispatch = useDispatch();

  const onSave = () => {
    setIsLoading(true);

    const question = {
      title: titleValue,
      answers: answersValue,
    };

    dispatch(updateQuestionAsync(id, question)).then(() => {
      setIsLoading(false);
    });
  };

  const onTitleChange = ({ target }) => {
    setTitleValue(target.value);
  };

  const onAnswersChange = (oldAnswer, changedAnswer) => {
    const newAnswers = answersValue.map((answer) => {
      if (answer._id === oldAnswer._id) {
        return changedAnswer;
      }
      return answer;
    });
    setAnswersValue(newAnswers);
  };

  const onAnswerAdd = () => {
    const newAnswers = [
      ...answersValue,
      { title: 'Вариант ответа', correct: false },
    ];

    const question = {
      title: titleValue,
      answers: newAnswers,
    };

    dispatch(updateQuestionAsync(id, question)).then(() => {
      onChange();
    });
  };

  const onAnswerDelete = (answerToDelete) => {
    const newAnswers = answersValue.filter(
      (answer) => answer._id !== answerToDelete._id
    );

    const question = {
      title: titleValue,
      answers: newAnswers,
    };

    dispatch(updateQuestionAsync(id, question)).then(() => {
      onChange();
    });
  };

  return (
    <li className="w-full p-4 mb-6 flex flex-col border border-[var(--color-green)] rounded-md">
      <input
        type="text"
        value={titleValue}
        onChange={onTitleChange}
        className="mb-4 py-2 px-4 border border-[var(--color-mint)] rounded-md text-2xl focus:border-[var(--color-green)] focus:outline-none"
      ></input>
      <ul>
        <Button title="+" onClick={onAnswerAdd} disabled={isLoading} />
        {answersValue.map((answer) => (
          <Answer
            key={answer._id}
            answer={answer}
            onAnswerChange={onAnswersChange}
            onAnswerDelete={onAnswerDelete}
            canDeleteAnswer={answersValue.length > 1}
          />
        ))}

        <div className="flex gap-2">
          <Button title="Сохранить" onClick={onSave} disabled={isLoading} />
          <Button
            title="Удалить вопрос"
            onClick={() => onDelete(id)}
            disabled={isLoading || !canDeleteQuestion}
          />
        </div>
      </ul>
    </li>
  );
};

export default EditField;
