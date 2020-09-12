import { QuestionsParams } from "./questions.types";

export const SELECTION_LOADING = "SELECTION_LOADING";
export const SELECTION_SUCCESS = "SELECTION_SUCCESS";
export const SELECTION_FAIL = "SELECTION_FAIL";

interface Selection_Loading {
    type: typeof SELECTION_LOADING,
}

interface Selection_Success {
    type: typeof SELECTION_SUCCESS,
    payload: QuestionsParams
}

interface Selection_Fail {
    type: typeof SELECTION_FAIL,
}

export type SelectionDispatchType = Selection_Loading | Selection_Success | Selection_Fail