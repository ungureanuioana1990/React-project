import { UserActionTypes } from "../theme/types";

// Define the user state interface
export interface UserState {
  users: any[]; 
  loading: boolean;
  error: string | null;
  slideshowRunning: boolean;
}

// Define the initial state
const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
  slideshowRunning: false,
};

// Define the user reducer
const userReducer = (state = initialState, action: any): UserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case UserActionTypes.FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case UserActionTypes.FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UserActionTypes.START_SLIDESHOW:
      return {
        ...state,
        slideshowRunning: true,
      };
    case UserActionTypes.STOP_SLIDESHOW:
      return {
        ...state,
        slideshowRunning: false,
      };
    default:
      return state;
  }
};

export default userReducer;
