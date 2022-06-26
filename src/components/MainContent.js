import React, { useEffect } from 'react'
import PersonForm from './PersonForm'
import CarForm from './CarForm'
import { useReducer } from 'react'

const defaultState = {
  fName: "",
  lName: "",
  email: "",
  car:{year:0,price:0,brand:"",person:null}
}

const reducer = (state, action) => {
  if (action.type === "first_name entered") {
    return {
      ...state,
      fName: action.payload
    };
  }
  else if(action.type === "last_name entered"){
    return {
      ...state,
      lName: action.payload
    };
  }
  else if(action.type === "email entered"){
    return {
      ...state,
      email: action.payload
    };
  }
  else if(action.type === "Year entered"){
    return {
      ...state,
      car: {...state.car,year:action.payload}
    };
  }
  else if(action.type === "Price entered"){
    return {
      ...state,
      car: {...state.car,price:action.payload}
    };
  }
  else if(action.type === "Brand entered"){
    return {
      ...state,
      car: {...state.car,brand:action.payload}
    };
  }
  else {
    return defaultState;
  }
}

const MainContent = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  return (
    <>
      <PersonForm dispatch={dispatch} />
      <CarForm dispatch={dispatch} />
    </>
  )
}

export default MainContent