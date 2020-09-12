import { ScoreDispatchTypes, SAVE_SCORE_SUCCESS } from "../../Actions/score.action";

interface IScoreReducerState {
    score: number
}

const initialState: IScoreReducerState = {
    score: 0
}

export const scoreReducer = (state: IScoreReducerState = initialState, action: ScoreDispatchTypes) => {
    switch(action.type) {
        case SAVE_SCORE_SUCCESS: {
            return {
                score: action.payload
            }
        }
        default:
            return state
    }
}