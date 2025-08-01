import { lazy, Suspense, useRef, type JSX } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import { Preloader } from "../components/UI/Preloader";
import LoadingScreen from "../components/utilities/LoadingScreen";
import { useAuth } from "../hooks/useAuth";
import { toast } from "react-toastify";

const AuthScreen = lazy(() => import("../pages/auth/auth"));
const DashboardUser = lazy(() => import("../pages/dashboard/user"));
const DashboardScreen = lazy(() => import("../pages/dashboard/dashboard"));


type RouteType = {
  path: string;
  element: JSX.Element;
  name: string;
  children?: RouteType[] | null;
}


const AppRouter =()=> {
  const {isAuth} = useAuth()

  const publicRoutes: RouteType[] = [
    {
      path: '/', element: <Navigate to='/auth' />, name: '/',
      children: null
    },
    {
      path: '/auth', element: <AuthScreen />, name: 'Auth',
      children: null
    },
    { path: '/dashboard', element: <DashboardScreen/>, name: 'Dashboard',
      children: [
      {
        path: '', 
        element: <DashboardUser />,
        name: 'DashboardDefault',
      },
      {
        path: '/dashboard/user', element:<DashboardUser/> , name:'Dashboard'
      }
      ]
    }
  ]
  const hasShownToast = useRef(false);

  if(isAuth) {
    <Navigate to={'/dashboard'}/> 
    if (!hasShownToast.current) {
      toast.info('User Authenticated')
      hasShownToast.current = true;
    }
  }
  
  return(
    <BrowserRouter>
      <Preloader/>
      <Suspense fallback={<LoadingScreen message="Loading..."/>}>
        <Routes>
          {publicRoutes.map((route) => (
            <Route
              key={route.name || route.path}
              path={route.path}
              element={route.element}
            >
              {route.children && route.children.map((childRoute) => (
                <Route key={childRoute?.name || childRoute.path} 
                  path={childRoute.path} element={childRoute.element} 
                  />
              ))}
            </Route>
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default AppRouter
