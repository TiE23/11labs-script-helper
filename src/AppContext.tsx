import React, { useState } from "react";

export interface State {
  apiKey: string;
  setApiKey: React.Dispatch<React.SetStateAction<string>>;
}

export const AppContext = React.createContext<State>({
  apiKey: "",
  setApiKey: () => {},
});

type AppContextProviderProps = {
  children: React.ReactNode;
};
export function AppContextProvider({ children }: AppContextProviderProps) {
  const [apiKey, setApiKey] = useState<string>(
    localStorage.getItem("apiKey") ?? ""
  );

  const value = { apiKey, setApiKey };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
