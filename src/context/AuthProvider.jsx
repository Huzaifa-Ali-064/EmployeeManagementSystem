import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // const { employees, admin } = getLocalStorage();
    // if (employees.length === 0 || admin.length === 0) {
    //   setLocalStorage(); 
    // }
    setLocalStorage()
    const {employees}= getLocalStorage();
    setUserData(employees);
  }, []);

  return (
    <AuthContext.Provider value={[userData, setUserData]}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
