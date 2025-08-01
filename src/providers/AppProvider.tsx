import { useState } from "react";
import type { ReactNode } from "react";
import type { User } from "../components/Layouts/UsersTableLayout";
import { AppContext } from "../contexts/APPContext";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [selectedUser, setSelectedUser] = useState<User>({
    id: "",
    organization: "",
    username: "",
    email: "",
    phone: "",
    dateJoined: "",
    status: "Active",
  });

  const [isUserDetails, setUserDetails] = useState<boolean>(false);

  return (
    <AppContext.Provider value={{ selectedUser, setSelectedUser, isUserDetails, setUserDetails }}>
      {children}
    </AppContext.Provider>
  );
};