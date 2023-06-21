import axios from "axios";

export const getApi = () => {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(res => {
                dispatch({
                    type: 'GET_DATA',
                    data: res.data
                })
            })
    };
};