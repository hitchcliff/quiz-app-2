import { Difficulty, SelectionType } from "../../Actions/types/questions.types";
import { SelectionDispatchType, SELECTION_FAIL, SELECTION_SUCCESS, SELECTION_LOADING } from "../../Actions/types/selection.types";

interface InitialState {
    amount: number,
    category: number,
    difficulty: Difficulty,
    type: SelectionType,
    loading: boolean
}

const initialState: InitialState = {
    amount: 10,
    category: 9,
    difficulty: Difficulty.EASY,
    type: SelectionType.MULTIPLE,
    loading: false
}

export const SelectionReducer = (state: InitialState = initialState, action: SelectionDispatchType) => {
    switch(action.type) {
        case SELECTION_LOADING: {
            return {
                loading: true
            }
        }
        case SELECTION_SUCCESS: {
            return {
                state: action.payload,
                loading: false
            }
        }
        case SELECTION_FAIL: {
            return {
                
                loading: false
            }
        }
        default: 
            return state;
    }
}