import React, { ReactElement, useState, useEffect } from 'react'
import styles from './Startpage.module.scss';
import { useDispatch, useSelector } from 'react-redux'
import Sidebar from '../Sidebar/Sidebar';

// contents
import { Items, categoriesContent, difficultiesContent } from './content/selection.content';

// toggle component
import RadioToggle from '../RadioToggle/RadioToggle';

import QuestionMarkImage from '../../assets/images/question-mark.svg'
import CategorySelection, { IValueCategorySelectionProp } from '../CategorySelection/CategorySelection';
import AmountSelection, { IValueAmountSelectionProp } from '../AmountSelection/AmountSelection';
import { userQuestionTypeSelection } from '../../Actions/selection.action';
import { QuestionsParams, Difficulty, SelectionType } from '../../Actions/types/questions.types';
import DifficultySelection from '../DifficultySelection/DifficultySelection';
import { QuestionSelectionValidation, setAmountEnteredInSession, setQuestionInSession } from '../../util';
import { isSelectionSuccess } from '../../Actions/isSelectionSuccess.action';
import { fetchQuestions } from '../../Actions/questions.action';
import { RootStore } from '../../Store';
import { Link } from 'react-router-dom';

interface IAppProps {}

const Startpage: React.FC<IAppProps> = (): ReactElement => {
    const dispatch = useDispatch();
    const {questions,loading} = useSelector((state: RootStore) => state.questions)
    const [isNotCompleted, setisNotCompleted] = useState(true) //Starting trivia

    // 3 states for selection before starting trivia
    const [amountSelected, setAmountSelected] = useState<IValueAmountSelectionProp | undefined>(undefined); // state for amount entered
    const [categorySelected, setCategorySelected] = useState<IValueCategorySelectionProp | undefined>(undefined); // State for the number selected
    const [difficultySelected, setDifficultySelected] = useState<Difficulty | undefined>(undefined) // state for selected difficulty
    const [typeSelected, setTypeSelected] = useState<SelectionType | undefined>(undefined); // state for the type selected in radio
    
    const selectedChallenge: QuestionsParams = {
        amount: amountSelected,
        category: categorySelected,
        difficulty: difficultySelected,
        selectionType: typeSelected
    }
    
    const amountEntered = (e: React.ChangeEvent<HTMLInputElement>) => { //callback for selecting amount
        const target = e.currentTarget.value;
        setAmountSelected(parseInt(target)) // set the amount selected in state
        setAmountEnteredInSession(parseInt(target)) // set the amount in session
    }
    
    const selectCategory = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => { //callback to selecting category
        setCategorySelected(e.currentTarget.value);
    }

    const selectDifficulty = (e: string) => { //callback for selecting difficulty
        const name = e;
        if(name === 'easy') {
            return setDifficultySelected(Difficulty.EASY)
        } else if (name === 'medium') {
            return setDifficultySelected(Difficulty.MEDIUM)
        } else {
            setDifficultySelected(Difficulty.HARD)
        } 
     } 
    
    const selectType = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.currentTarget.value; //this is the value selected in radio buttons
    
        if(target === 'multiple') {
            return setTypeSelected(SelectionType.MULTIPLE)
        } return setTypeSelected(SelectionType.BOOL)
    }

    // handling user select
    const handleSubmitClick = async () => {
        try {
            // perform action
            const params = await userQuestionTypeSelection(selectedChallenge)
            dispatch(params)

            // update isSelectionSuccess action to true
            const isSuccess = await isSelectionSuccess(!isNotCompleted);
            dispatch(isSuccess)

            // fetch the question through the given params
            const query = await fetchQuestions(selectedChallenge);
            dispatch(query)
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        // validate inputs
        const validate = async () => {
            try {
                const validateInputs = await QuestionSelectionValidation(selectedChallenge);
                setisNotCompleted(validateInputs);
            } catch (error) {
                setisNotCompleted(true)    
                console.log(error)
            }
        }

        validate()
    }, [amountSelected, categorySelected, difficultySelected, typeSelected, selectedChallenge])

    // storing questions to session
    // useEffect(() => {
    //     const setDataSession = async() => {
    //         await setQuestionInSession(loading, questions);
    //     }
    //     setDataSession();
    // }, [questions, loading]) // run this once we have questions

    

    return (
        <div className={styles.container}>
            {/* selection */}
            <div className={styles.selection}>
                
                <div className={styles.categories}>
                    <h2>Categories</h2>
                    <div>
                        <CategorySelection callback={selectCategory} categories={categoriesContent}/>
                    </div>
                </div>

                <div className={styles.difficulty}>
                    <DifficultySelection callback={selectDifficulty} items={difficultiesContent}/>
                </div>
                
                <div className={styles.types}>
                    <h2>Types</h2>
                    <div className={styles.typesContainer}>
                        {/* radio button toggle component */}
                        <RadioToggle callback={selectType} items={Items}/>
                    </div>
                </div>
                <div className={styles.amount}>
                    <h2>Number <br/>of Questions</h2>
                    <AmountSelection callback={amountEntered}/>
                </div>
                <div className={styles.button}>
                    <button disabled={isNotCompleted} onClick={handleSubmitClick} className="primary-button">
                        <Link to={{
                            pathname: "/quiz-app-2/questions",
                            search: `?amount=${amountSelected}&category=${categorySelected}&difficulty=${difficultySelected}&type=${typeSelected}`
                        }}>Start trivia</Link>
                    </button>
                </div>
            </div>

            {/* Image */}
            <div className={styles.contentImage}>
                <img src={QuestionMarkImage} alt="undraw.co"/>
            </div>

            {/* Sidebar */}
            <div className={styles.sidebar}>
                <Sidebar />
            </div>
        </div>
    )
}

export default Startpage