import { USER_UPDATE, USER_RESET } from "../../actions";

const initialState = {
  email: null,
  password: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_UPDATE:
      const newState = { ...state, ...action.payload };
      return newState;
    case USER_RESET:
      return initialState;
    default:
      return state;
  }
};

export default reducer;