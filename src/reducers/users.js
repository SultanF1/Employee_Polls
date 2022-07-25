import { RECEIVE_USERS, AUTHENTICATE_USER } from "../actions/users";
import { ADD_ANSWER } from "../actions/questions";
export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ADD_ANSWER:
      const answers = state[action.authedUser].answers;
      answers[action.qid] = action.answer;
      console.log("answerse", answers);
      console.log("state iss", state);
      return {
        ...state,
      };
    case AUTHENTICATE_USER:
      console.log("AUTHENTICATE USER DISPATCHED", action);
      const tmp = state;
      tmp["authedUser"] = action.authedUser;

      return {
        ...tmp,
      };

    default:
      return state;
  }
}
