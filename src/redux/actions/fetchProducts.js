import { POST_FETCHING,POST_FETCH_SUCCESS,POST_FETCH_ERROR } from "./actionType";


export const postFetching = () => {

    return {
        type: POST_FETCHING
    }
}

export const postFetchSuccess = (data) => {
    return {
        type: POST_FETCH_SUCCESS,
        payload: data
    }

}

export const postFetchError = (error) => { 
    return {
        type: POST_FETCH_ERROR,
        payload: error
    }
}