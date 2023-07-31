import React, { createContext, useContext, useEffect, useReducer } from "react";

const CardStateContext = createContext();
const CardDispatchContext = createContext();

const getLocaleCartData = () => {
  try {
    const localeCartData = localStorage.getItem("userData");
    return localeCartData ? JSON.parse(localeCartData) : [];
  } catch (error) {
    console.error("Error parsing userData from localStorage:", error);
    return [];
  }
};
const isLocalStorageAvailable = () => {
  try {
    const testKey = "__test_key__";
    localStorage.setItem(testKey, testKey);
    localStorage.removeItem(testKey);
    console.log("local  storage available");
    return true;
  } catch (e) {
    console.warn(
      "localStorage is not available. Cart data will not be stored."
    );
    return false;
  }
};
const reducers = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: action.id,
          name: action.title,
          poster_path: action.poster,
        },
      ];
    case "REMOVE":
      let newArr = [...state];
      newArr.splice(action.index, 1);
      return newArr;
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducers, getLocaleCartData() || []);
  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(state));
  }, [state]);
  return (
    <CardDispatchContext.Provider value={dispatch}>
      <CardStateContext.Provider value={state}>
        {children}
      </CardStateContext.Provider>
    </CardDispatchContext.Provider>
  );
};
export const useCart = () => useContext(CardStateContext);
export const useDispatchCart = () => useContext(CardDispatchContext);
