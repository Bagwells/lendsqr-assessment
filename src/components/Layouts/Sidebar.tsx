import { IoIosArrowDown, IoMdArrowDropdown, IoMdNotificationsOutline } from "react-icons/io"
import { Icon } from "../UI/Icon"
import MenuLayout from "./MenuLayout"
import { IoSearchOutline } from "react-icons/io5"
import { BusinessMenu } from "../../utils/businessMenu"
import { CustomerMenu } from "../../utils/customerMenu"
import { settingsMenu } from "../../utils/settingsMenu"



export const SideBar =({trigger}:{trigger:boolean})=> {

  return(
    <div className={`${trigger ? '-translate-x-0':'-translate-x-[100%]'} bg-background lg:translate-0 transition-transform duration-500 ease-linear  
      flex flex-col w-[90%] md:w-1/3 lg:w-[20%] h-svh lg:h-screen absolute lg:static z-20 drop-shadow-lite pt-16 lg:pt-[100px]`
    }>
      <div className="flex flex-col w-full items-start flex-1 title-color text-3 lg:text-4 work-sans overflow-y-auto">
        <div className="flex flex-row-reverse flex-wrap lg:hidden w-full mt-5 px-[30px] gap-4">
          <div className="flex items-center justify-between w-full gap-6">
            <div className="flex sm:hidden items-center max-w-[400px] w-full rounded-lg h-10  overflow-clip">
              <input 
                type="text"
                placeholder="Search for anything"
                className="w-full border-1 h-full rounded-l-lg px-5 py-3"
              />
              <button className="bg-primary flex items-center w-14 h-10 text-white justify-center border-[#39CDCC]">
                <IoSearchOutline size={14}/>
              </button>
            </div>
          </div>
          <div className="flex items-center w-full justify-end">
            <IoMdNotificationsOutline size={26} className="mx-4 lg:mx-[30px] cursor-pointer"/>
          <div className="flex w-fit items-center gap-1.5 sm:gap-2.5">
            <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full overflow-clip cursor-pointer">
              <picture>
                <img src="/Avatar.png" alt="Avatar" className="w-full h-full"/>
              </picture>
            </div>
            <div className="flex items-center gap-1 title-color cursor-pointer">
              <p className="work-sans text-4 text-medium hidden lg:inline">Adedeji</p>
              <IoMdArrowDropdown size={20}/>
            </div>
          </div>
        </div>
        </div>
        <div className="flex items-center gap-2.5 w-full p-[30px] cursor-pointer">
          <Icon assetName='/Briefcase.svg'/>
          <h4>Switch Organization</h4>
          <IoIosArrowDown />
        </div>
        <div className="flex items-center gap-2.5 w-full px-[30px] cursor-pointer">
          <Icon assetName='/Home.svg'/>
          <p className="opacity-60">Dashboard</p>
        </div>
        <MenuLayout Title="Customer" menuItems={CustomerMenu}/>
        <MenuLayout Title="Business" menuItems={BusinessMenu}/>
        <MenuLayout Title="Settings" menuItems={settingsMenu}/>
      </div>
    </div>
  )
}
