import { Dispatch } from "react";

export const isSelectionSuccess =  async (result: boolean) => (dispatch: Dispatch<Selection_Succeeded>) => {
    try {
        dispatch({
            type: SELECTION_SUCCEEDED,
            payload: result            
        })
    } catch (error) {
        console.log(error)
    }
}

export const SELECTION_SUCCEEDED = 'SELECTION_SUCCEEDED';
export interface Selection_Succeeded {
    type: typeof SELECTION_SUCCEEDED,
    payload: boolean
}