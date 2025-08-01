import { useContext } from "react";
import { DetailsTexts, DetailsTiles } from "../UI/UserDetails";
import { AppContext } from "../../contexts/APPContext";

export const GeneralDetailsLayout = () => {
  const { selectedUser } = useContext(AppContext);
  if (!selectedUser) return null;

  const {
    personal_information ,
    education_and_employment,
    guarantor,
    socials
  } = selectedUser;
  
  const guarantorobj = guarantor?.[0];

  return (
    <div className="w-full space-y-[30px]">
      <DetailsTiles title="Personal Information" className="border-b border-[#213F7D]/10">
        <DetailsTexts title="Full Name" value={personal_information.full_name || "N/A"} />
        <DetailsTexts title="Phone number" value={personal_information.phone_number || "N/A"} />
        <DetailsTexts title="Email Address" value={personal_information.email_address || "N/A"} />
        <DetailsTexts title="BVN" value={personal_information.bvn || "N/A"} />
        <DetailsTexts title="Gender" value={personal_information.gender || "N/A"} />
        <DetailsTexts title="Marital Status" value={personal_information.marital_status || "N/A"} />
        <DetailsTexts title="Children" value={personal_information.children || "N/A"} />
        <DetailsTexts title="Type of Residence" value={personal_information.type_of_residence || "N/A"} />
      </DetailsTiles>

      <DetailsTiles title="Education and Employment" className="border-b border-[#213F7D]/10">
        <DetailsTexts title="Level of Education" value={education_and_employment.level_of_education || "N/A"} />
        <DetailsTexts title="Employment Status" value={education_and_employment.employment_status || "N/A"} />
        <DetailsTexts title="Sector of Employment" value={education_and_employment.sector_of_employment || "N/A"} />
        <DetailsTexts title="Duration of Employment" value={education_and_employment.duration_of_employment || "N/A"} />
        <DetailsTexts title="Office Email" value={education_and_employment.office_email || "N/A"} />
        <DetailsTexts
          title="Monthly Income"
          value={
            education_and_employment.monthly_income
              ? `${education_and_employment.monthly_income}`
              : "N/A"
          }
        />
        <DetailsTexts title="Loan Repayment" value={`₦${education_and_employment.loan_repayment || "0"}`} />
      </DetailsTiles>

      <DetailsTiles title="Socials" className="border-b border-[#213F7D]/10">
        <DetailsTexts title="Twitter" value={socials.twitter || "N/A"} />
        <DetailsTexts title="Facebook" value={socials.facebook || "N/A"} />
        <DetailsTexts title="Instagram" value={socials.instagram || "N/A"} />
      </DetailsTiles>

      {guarantorobj && (
        <DetailsTiles title="Guarantor" className="border-b border-[#213F7D]/10">
          <DetailsTexts title="Full Name" value={guarantorobj.full_name || "N/A"} />
          <DetailsTexts title="Phone Number" value={guarantorobj.phone_number || "N/A"} />
          <DetailsTexts title="Email Address" value={guarantorobj.email_address || "N/A"} />
          <DetailsTexts title="Relationship" value={guarantorobj.relationship || "N/A"} />
        </DetailsTiles>
      )}
    </div>
  );
};
