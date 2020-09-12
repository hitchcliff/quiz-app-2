import { Selection_Succeeded, SELECTION_SUCCEEDED } from "../../Actions/isSelectionSuccess.action"

interface InitialStateType {
    success: boolean
}

const initialState: InitialStateType = {
    success: false
}

export const isSelectionSuccessReducer = (state: InitialStateType = initialState, action: Selection_Succeeded) => {
    switch(action.type) {
        case SELECTION_SUCCEEDED: {
            return {
                success: action.payload
            }
        }

        default: 
            return state
    }
}