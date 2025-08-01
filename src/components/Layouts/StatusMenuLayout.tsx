import { FiUserX } from "react-icons/fi";
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import type { User } from "../../utils/userType";

interface StatusProps {
  onBlacklist: ()=> void;
  onView:()=> void;
  onActivate:()=>void;
  user:User;
  onblur:()=> void;
}


export const StatusMenu =({onBlacklist, onView, onActivate, onblur}:StatusProps)=> {


  return(
    <div onMouseLeave={onblur}
      className="absolute z-[5] h-fit w-[180px] -top-2 right-1 bg-white space-y-5 p-5 rounded-sm drop-shadow-lite border border-[#545F7D10] work-sans text-sm text-medium text-color">
      <div onClick={onView}
        className="flex gap-2 items-center hover:text-bold cursor-pointer">
        <MdOutlineRemoveRedEye />
        <span className="">
          View Details
        </span>
      </div>
       <div onClick={onBlacklist}
        className="flex gap-2 items-center hover:text-bold cursor-pointer">
        <FiUserX />
        <span className="">
          Blacklist User
        </span>
      </div>
       <div onClick={onActivate}
        className="flex gap-2 items-center hover:text-bold cursor-pointer">
        <GrUserExpert />
        <span className="">
          Activate User
        </span>
      </div>
    </div>
  )
}