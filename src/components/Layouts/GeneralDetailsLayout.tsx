import { useContext } from "react"
import { DetailsTexts, DetailsTiles } from "../UI/UserDetails"
import { AppContext } from "../../contexts/APPContext"



export const GeneralDetailsLayout =()=> {
  const {selectedUser} = useContext(AppContext);
  if (!selectedUser) return null;
  const {
    email,
    profile,
    education,
    socials,
    guarantor
  } = selectedUser;

  return(
    <div className="w-full space-y-[30px]">
      <DetailsTiles title="Personal Information" className="border-b border-[#213F7D]/10">
        <DetailsTexts title="Full Name" value={`${profile.firstName} ${profile.lastName}`} />
        <DetailsTexts title="Phone number" value={profile.phoneNumber} />
        <DetailsTexts title="Email Address" value={email} />
        <DetailsTexts title="BVN" value={profile.bvn} />
        <DetailsTexts title="Gender" value={profile.gender} />
        <DetailsTexts title="Marital Status" value={profile.maritalStatus} />
        <DetailsTexts title="Children" value={profile.children} />
        <DetailsTexts title="Type of Residence" value={profile.residenceType} />
      </DetailsTiles>

      <DetailsTiles title="Education and Employment" className="border-b border-[#213F7D]/10">
        <DetailsTexts title="Level of Education" value={education.level} />
        <DetailsTexts title="Employment Status" value={education.employmentStatus} />
        <DetailsTexts title="Sector of Employment" value={education.sector} />
        <DetailsTexts title="Duration of Employment" value={education.duration} />
        <DetailsTexts title="Office Email" value={education.officeEmail} />
        <DetailsTexts
          title="Monthly Income"
          value={`₦${education.monthlyIncome[0]} - ₦${education.monthlyIncome[1]}`}
        />
        <DetailsTexts title="Loan Repayment" value={`₦${education.loanRepayment}`} />
      </DetailsTiles>

      <DetailsTiles title="Socials" className="border-b border-[#213F7D]/10">
        <DetailsTexts title="Twitter" value={socials.twitter} />
        <DetailsTexts title="Facebook" value={socials.facebook} />
        <DetailsTexts title="Instagram" value={socials.instagram} />
      </DetailsTiles>

      <DetailsTiles title="Guarantor" className="border-b border-[#213F7D]/10">
        <DetailsTexts title="Full Name" value={guarantor.fullName} />
        <DetailsTexts title="Phone Number" value={guarantor.phoneNumber} />
        <DetailsTexts title="Email Address" value={guarantor.email} />
        <DetailsTexts title="Relationship" value={guarantor.relationship} />
      </DetailsTiles>
    </div>
  )
}