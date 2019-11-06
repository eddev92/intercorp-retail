import { 
  CLIENT_ACTION,
} from "../../constants/actions";

// export const addClient = (newClient) => {
//   return {
//     type: CLIENT_ACTION.ADD_CLIENT,
//     newClient,
//   }
// }

export const showAddClient = () => {
  return {
    type: CLIENT_ACTION.CLIENT_ACTION_ADD_CLIENT
  }
}

export const hiddenAddClient = () => {
  return {
    type: CLIENT_ACTION.CLIENT_ACTION_HIDDEN_ADD_CLIENT,
  }
}

