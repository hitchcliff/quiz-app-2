import { CurrentIndexDispatchTypes, CURRENT_INDEX } from "../../Actions/current.action"

interface ICurrentReducerState {
    currentIndex: number
}
const initialState = {currentIndex: 0}
export const currentReducer = (state: ICurrentReducerState = initialState, action: CurrentIndexDispatchTypes) => {
    switch(action.type) {
        case CURRENT_INDEX: {
            return {
                currentIndex: action.payload
            }
        }
        default:
            return state
    }
} 