
import { useEffect, useState } from "react";
import { Logo } from "./Logo"
import { useLocation } from "react-router-dom";


export const Preloader =()=> {
  const location = useLocation()
  const [showPreloader, setShowPreloader] = useState<string>('');
  useEffect(() => {
    const handlePreloaderFn = () => setShowPreloader('hidden');

    if (!['/','/auth','/dashboard'].includes(location.pathname)) {
      handlePreloaderFn();
    }

    const time = 3200;
    const firstTimeLoad = sessionStorage.getItem('Load') === 'true';

    if (firstTimeLoad) {
      handlePreloaderFn();
    }

    const timer = setTimeout(() => {
      sessionStorage.setItem('Load', 'true');
      handlePreloaderFn();
    }, time);

    return () => clearTimeout(timer);
  }, [location.pathname]);


  return(
    <div className={`${showPreloader ? 'hidden': ''} h-screen w-screen fixed z-[80] left-0 top-0`}>
        <div className='bg-background w-full h-full flex flex-col items-center justify-center p-8'>
          <picture className="animate-bounce">
             <Logo width={500} height={500} />
          </picture>
        </div>  
    </div>

    )
  }