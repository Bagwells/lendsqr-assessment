import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';


// export interface AuthProp {
//   fullName:string;
//   email: string;
// }

export const useAuth =()=> {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState<boolean>(false);
  useEffect(()=> {
    if(isAuth){
      navigate('/dashboard')
    }
  },[navigate])
  return {isAuth, setIsAuth}
}