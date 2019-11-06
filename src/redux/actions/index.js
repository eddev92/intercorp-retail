import { 
        LOGIN_ACTION,
} from "../../constants/actions";

export const login = (user, password) => {
  return {
    type: LOGIN_ACTION.LOGIN_ACTION_LOGIN_USER,
    user,
    password
  }
}

