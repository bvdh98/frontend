import React, { createContext, useContext,useEffect } from 'react'
import PersonForm from './PersonForm'
import CarForm from './CarForm'
import { useReducer } from 'react'
import { postPerson } from './FormAPI'

const MainContext = createContext();

export const useMainContext = () => {
  return useContext(MainContext);
};

const defaultState = {
  person: {
    first_name: "",
    last_name: "",
    email: ""
  },
  car: { year: 0, price: 0, brand: "", person: null }
}

const reducer = (state, action) => {
  if (action.type === "first_name entered") {
    return {
      ...state,
      person: { ...state.person, first_name: action.payload }
    };
  }
  else if (action.type === "last_name entered") {
    return {
      ...state,
      person: { ...state.person, last_name: action.payload }
    };
  }
  else if (action.type === "email entered") {
    return {
      ...state,
      person: { ...state.person, email: action.payload }
    };
  }
  else if (action.type === "Year entered") {
    return {
      ...state,
      car: { ...state.car, year: action.payload }
    };
  }
  else if (action.type === "Price entered") {
    return {
      ...state,
      car: { ...state.car, price: action.payload }
    };
  }
  else if (action.type === "Brand entered") {
    return {
      ...state,
      car: { ...state.car, brand: action.payload }
    };
  }
  else if (action.type === "add person") {
    const result = postPerson(state.person)
    return {
      ...state
    };
  }
  else {
    return defaultState;
  }
}

const MainContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const value = { state, dispatch };
  return (
    <MainContext.Provider value={value}>
      {children}
    </MainContext.Provider>
  )
}

export default MainContextProvider