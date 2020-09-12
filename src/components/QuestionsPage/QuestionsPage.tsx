import React, { useEffect, useState } from 'react'
import styles from './QuestionsPage.module.scss'
import Sidebar from '../Sidebar/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { Questions } from '../../Actions/types/questions.types'
import { getQuestionInSession, checkUserAnswer, setScoreInSession } from '../../util'
import Question from '../Question/Question';
import { ScoreAction } from '../../Actions/score.action'
import { CurrentAction } from '../../Actions/current.action'
import { RootStore } from '../../Store'
import NotAvailable from '../NotAvailable/NotAvailable'

export type QuestionSessionStorage = { //Session storage type used in setItem
    loading: boolean,
    questions?: Questions[]
}

const QuestionsPage = () => {
    const dispatch = useDispatch()
    const [data, setData] = useState<QuestionSessionStorage | undefined>(undefined) // list of all data
    const [answers, setAnswers] = useState<string[] | undefined>(undefined);
    const [currentIndex, setCurrentIndex] = useState<number>(0); // means current number in the question
    const [currentCorrectAnswer, setCurrentCorrectAnswer] = useState<string | undefined>(undefined)
    const [isDone, setIsDone] = useState<boolean | undefined>(undefined);
    const [currentScore, setCurrentScore] = useState<number>(0);
    
    const currentIndexAtQuestion = useSelector((state: RootStore) => state.currentIndexAtQuestion); // current index

    useEffect(() => { // for fetching session   
        // fetch the questions in session
        const fetchSession = async() => {
            const result = await getQuestionInSession();
            setData(result) // set data of 
        }
        fetchSession()
    }, [dispatch])

    useEffect(() => {
       if(!data) return;
       if(!data.questions) return;
       const { questions } = data;

       const currentIndexDispatch = async () => {
            const result = await CurrentAction(currentIndex)
            dispatch(result); // dispatching the current index
        }

        // !important, check if we have questions left
       if(questions.length >= currentIndexAtQuestion.currentIndex) {
           const currentQuestion = questions[currentIndex];
           if(!currentQuestion) return;
           mapAnswers(currentQuestion); // map all answers in question
           currentIndexDispatch()   
       } return;

   }, [data, currentIndexAtQuestion, currentIndex, dispatch])
   
   if(!data) return null; // check if we have data

   const mapDataQuestions: any = (current: number): JSX.Element | null => { // map all the question
        if(!data.questions) return null; // check if it exist
        const { questions } = data; 
        const currentQuestion = questions[current]; // get current question based on 'currentIndex'
        
        if(!currentQuestion || !answers) return null; 

        return <Question // call Question component and pass all the values
                    category={currentQuestion.category} 
                    answers={answers}
                    question={currentQuestion.question}
                    callback={handleClick}
                />
   }
   
    const mapAnswers = (question: Questions): null | void => {
        const correctAnswer = question.correct_answer;
        const incorrectAnswers = question.incorrect_answers.map(item => item);
        if(!question && !correctAnswer && incorrectAnswers) return;
        else {
            setAnswers([...incorrectAnswers, correctAnswer]); // copy all incorrect answers and add correct answer
            setCurrentCorrectAnswer(correctAnswer); // set current correct answer for value checking
        } 
    }

    // when user chooses an answer
    const handleClick = (value: string): void => { 
        const done = checkUserAnswer(value, currentCorrectAnswer); // call check user function in util 
        setIsDone(done); // user clicked next question button
    }

    // when user clicked next
    const handleNext = async() => {
        setCurrentIndex(prev => prev + 1); //Move on to the next question
        if(!isDone) return; // double check whether user clicked next question
        
        setCurrentScore(prev => prev + 1); // add + 1 to the score since it is correct
        const saveTheScore = await ScoreAction(currentScore);        
        dispatch(saveTheScore) // dispatch the current score

        // save score in session + 1
        setScoreInSession(currentScore);
    }
    
    return (
        <div className={styles.container}>
            <div className={styles.question}>
                {/* Render questions */}
                {!data.loading && data.questions && mapDataQuestions(currentIndex)}

                {/* Render Error "No Questions" */}
                {!data.loading && !data.questions && <NotAvailable />}
            
            </div>
            {/* Visible props is checking whether we have questions available, if so, show button */}
            <Sidebar next={handleNext} visible={data.questions ? true : false} score={currentScore}/>
        </div>
    )
}

export default QuestionsPage