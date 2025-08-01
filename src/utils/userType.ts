
export type User = {
  personal_information: {
    id: number;
    full_name: string;
    phone_number: string;
    email_address: string;
    bvn: number;
    gender: "Male" | "Female";
    user_status: "Active" | "Inactive" | "Blacklisted" | "Pending";
    marital_status: "Single" | "Married" | "Divorced";
    children: "None" | "1" | "2" | "3+";
    type_of_residence: "Parent's Apartment" | "Self-owned Apartment" | "Rented Apartment";
  };
  education_and_employment: {
    level_of_education: "B.Sc" | "M.Sc" | "PhD" | "Diploma" | "SSCE" | "No Education";
    employment_status: "Employed" | "Unemployed" | "Self-Employed";
    sector_of_employment: "FinTech" | "Health" | "Education" | "Agriculture" | "Technology";
    duration_of_employment: "1 year" | "2 years" | "3 years" | "5+ years";
    office_email: string;
    monthly_income: "₦100,000.00 - ₦200,000.00" | "₦200,000.00 - ₦400,000.00" | "₦400,000.00 - ₦600,000.00";
    loan_repayment: number;
  };
  socials: {
    twitter: string;
    facebook: string;
    instagram: string;
  };
  guarantor: Array<{
    full_name: string;
    phone_number: string; 
    email_address: string;
    relationship: "Brother" | "Sister" | "Friend" | "Colleague";
  }>;
  organization: "Lendstar" | "Irorun" | "Lendsqr";
  date_joined: string;
}


export type streamlinedUser = {
  id: number;
  username: string;
  email: string;
  phone: string;
  status: 'Active' | 'Inactive' | 'Pending' | 'Blacklisted';
  organization: string;
  dateJoined: string;
};

