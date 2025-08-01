import { useContext, useEffect } from "react";
import { AppContext } from "../contexts/APPContext";

export const useAuth = () => {
  
  const {isAuth, setIsAuth} = useContext(AppContext)

  useEffect(() => {
    const savedToken = sessionStorage.getItem("authToken");
    if (savedToken) {
      const token = JSON.parse(savedToken);
      setIsAuth(!!token);
    } else {
      setIsAuth(false);
    }
  }, [isAuth, setIsAuth]);

  return { isAuth, setIsAuth };
};
