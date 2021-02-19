import { FETCH_SMURF_LOADING, FETCH_SMURF_SUCCESS, FETCH_SMURF_FAIL, ADD_SMURF, SET_ERROR} from './../actions';

export const initialState = {
    smurfs: [{
        id:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
        name:'Poppa Smurf',
        position:'Village Leader',
        nickname: 'Pops',
        description: 'Papa is the practical village leader and the father figure of 100 or so young Smurfs. He is easily identified by his red Smurf hat, pants, and a shortly-trimmed white beard and moustache.'
    }],
    isLoading: false,
    error: "",
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case(FETCH_SMURF_LOADING):
            return({
                ...state,
                isLoading: true
            });

        case(FETCH_SMURF_SUCCESS):
            return({
                ...state,
                smurfs: action.payload,
                isLoading: false
            });

        case(FETCH_SMURF_FAIL):
            return({
                ...state,
                error: action.payload,
                isLoading: false
            });
        
        case(ADD_SMURF):
            const newSmurf = {
                name: state.name,
                position: state.position,
                nickname: state.nickname,
                description: state.description,
            }
            console.log('newSmurf inside reducer:',newSmurf)
            return({
                ...state,
                isLoading: false,
                smurfs: [...state.smurfs, newSmurf ] // need to add new smurf details
            })

        case(SET_ERROR):
            return({
                ...state,
                error: 'you have an error'
            })

        default:
            return state;
    }
  };

export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomodate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.