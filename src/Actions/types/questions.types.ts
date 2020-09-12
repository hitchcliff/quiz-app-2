export const FETCH_QUESTIONS_FAIL = "FETCH_QUESTIONS_FAIL";
export const FETCH_QUESTIONS_LOADING = "FETCH_QUESTIONS_LOADING";
export const FETCH_QUESTIONS_SUCCESS = "FETCH_QUESTIONS_SUCCESS";

export interface Fetch_Questions_Fail {
    type: typeof FETCH_QUESTIONS_FAIL
}

export interface Fetch_Questions_Loading {
    type: typeof FETCH_QUESTIONS_LOADING
}

export interface Fetch_Questions_Success {
    type: typeof FETCH_QUESTIONS_SUCCESS,
    payload: Questions[];
}

// question types from the api
export type Questions = {
    category: string,
    correct_answer: string,
    difficulty: Difficulty,
    incorrect_answers: string[],
    question: string,
    type: string
}

// difficulty enums
export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}

// selection type
export enum SelectionType {
    MULTIPLE = "multiple",
    BOOL = "boolean"
}

// parameters passed in fetchQuestions Action
export interface QuestionsParams {
    amount: number | undefined, 
    category: number | undefined, 
    difficulty: Difficulty | undefined, 
    selectionType: SelectionType | undefined
}

export type FetchQuestionsDispatchTypes =  Fetch_Questions_Fail | Fetch_Questions_Loading | Fetch_Questions_Success;