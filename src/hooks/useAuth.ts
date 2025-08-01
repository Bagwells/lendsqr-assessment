import { useEffect, useState } from "react"

export const useAuth =()=> {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  console.log(isAuth);
  useEffect(()=> {
    if(isAuth){
      sessionStorage.setItem('isUser', JSON.stringify('isAuth'));
    }
  },[setIsAuth])
  return {isAuth, setIsAuth}
}