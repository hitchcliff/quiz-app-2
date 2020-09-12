import { FETCH_QUESTIONS_THROUGH_URL } from "../../Actions/fetchQuestionsThroughURL.action"

interface InitialState {
    questions: any,
    loading: boolean | false
}
const initialState = {
    questions: [],
    loading: true
}
export const fetchQuestionsThroughURLReducer = (state: InitialState = initialState, action: any) => {
    switch(action.type) {
        case FETCH_QUESTIONS_THROUGH_URL: {
            return {
                loading: false,
                questions: action.payload
            }
        }
        default: 
            return state
    }
}