import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  cars: [],
  brands: [
    {
      id: 1,
      name: "VW",
    },
    {
      id: 2,
      name: "Chevrolet",
    },
    {
      id: 3,
      name: "FIAT",
    },
    {
      id: 4,
      name: "Ford",
    },
    {
      id: 5,
      name: "Nissan",
    },
    {
      id: 6,
      name: "Mitsubishi",
    },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addCar = (car) => {
    dispatch({
      type: "ADD_CAR",
      payload: car,
    });
  };

  const removeCar = (id) => {
    dispatch({
      type: "REMOVE_CAR",
      payload: id,
    });
  };

  const editCar = (car) => {
    dispatch({
      type: "EDIT_CAR",
      payload: car,
    });
  };

  return (
    <GlobalContext.Provider
      value={{ cars: state.cars, addCar, removeCar, editCar, brands: state.brands }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
