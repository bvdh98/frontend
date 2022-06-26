import React, { useEffect } from 'react'
import PersonForm from './PersonForm'
import CarForm from './CarForm'
import { useReducer } from 'react'

const defaultState = {
  person: {
    first_name: "",
    last_name: "",
    email: ""
  },
  car: { year: 0, price: 0, brand: "", person: null }
}

const endPoint = "http://localhost:3000/api/v1"

const postPerson = async (person) => {
  const url = endPoint + "/people"
  console.log(JSON.stringify({ person, }))
  fetch(url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ person, })
  }).then((response) => response.json())
    .catch((error) => {
      console.log("Error: ", error);
    });
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
    postPerson(state.person)
    return {
      ...state
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