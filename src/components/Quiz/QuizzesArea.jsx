/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useQuizDetails from '../../app/hooks/useQuizDetails';
import QuizCard from './QuizCard';

const QuizzesArea = () => {

    const { quizzes } = useSelector((state) => state.quiz);
    const { loading } = useQuizDetails();
  
    return (
        <div className=''>
            <h2 className='text-xl font-bold'>Quizzes</h2>
            <div className='mt-6 flex gap-2 flex-wrap'>
                {quizzes.map((quiz) => (
                    <QuizCard quiz={quiz} key={quiz.id}/>
                ))}
            </div>
        </div>
    );
  };
  
  export default QuizzesArea;