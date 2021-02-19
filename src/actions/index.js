import axios from 'axios';
export const FETCH_SMURF_LOADING = "FETCH_SMURF_LOADING";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAIL = "FETCH_SMURF_FAIL";
export const ADD_SMURF = "ADD_SMURF";
export const SET_ERROR = "SET_ERROR";

export const fetchSmurfs = () => dispatch => {
    dispatch(fetchSmurfLoading());

    axios
        .get('http:/localhost:3333/smurfs')
        .then(res=>{
            console.log(res.data)
            dispatch(fetchSmurfSuccess(res.data));
        })
        .catch(err=>{
            dispatch(fetchSmurfFail(err.Response.code));
        });
}

export const fetchSmurfLoading = () => {
    return({ type:FETCH_SMURF_LOADING});
}

export const fetchSmurfSuccess = (smurf) => {
    return({type:FETCH_SMURF_SUCCESS, payload:smurf});
}

export const fetchSmurfFail = (error) => {
    return({type:FETCH_SMURF_FAIL, payload:error});
}

export const addSmurf = (smurf) => {
    return({type:ADD_SMURF, payload: smurf })
}

export const setError = (error) => {
    return({type: SET_ERROR, payload: error})
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of "state"