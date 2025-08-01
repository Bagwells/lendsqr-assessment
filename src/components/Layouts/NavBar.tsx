import { IoSearchOutline } from "react-icons/io5"
import { Logo } from "../UI/Logo"
import { Link } from "react-router"
import { IoMdArrowDropdown, IoMdNotificationsOutline } from "react-icons/io"
import { TbMenuDeep } from "react-icons/tb"
import { MdOutlineClose } from "react-icons/md"

export const NavBar =({trigger, action}:{trigger:()=>void, action:boolean})=> {

  return(
    <div className="flex fixed z-40 bg-white justify-between items-center w-screen h-16 lg:h-[100px] p-6 lg:p-[30px] drop-shadow-lite gap-4">
      <div className="flex items-center justify-between w-full max-w-1/2 gap-6">
        <picture>
          <Logo width={145} height={30}/>
        </picture>
        <div className="sm:flex hidden  items-center max-w-[400px] w-full rounded-lg h-10  overflow-clip">
          <input 
            type="text"
            placeholder="Search for anything"
            className="w-full border-1 h-full rounded-l-lg px-5 py-3"
          />
          <button className="bg-primary flex items-center w-14 h-10 text-white justify-center border-[#39CDCC] hover:opacity-50">
            <IoSearchOutline size={14}/>
          </button>
        </div>
      </div>
      <div onClick={trigger} className="lg:hidden *:title-color">
        {action ? <MdOutlineClose size={24}/>:<TbMenuDeep size={24}/>}
      </div> 
      <div className="hidden lg:flex w-full justify-end items-center ">
        <Link to='#' className="hidden xs:inline roboto text-underline title-color text-4 lg:mr-4">
          Docs
        </Link>
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
  )
}