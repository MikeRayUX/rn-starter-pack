import React, { useReducer } from 'react';

const SampleContext = React.createContext();

const sampleReducer = (state, action) => {
  switch (action.type) {
    case 'set_auth_error':
      return {
        ...state,
        auth_error: action.payload,
      };
    case 'set_is_loading':
      return {
        ...state,
        isLoading: action.payload,
      };
    case 'set_flash':
      return {
        ...state,
        flash: action.payload,
      };
    case 'set_form_valid':
      return {
        ...state,
        form_valid: action.payload,
      };
    case 'reset_state':
      return {
        ...state,
        auth_error: '',
        is_loading: false,
        form_valid: false,
        flash: '',
      };
    default:
      return state;
  }
};

export const SampleProvider = ({ children }) => {
  const [state, dispatch] = useReducer(sampleReducer, {
    dispatch: (params) => dispatch(params),
    auth_error: '',
    is_loading: false,
    form_valid: false,
    flash: '',
  });

  const setState = (type, payload) => {
    dispatch({ type, payload });
  };

  return (
    <SampleContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </SampleContext.Provider>
  );
};

export default SampleContext;
