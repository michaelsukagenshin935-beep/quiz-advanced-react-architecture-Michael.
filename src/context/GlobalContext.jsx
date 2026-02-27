import { createContext, useReducer, useEffect } from "react";
import { reducer } from "./reducer";
import { initialState } from "./initialState";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  // 🔥 Ambil data dari localStorage dengan aman
  const getInitialState = () => {
    try {
      const storedState = localStorage.getItem("state");
      return storedState ? JSON.parse(storedState) : initialState;
    } catch (error) {
      console.error("Error parsing localStorage:", error);
      return initialState;
    }
  };

  const [state, dispatch] = useReducer(reducer, getInitialState());

  // 🔥 Simpan ke localStorage setiap state berubah
  useEffect(() => {
    try {
      localStorage.setItem("state", JSON.stringify(state));
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  }, [state]);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};