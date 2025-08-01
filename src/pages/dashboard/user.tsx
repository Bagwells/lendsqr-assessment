import { useContext} from "react"
import { MetricsCard } from "../../components/Layouts/MetricCardLayout"
import UsersTableLayout from "../../components/Layouts/UsersTableLayout"
import { UserDetailsLayout } from "../../components/Layouts/UserDetailsLayout"
import { AppContext } from "../../contexts/APPContext"

export const DashboardUser =()=> {
  const {selectedUser, isUserDetails, setUserDetails} = useContext(AppContext);

  return(
    <>
      {isUserDetails && 
        <UserDetailsLayout Details={{ ...selectedUser}} onClose={()=>setUserDetails(false)}/>
      }
      { !isUserDetails &&
        <div className="w-full h-full p-6 md:!p-[48px] xl:!p-[60px] space-y-10">
          <h4 className="title-color text-medium text-6 work-sans">
            User
          </h4>
          <div className="w-full space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-[26px]">
              <MetricsCard color="bg-[#DF18FF10]" metricData={"2,453"} title={"Users"} Icon={<img src="/violetUsers.svg" alt='' width={24} height={24}/>}/>
              <MetricsCard color="bg-[#5718FF10]" metricData={"2,453"} title={"Active Users"} Icon={<img src="/purpleUsers.svg" alt='' width={24} height={24}/>}/>
              <MetricsCard color="bg-[#F55F4410]" metricData={"12,453"} title={"Users with loans"} Icon={<img src="/maroonUsers.svg" alt='' width={24} height={24}/>}/>
              <MetricsCard color="bg-[#FF336610]" metricData={"102,453"} title={"Users with savings"} Icon={<img src="/redUsers.svg" alt='' width={24} height={24}/>}/>
            </div>
            <UsersTableLayout/>
          </div>
        </div>
      }
    </>
  )
}

export default DashboardUser;