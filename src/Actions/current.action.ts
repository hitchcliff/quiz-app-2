import { Dispatch } from "react";

// use to determine current index of the question
export const CurrentAction = async(currentIndex: number) => (dispatch: Dispatch<CurrentIndexDispatchTypes>) => {
    try {
        dispatch({
            type: CURRENT_INDEX,
            payload: currentIndex
        })
    } catch (error) {
        console.log(error)
    }
}

export const CURRENT_INDEX = "CURRENT_INDEX";
interface current_index {
    type: typeof CURRENT_INDEX,
    payload: number
}

export type CurrentIndexDispatchTypes = current_index