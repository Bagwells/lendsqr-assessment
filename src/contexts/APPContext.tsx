
import { createContext } from "react"
import type { User } from "../utils/userType";



export interface AppContextType {
  selectedUser: User | null;
  setSelectedUser: (value:User)=>void;
  isUserDetails: boolean;
  setUserDetails: (value: boolean)=> void;
  isAuth: boolean;
  setIsAuth: (value:boolean) => void;
}

export const AppContext = createContext<AppContextType>({
  selectedUser:null,
  setSelectedUser:()=> {},
  isUserDetails: false,
  setUserDetails: ()=> {},
  isAuth:false,
  setIsAuth:()=> {}
})