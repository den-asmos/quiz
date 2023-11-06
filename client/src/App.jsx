import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { loadQuestionsAsync } from './redux/actions';
import { MainPage, QuizPage, EditPage } from './pages';
import { Loader } from './components';

const App = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    dispatch(loadQuestionsAsync()).then(() => {
      setIsLoading(false);
    });
  }, [dispatch]);

  return (
    <div className="m-auto p-4 max-w-[1080px] h-screen flex flex-col justify-center items-center">
      {isLoading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/edit" element={<EditPage />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
