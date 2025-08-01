import { FaArrowLeftLong, FaStar } from "react-icons/fa6";
import { LuUserRound } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import { useContext, useState } from "react";
import { GeneralDetailsLayout } from "./GeneralDetailsLayout";
import { AppContext } from "../../contexts/APPContext";
interface UserDetailsProps {
  onClose: ()=> void;
}

export const UserDetailsLayout =({ onClose}:UserDetailsProps)=> {

  const Tabs: string[] =['General Details', 'Documents','Bank Details','Loans', 'Savings', 'App and System']
  const [selectedTab, setSelectedTab] = useState<string>('General Details')
  const { selectedUser } = useContext(AppContext);
  if (!selectedUser) return null;
  const { personal_information, education_and_employment } = selectedUser;
  
  const Render = () => {
    switch (selectedTab) {
      case 'General Details':
        return <GeneralDetailsLayout/>
      case 'Documents':
        return <div>Documents Content</div>;
      case 'Bank Details':
        return <div>Bank Details Content</div>;
      case 'Loans':
        return <div>Loans Content</div>;
      case 'Savings':
        return <div>Savings Content</div>;
      case 'App and System':
        return <div>App and System Content</div>;
      default:
        return null
    }
  }

  return(
    <div className="w-full h-full p-6 md:!p-[48px] xl:!p-[60px] space-y-10 work-sans">
      <div onClick={onClose} 
        className="flex items-center text-color text-4 gap-3 ">
        <FaArrowLeftLong /> <span>Back to Users</span>
      </div>
      <div className="flex flex-col lg:flex-row w-full justify-between gap-4">
        <h4 className="title-color text-medium text-6 work-sans">
          Users Details
        </h4>
        <div className="flex items-center gap-2 sm:gap-5">
          <button
            type="submit"
            className="flex-1 min-w-[140px] text-nowrap danger border border-[#E4033B] hover:opacity-60 text-semibold rounded-lg px-3 py-2 text-xs sm:text-sm"
          >
            BLACKLIST USER
          </button>
          <button
            type="submit"
            className="flex-1 min-w-[140px] text-nowrap primary border border-[#39ccdc] hover:opacity-60 text-semibold rounded-lg px-3 py-2 text-xs sm:text-sm"
          >
            ACTIVATE USER
          </button>
        </div>
      </div>
      <div className="w-full bg-white pt-5 px-5 lg:pt-[30px] lg:px-[30px] !pb-0 border-1 drop-shadow-lite rounded-sm">
        <div className="flex flex-wrap items-center gap-5">
          <div className="bg-[#213F7D]/16 title-color w-14 h-14 lg:w-[100px] lg:h-[100px] flex flex-nowrap items-center justify-center rounded-full ">
            <LuUserRound size={40}/>
          </div>
          <div className="text-base lg:text-[22px] text-medium title-color work-sans">
            <h6>
              {personal_information.full_name ?? 'Grace Effiom'}
            </h6>
            <p className="text-xs lg:text-base text-[#545F7D]">
              {personal_information?.id ?? 'N/A'}
            </p>
          </div>
          <div className="flex flex-col gap-2.5 lg:h-[100px] items-center justify-center px-[30px] border-l sm:border-x border-[#545F7D25] text-color text-sm text-medium">
            <p>User's Tier</p>
            <div className="flex w-fit gap-1 text-4  items-center warning">
              <FaStar />
              <FaRegStar />
              <FaRegStar />
            </div>
          </div>
          <div className="flex flex-col text-medium text-base lg:text-[22px] title-color work-sans pl-5">
            <h6>
              {education_and_employment.monthly_income}
            </h6>
            <p className="text-xs lg:text-base text-[#545F7D]">
              {'9912345678/Providus Bank'}
            </p>
          </div>
        </div>
        <div className="flex mt-[50px] w-full overflow-x-auto">
          { 
            Tabs?.map((item)=>{
              const isActive = selectedTab === item;
              return(
              <div key={item} onClick={()=> setSelectedTab(item)}
                className={`px-[25px] pb-2.5 w-full max-w-[180px] text-nowrap text-center font-normal text-base text-[#000000]/80 tracking-tighter ${isActive ? 'border-b-2':''} border-[#39CCDC]`}>
                {item}
              </div>
            )
          })}
        </div>
      </div>
      <div className="w-full bg-white mt-[30px] p-5 lg:p-[30px] rounded-sm drop-shadow-lite">
        {Render()}
      </div>
    </div>
  )
}