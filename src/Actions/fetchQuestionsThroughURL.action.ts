import Axios from "axios";
import { Dispatch } from "react";

export const fetchQuestionsThroughURLAction = (result: Array<string>) => async (dispatch: Dispatch<any>) => {
    try {

       const endpoint = `https://opentdb.com/api.php?amount=${result[0]}&category=${result[1]}&difficulty=${result[2]}&type=${result[3]}`
       const { data: { results } } = await Axios.get(endpoint);

        dispatch({
            type: "FETCH_QUESTIONS_THROUGH_URL",
            payload: results 
        })

    } catch (error) {
        console.log(error)
    }
}

export const FETCH_QUESTIONS_THROUGH_URL = "FETCH_QUESTIONS_THROUGH_URL";