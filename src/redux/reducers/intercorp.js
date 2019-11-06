import { CLIENT_ACTION } from "../../constants/actions";
import { defaultValues } from "../../constants/constants";

let defaultState = defaultValues;

const intercorp = (state = defaultState, action) => {
  switch (action.type) {
    // case CLIENT_ACTION.CLIENT_ACTION_ADD_CLIENT:
    // return {
    //   ...state,
    //   // client: 
    // }
    case CLIENT_ACTION.CLIENT_ACTION_ADD_CLIENT:
      return {
        ...state,
        showAdd: true
      }
    case CLIENT_ACTION.CLIENT_ACTION_HIDDEN_ADD_CLIENT:
      return {
        ...state,
        showAdd: false
      }
    default:
      return state
  }
}

export default intercorp;
