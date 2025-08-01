import { Outlet } from "react-router-dom";
import { NavBar } from "../../components/Layouts/NavBar";
import { SideBar } from "../../components/Layouts/Sidebar";
import { useState } from "react";



const DashboardScreen =()=> {
  const [isSlider, setIsSlider] = useState<boolean>(false);

  return(
    <div className={`w-screen lg:h-screen  `}>
      <NavBar trigger={()=>setIsSlider(!isSlider)} action={isSlider} />
      <div className="flex w-full h-full">
        <SideBar trigger={isSlider}/>
        <div className={`flex-1 pt-16 lg:pt-[100px] w-screen lg:w-[80%] ${isSlider ? 'h-screen overflow-y-clip':'overflow-y-auto'}`}>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default DashboardScreen;