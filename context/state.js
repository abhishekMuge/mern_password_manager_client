import { createContext, useContext } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  let sharedState = {
    accessToken: "secert goes here!!!",
  };

  const setToken = (token) => {
    console.log(token);
  };

  return (
    <AppContext.Provider value={{ sharedState, setToken: setToken }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
