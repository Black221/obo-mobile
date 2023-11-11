import React, { useContext, useState, createContext, Provider } from "react";


export const AppContext = React.createContext<any | null>(null);


export const AppProvider = ({ children }: {children: JSX.Element}) : any => {

  //dark mode
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  //auth state
  const [auth, setAuth] = useState<any>(null);
  const [token, setToken] = useState<string | null>(null);

  const login = () => {

  }
  
  const logout = () => {

  }

  //global state
  const [notifications, setNotifications] = useState<number>(0);
  const [chatNotifications, setChatNotifications] = useState<number>(0);



  return (
    <AppContext.Provider value={{
      darkMode, toggleDarkMode,
      notifications, setNotifications,
      chatNotifications, setChatNotifications
    }}>
      {children}
    </AppContext.Provider>
  );
};

