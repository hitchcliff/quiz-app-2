import { Dispatch } from "react";
import { SELECTION_FAIL, SELECTION_LOADING, SELECTION_SUCCESS, SelectionDispatchType } from "./types/selection.types";
import { QuestionsParams } from "./types/questions.types";

export const userQuestionTypeSelection = async (param: QuestionsParams) => (dispatch: Dispatch<SelectionDispatchType>) => {
    try {
        dispatch({
            type: SELECTION_LOADING,
        })        

        // if success
        dispatch({
            type: SELECTION_SUCCESS,
            payload: param
        })


    } catch (error) {
        dispatch({
            type: SELECTION_FAIL,
        })
        console.log(error)
    }
}