import React, { createContext, useContext, useEffect } from 'react'
import { useReducer } from 'react'
import { getPeople, postPerson } from './FormAPI'

const MainContext = createContext();

export const useMainContext = () => {
  return useContext(MainContext);
};

const defaultState = {
  people: [],
  cars: [],
  newPerson: {
    first_name: "",
    last_name: "",
    email: "",
    isLoading:true,
  },
  newCar: { year: 0, price: 0, brand: "", person: null }
}
//reducer that handles all events and form actions
const reducer = (state, action) => {
  //load data from db into default state
  if (action.type === "load data") {
    return {
      ...state,
      isLoading:false,
      people: action.payload.people
    }
  }
  else if (action.type === "first_name entered") {
    return {
      ...state,
      newPerson: { ...state.newPerson, first_name: action.payload }
    };
  }
  else if (action.type === "last_name entered") {
    return {
      ...state,
      newPerson: { ...state.newPerson, last_name: action.payload }
    };
  }
  else if (action.type === "email entered") {
    return {
      ...state,
      newPerson: { ...state.newPerson, email: action.payload }
    };
  }
  else if (action.type === "Year entered") {
    return {
      ...state,
      newCar: { ...state.newCar, year: action.payload }
    };
  }
  else if (action.type === "Price entered") {
    return {
      ...state,
      newCar: { ...state.newCar, price: action.payload }
    };
  }
  else if (action.type === "Brand entered") {
    return {
      ...state,
      newCar: { ...state.newCar, brand: action.payload }
    };
  }
  //TODO: add functionality to handle addPerson event
  else if (action.type === "add person") {
    const result = postPerson(state.newPerson)
    return {
      ...state
    };
  }
  else {
    return defaultState;
  }
}

const MainContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const value = { state, dispatch };
  //asynchronously get data from db and then dispatch it to reducer
  useEffect(() => {
    (async () => {
      const people = await getPeople()
      dispatch({ type: "load data", payload: { people } })
    })();
  }, [])
  return (
    <MainContext.Provider value={value}>
      {children}
    </MainContext.Provider>
  )
}

export default MainContextProvider