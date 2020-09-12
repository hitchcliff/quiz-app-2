import { Questions, FetchQuestionsDispatchTypes, FETCH_QUESTIONS_FAIL, FETCH_QUESTIONS_LOADING, FETCH_QUESTIONS_SUCCESS } from "../../Actions/types/questions.types";

export type QuestionsStateTypes = {
    loading: boolean,
    questions?: Questions[]
}

const initialState: QuestionsStateTypes = {
    loading: false,
}

const QuestionsReducer = (state: QuestionsStateTypes = initialState, action: FetchQuestionsDispatchTypes) => {
    switch(action.type) {
        case FETCH_QUESTIONS_LOADING: {
            return {
                loading: true
            }
        }
        case FETCH_QUESTIONS_SUCCESS: {
            return {
                loading: false,
                questions: action.payload
            }
        }
        case FETCH_QUESTIONS_FAIL: {
            return {
                loading: false
            }
        }
        default:
            return state;
    }
}

export default QuestionsReducer