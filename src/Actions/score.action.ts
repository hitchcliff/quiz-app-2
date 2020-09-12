import { Dispatch } from "react";

export const ScoreAction = async (score: number) => (dispatch: Dispatch<ScoreDispatchTypes>) => {
    try {
        dispatch({
            type: SAVE_SCORE_SUCCESS,
            payload: score // dispatch the score to the reducer
        })
    } catch (error) {
            console.log(error)        
    }
}

export const SAVE_SCORE_SUCCESS = 'SAVE_SCORE_SUCCESS';

interface save_score_success {
    type: typeof SAVE_SCORE_SUCCESS,
    payload: number
}

export type ScoreDispatchTypes = save_score_success