import { RECEIVE_USERS } from "../actions/users"
import { ADD_ANSWER } from "../actions/questions";
export default function users (state = {}, action)  {

    switch(action.type){
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case ADD_ANSWER:
            const answers = state[action.authedUser].answers
            answers[action.qid] = action.answer;
            console.log('answerse',answers)
            console.log('state iss',state)
            return {
                ...state,
            }
            
        default: 
            return state;
 
        }

    }