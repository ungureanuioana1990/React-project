export enum ErrorActionTypes {
    SET_ERROR = 'SET_ERROR',
    CLEAR_ERROR = 'CLEAR_ERROR',
  }

  interface SetErrorAction {
    type: typeof ErrorActionTypes.SET_ERROR;
    payload: string; 
  }
  
  interface ClearErrorAction {
    type: typeof ErrorActionTypes.CLEAR_ERROR;
  }
  
  export const setError = (errorMessage: string): SetErrorAction => ({
    type: ErrorActionTypes.SET_ERROR,
    payload: errorMessage,
  });
  
  export const clearError = (): ClearErrorAction => ({
    type: ErrorActionTypes.CLEAR_ERROR,
  });
  
  export type ErrorAction = SetErrorAction | ClearErrorAction;

  