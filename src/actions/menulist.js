import axios from 'axios';

function requestStart(){
    return {
        type:'REQUEST_MENU_START'
    }
}
function requestSuccess(response) {
    return {
        type:'REQUEST_MENU_SUCCESS',
        data: response.data
    }
}

function requestFail(error) {
    return {
        type: 'REQUEST_MENU_FAIL',
        error
    }
}   
export function fetchList() {
    return (dispatch, store) => {
        console.log("response")
        dispatch(requestStart());
        axios
        .get("https://stream-restaurant-menu-svc.herokuapp.com/category")
        .then(response => {
            console.log(response)
            dispatch(requestSuccess(response));

        })
        .catch(err =>{
            dispatch(requestFail(err));
        });
    };
}

// export const fetchList = () => async dispatch =>{
//     const res = await axios.get("https://stream-restaurant-menu-svc.herokuapp.com/category")
//       dispatch({
//           type:'FETCH_MENULIST',
//           data: res.data
//       })
// }