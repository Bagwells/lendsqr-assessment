import { useContext } from "react"
import { DetailsTexts, DetailsTiles } from "../UI/UserDetails"
import { AppContext } from "../../contexts/APPContext"



export const GeneralDetailsLayout =()=> {
  const {selectedUser} = useContext(AppContext);
  const details = selectedUser;
  return(
    <div className="w-full space-y-[30px]">
      <DetailsTiles title="Personal Information" className="border-b border-[#213F7D]/10">
        <DetailsTexts title="Full Name" value={details.username}/>
        <DetailsTexts title="Phone number" value={'07060780922'}/>
        <DetailsTexts title="Email Address" value={details.email}/>
        <DetailsTexts title="BVN" value={details.phone}/>
        <DetailsTexts title="GENDER" value={'Female'}/>
        <DetailsTexts title="Marital status" value={'Single'}/>
        <DetailsTexts title="Children" value={'None'}/>
        <DetailsTexts title="Type of Residence" value="Parent's Apartment"/>
      </DetailsTiles>

      <DetailsTiles title="Business Information" className="border-b border-[#213F7D]/10">
        <DetailsTexts title="Level of Education" value={'B.Sc'}/>
        <DetailsTexts title="Employment Status" value={'Employed'}/>
        <DetailsTexts title="Sector of Employment" value={'Fintech'}/>
        <DetailsTexts title="Duration of Employment" value={'2 years'}/>
        <DetailsTexts title="Office Email" value={'@grace@lendsqr.com'}/>
        <DetailsTexts title="Monthly Income" value={'₦200,000.00 - ₦400,000.00'}/>
        <DetailsTexts title="Loan Repayment" value={'40,000'}/>
      </DetailsTiles>

      <DetailsTiles title="Scocials" className="border-b border-[#213F7D]/10">
        <DetailsTexts title="Twitter" value={'@grace_effiom'}/>
        <DetailsTexts title="Facebook" value={'Grace Effiom'}/>
        <DetailsTexts title="instagram" value={'@grace_effiom'}/>
      </DetailsTiles>
      <DetailsTiles title="Guarantor" className="border-b border-[#213F7D]/10">
        <DetailsTexts title="Full Name" value={'Debby Ogana'}/>
        <DetailsTexts title="Phone Number" value={'07060780922'}/>
        <DetailsTexts title="email address" value={'debby@gmail.com'}/>
        <DetailsTexts title="Relationship" value="Sister"/>
      </DetailsTiles>
      <DetailsTiles title="" className="">
        <DetailsTexts title="Full Name" value={'Debby Ogana'}/>
        <DetailsTexts title="Phone Number" value={'07060780922'}/>
        <DetailsTexts title="email address" value={'debby@gmail.com'}/>
        <DetailsTexts title="Relationship" value="Sister"/>
      </DetailsTiles>
    </div>
  )
}