import { CLIENT_ACTION, RESET_VALUES } from "../../constants/actions";
import { defaultValues } from "../../constants/constants";

let defaultState = defaultValues;

const intercorp = (state = defaultState, action) => {
  switch (action.type) {
    case CLIENT_ACTION.CLIENT_ACTION_SHOW_ADD_CLIENT:
      return {
        ...state,
        showAdd: true
      }
    case CLIENT_ACTION.CLIENT_ACTION_HIDDEN_ADD_CLIENT:
      return {
        ...state,
        showAdd: false
      }
    case CLIENT_ACTION.CLIENT_ACTION_UPDATE_CLIENTS:
        return {
          ...state,
          clients: action.newListClients
        }
    case CLIENT_ACTION.CLIENT_ACTION_ADD_CLIENT: {
        const aux = [ ...state.clients ];

        aux.push(action.client);

        return {
          ...state,
          clients: aux
        }
      }
    case CLIENT_ACTION.CLIENT_ACTION_HANDLE_INFO_CLIENT: {
      const aux = {  ...state.client };

      aux[action.id] = action.value;
      return {
        ...state,
        client: aux
      }
    }
    case CLIENT_ACTION.CLIENT_ACTION_DELETE_CLIENT: {
      const aux = [ ...state.clients ];

      for (let i = 0; i < aux.length; i++) {
        if ((aux[i].names === action.clientSelected.names) &&
            (aux[i].lastNames === action.clientSelected.lastNames) &&
            (aux[i].age === action.clientSelected.age)
             && i === (action.positionSelected)) {
              aux.splice(i, 1);
             }
      }
      return {
        ...state,
        clients: aux
      }
    }
    case RESET_VALUES.RESET_CLIENT_VALUES: 
    return {
      ...state,
      client: defaultState.client
    }
    default:
      return state
  }
}

export default intercorp;
