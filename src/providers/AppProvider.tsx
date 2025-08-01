import { useState } from "react";
import type { ReactNode } from "react";
import { AppContext } from "../contexts/APPContext";
import type { User } from "../utils/userType";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [selectedUser, setSelectedUser] = useState<User| null>(null);
  const [isUserDetails, setUserDetails] = useState<boolean>(false);
  const [isAuth, setIsAuth] = useState<boolean>(false);

  return (
    <AppContext.Provider value={{ selectedUser, setSelectedUser, isUserDetails, setUserDetails, isAuth, setIsAuth }}>
      {children}
    </AppContext.Provider>
  );
};