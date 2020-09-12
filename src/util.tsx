import { QuestionsParams } from "./Actions/types/questions.types";
import { QuestionSessionStorage } from "./components/QuestionsPage/QuestionsPage";

export const QuestionSelectionValidation = (params: QuestionsParams): boolean => {
    if(!params.amount || !params.category || !params.difficulty || !params.selectionType) {
        return true //set is completed to be disabled
    } return false //set is completed to enabled
}

export const setQuestionInSession = (loading: boolean, questions: any): void => { // set the question in the session
    const data: QuestionSessionStorage = {loading, questions}
    sessionStorage.setItem('Questions', JSON.stringify(data))
}

export const getQuestionInSession = () => { // Get the question in the session
    const data: string | any = sessionStorage.getItem('Questions'); // assignment data need types
    let result: QuestionSessionStorage = JSON.parse(data); // parsing data
    return result
}

export const checkUserAnswer = (value: string, correct: string | undefined) => { //Check user answer
    if(value === correct) {
        return true;
    } return false;
}

export const setScoreInSession = (score: number) => { // save the score to session
    sessionStorage.setItem('Current Score', JSON.stringify(score));
}

export const getScoreInSession = () => {
    const data: number | any = sessionStorage.getItem('Current Score');
    let result: number = JSON.parse(data);
    return result
}