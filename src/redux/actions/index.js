import { 
  CLIENT_ACTION,
} from "../../constants/actions";

export const addClient = (client) => {
  return {
    type: CLIENT_ACTION.CLIENT_ACTION_ADD_CLIENT,
    client,
  }
}

export const showAddClient = () => {
  return {
    type: CLIENT_ACTION.CLIENT_ACTION_SHOW_ADD_CLIENT
  }
}

export const hiddenAddClient = () => {
  return {
    type: CLIENT_ACTION.CLIENT_ACTION_HIDDEN_ADD_CLIENT,
  }
}

export const handleChange = (value, id) => {
  return {
    type: CLIENT_ACTION.CLIENT_ACTION_HANDLE_INFO_CLIENT,
    value,
    id
  }
}
  export const deleteClient = (client, position) => {
    return {
      type: CLIENT_ACTION.CLIENT_ACTION_DELETE_CLIENT,
      clientSelected: client,
      positionSelected: position
    }
}
