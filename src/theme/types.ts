import { store } from "../store/store";

interface Colors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
  buttonBackground: string;
  buttonColor: string;
  buttonHoverBackground: string;
  white: string;
}

interface Typography {
  fontFamily: string;
  fontSizes: {
    small: string;
    medium: string;
    large: string;
  };
  lineHeight: string;
}

interface Spacing {
  small: string;
  medium: string;
  large: string;
}

export interface Theme {
  colors: Colors;
  typography: Typography;
  spacing: Spacing;
}

export type AppDispatch = typeof store.dispatch; 

export enum UserActionTypes {
  FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE',
  START_SLIDESHOW = 'START_SLIDESHOW',
  STOP_SLIDESHOW = 'STOP_SLIDESHOW',
}
