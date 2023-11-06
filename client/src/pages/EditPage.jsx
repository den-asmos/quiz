import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, EditField } from '../components';
import { addQuestionAsync, loadQuestionsAsync } from '../redux/actions';
import { deleteQuestionAsync } from '../redux/actions/deleteQuestionAsync';
import { useNavigate } from 'react-router-dom';

const EditPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const questions = useSelector((state) => state.questions);
  const [isLoading, setIsLoading] = useState(false);

  const onQuestionAdd = () => {
    setIsLoading(true);

    const newQuestion = {
      title: 'Новый вопрос',
      answers: [
        { title: 'Ответ 1', correct: true },
        { title: 'Ответ 2', correct: false },
        { title: 'Ответ 3', correct: false },
      ],
    };

    dispatch(addQuestionAsync(newQuestion)).then(() => {
      dispatch(loadQuestionsAsync()).then(() => {
        setIsLoading(false);
      });
    });
  };

  const onQuestionChange = () => {
    setIsLoading(true);
    dispatch(loadQuestionsAsync()).then(() => {
      setIsLoading(false);
    });
  };

  const onQuestionDelete = (id) => {
    dispatch(deleteQuestionAsync(id));
  };

  return (
    <div className="h-full w-[80%]">
      <ul className="w-full flex flex-col items-center">
        {!isLoading &&
          questions.map((question) => (
            <EditField
              key={question.title}
              id={question._id}
              title={question.title}
              answers={question.answers}
              onDelete={onQuestionDelete}
              onChange={onQuestionChange}
              canDeleteQuestion={questions.length > 1}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          ))}
      </ul>
      <Button
        title="Добавить вопрос"
        onClick={onQuestionAdd}
        disabled={isLoading}
      />
      <div className="flex justify-end">
        <Button title="Назад" onClick={() => navigate('/')} />
      </div>
    </div>
  );
};

export default EditPage;
