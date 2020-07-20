import axios from 'axios';

export const addComment = (comment) => {
    return {
        type: "ADD_COMMENT",
        payload: comment
    }
}

export const fetchComment = () => {
    return async (dispatch) => {
        const random = Math.floor(Math.random() * 100);
        const response = await axios.get(`https://jsonplaceholder.typicode.com/comments/1`);
        dispatch({
            type:"ADD_COMMENT",
            payload: response.data.body
        })
    }
}