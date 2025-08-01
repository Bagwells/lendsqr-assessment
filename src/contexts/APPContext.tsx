
import { createContext } from "react"
import type { User } from "../components/Layouts/UsersTableLayout"


export interface AppContextType {
  selectedUser: User;
  setSelectedUser: (value:User)=>void;
  isUserDetails: boolean;
  setUserDetails: (value: boolean)=> void;
  isAuth: boolean;
  setIsAuth: (value:boolean) => void;
}

export const AppContext = createContext<AppContextType>({
  selectedUser: {
    id: "",
    organization: "",
    username: "",
    email: "",
    phone: "",
    dateJoined: "",
    status: "Active"
  },
  setSelectedUser:()=> {},
  isUserDetails: false,
  setUserDetails: ()=> {},
  isAuth:false,
  setIsAuth:()=> {}
})