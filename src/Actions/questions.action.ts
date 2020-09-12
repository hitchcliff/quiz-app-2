import { Dispatch } from 'redux';
import { FetchQuestionsDispatchTypes, FETCH_QUESTIONS_LOADING, FETCH_QUESTIONS_SUCCESS, FETCH_QUESTIONS_FAIL, QuestionsParams } from './types/questions.types';
import Axios from 'axios';

export const fetchQuestions = (param: QuestionsParams) => async (dispatch: Dispatch<FetchQuestionsDispatchTypes>) => {
    try {
       dispatch({
           type: FETCH_QUESTIONS_LOADING
       })

        //done loading    
       const endpoint = `https://opentdb.com/api.php?amount=${param.amount}&category=${param.category}&difficulty=${param.difficulty}&type=${param.selectionType}`
       const { data: { results } } = await Axios.get(endpoint);
       dispatch({
           type: FETCH_QUESTIONS_SUCCESS,
           payload: results
       })

    } catch (error) {
        // fetching questions failed
       dispatch({
           type: FETCH_QUESTIONS_FAIL
       }) 
       console.log(error)
    }
}