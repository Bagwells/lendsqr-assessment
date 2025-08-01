
export interface MenuProps {
  link: string;
  title:string;
  icon:string;
}

export const CustomerMenu:MenuProps[] = [
  {
    link: '/dashboard/user',
    title: 'Users',
    icon: '/Users.svg'
  },
  {
    link: '/dashboard/guarantors',
    title: 'Guarantors',
    icon: '/Guarantors.svg'
  },
  {
    link: '/dashboard/loans',
    title: 'Loans',
    icon: '/Loans.svg'
  },
  {
    link: '/dashboard/savings',
    title: 'Savings',
    icon: '/savings.svg'
  },
  {
    link: '/dashboard/Loan-request',
    title: 'Loan Request',
    icon: '/Request.svg'
  },
  {
    link: '/dashboard/whitelist',
    title: 'Whitelist',
    icon: '/User-check.svg'
  },
  {
    link: '/dashboard/karma',
    title: 'Karma',
    icon: '/User-times.svg'
  },


]

