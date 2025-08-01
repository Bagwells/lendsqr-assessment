import React, { useContext, useState } from 'react';
import UserFilter from './UserFilterLayout';
import { MdFilterList } from 'react-icons/md';
import { GoKebabHorizontal } from 'react-icons/go';
import { StatusMenu } from './StatusMenuLayout';
import { AppContext } from '../../contexts/APPContext';
import Pagination from '../UI/Pagination';


export type User = {
  id: string | number;
  organization: string;
  username: string;
  email: string;
  phone: string;
  dateJoined: string;
  status: 'Active' | 'Inactive' | 'Pending' | 'Blacklisted';
};

export type UserFilters = Partial<Record<keyof User, string>>;

const users: User[] = [
  {
    id: '1',
    organization: 'Lendsqr',
    username: 'Adedeji',
    email: 'adedeji@lendsqr.com',
    phone: '08078903721',
    dateJoined: 'May 15, 2020 10:00 AM',
    status: 'Inactive'
  },
  {
    id: '2',
    organization: 'Irorun',
    username: 'Debby Ogana',
    email: 'debby2@irorun.com',
    phone: '08160780928',
    dateJoined: 'Apr 30, 2020 10:00 AM',
    status: 'Pending'
  },
  {
    id: '3',
    organization: 'Lendstar',
    username: 'Grace Effiom',
    email: 'grace@lendstar.com',
    phone: '07060780922',
    dateJoined: 'Apr 30, 2020 10:00 AM',
    status: 'Blacklisted'
  },
  {
    id: '4',
    organization: 'Lendsqr',
    username: 'Tosin Dokunmu',
    email: 'tosin@lendsqr.com',
    phone: '07003309226',
    dateJoined: 'Apr 10, 2020 10:00 AM',
    status: 'Pending'
  },
  {
    id: '5',
    organization: 'Lendstar',
    username: 'Grace Effiom',
    email: 'grace@lendstar.com',
    phone: '07060780922',
    dateJoined: 'Apr 30, 2020 10:00 AM',
    status: 'Active'
  },
  {
    id: '6',
    organization: 'Lendsqr',
    username: 'Tosin Dokunmu',
    email: 'tosin@lendsqr.com',
    phone: '08060780900',
    dateJoined: 'Apr 10, 2020 10:00 AM',
    status: 'Active'
  },
  {
    id: '7',
    organization: 'Lendstar',
    username: 'Grace Effiom',
    email: 'grace@lendstar.com',
    phone: '07060780922',
    dateJoined: 'Apr 30, 2020 10:00 AM',
    status: 'Blacklisted'
  },
  {
    id: '8',
    organization: 'Lendsqr',
    username: 'Tosin Dokunmu',
    email: 'tosin@lendsqr.com',
    phone: '08060780900',
    dateJoined: 'Apr 10, 2020 10:00 AM',
    status: 'Inactive'
  },
  {
    id: '9',
    organization: 'Lendstar',
    username: 'Grace Effiom',
    email: 'grace@lendstar.com',
    phone: '07060780922',
    dateJoined: 'Apr 30, 2020 10:00 AM',
    status: 'Inactive'
  }
];


const headers: { key: keyof User; label: string }[] = [
  { key: 'organization', label: 'Organization' },
  { key: 'username', label: 'Username' },
  { key: 'email', label: 'Email' },
  { key: 'phone', label: 'Phone Number' },
  { key: 'dateJoined', label: 'Date Joined' },
  { key: 'status', label: 'Status' }
];

const statusClasses: Record<User['status'], string> = {
  Active: 'bg-success-lite success',
  Inactive: 'bg-[#545F7d10] text-color',
  Pending: 'bg-warning-lite warning',
  Blacklisted: 'bg-danger-lite danger'
};

const uniqueValues = (arr: User[], key: keyof User): string[] => {
  return [...new Set(arr.map((item) => item[key]))]
    .filter((val): val is string => typeof val === 'string');
};

const UserTable: React.FC = () => {
    
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(10);

    const [filters, setFilters] = useState<UserFilters>({
      organization: '',
      username: '',
      email: '',
      phone: '',
      dateJoined: '',
      status: ''
    });

    const [isOpenFilter, setIsOpenFilter] = useState<boolean>(false);
    const {selectedUser, setSelectedUser, setUserDetails} = useContext(AppContext);
    const [selectedID, setSelectedID] = useState<string | number | undefined>(undefined);
    const [openStatusBar, setOpenStatusBar] = useState<boolean>(false);


    const toggleStatus =()=> setOpenStatusBar(!openStatusBar)
    const handleSelectedUser =({user}:{user:User})=> {
      setSelectedUser(user)
      setSelectedID(user?.id)
    }

    const toggleFilter =()=> setIsOpenFilter(!isOpenFilter);

    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
      const { name, value } = e.target;
      setFilters((prev) => ({ ...prev, [name]: value }));
    };

    const handleReset = () => {
      setFilters({
        organization: '',
        username: '',
        email: '',
        phone: '',
        dateJoined: '',
        status: ''
      });
      setIsOpenFilter(false);
    };

    const filteredUsers = users.filter((user) => {
      return (
        (!filters.organization || user.organization.includes(filters.organization)) &&
        (!filters.username || user.username.toLowerCase().includes(filters.username.toLowerCase())) &&
        (!filters.email || user.email.toLowerCase().includes(filters.email.toLowerCase())) &&
        (!filters.phone || user.phone.includes(filters.phone)) &&
        (!filters.dateJoined || user.dateJoined.includes(filters.dateJoined)) &&
        (!filters.status || user.status === filters.status)
      );
    });

  return (
    <div className="relative gap-6 work-sans">
      { isOpenFilter &&
        <UserFilter
          filters={filters}
          onChange={handleChange}
          onReset={handleReset}
          organizations={uniqueValues(users, 'organization')}
          statuses={Object.keys(statusClasses)}
        />
      }

      <div className="w-full bg-white p-[30px] Border rounded-2xl overflow-x-auto">
        <table className="min-w-3xl w-full">
          <thead>
            <tr>
              {headers.map((header) => (
                <th
                  key={header.key}
                  className="text-left text-sm font-medium text-color pb-4"
                >
                  <span className="text-sm text-medium text-left">
                    {header.label}
                    <MdFilterList onClick={toggleFilter} className="inline-block align-middle ml-1.5 text-base" />
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, idx) => (
              <tr key={ idx } className={`${idx == 0 ? '': 'Border-t'} hover:bg-[#545F7D06] relative`}>
                {headers.map(({ key }) => (
                  <td key={key} className={`py-5 text-sm text-color`}>
                    {key === 'status' ? (
                      <span
                        className={`px-3 py-1 rounded-full text-xs ${statusClasses[user.status]}`}
                      >
                        {user.status}
                      </span>
                    ) : (
                      user[key]
                    )}
                  </td>
                ))}
                <GoKebabHorizontal onClick={()=>{toggleStatus(); handleSelectedUser({user})}} 
                  className='-rotate-90 mt-6'
                />
                { openStatusBar && selectedID === user?.id && selectedUser 
                  && <StatusMenu user={{...selectedUser}} onView={()=> setUserDetails(true)} onBlacklist={()=>{}} onActivate={()=>{}} onblur={toggleStatus}/>}
              </tr>
            ))}
            {filteredUsers.length === 0 && (
              <tr>
                <td
                  colSpan={headers.length}
                  className="text-center text-sm text-color py-6"
                >
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredUsers.length / pageSize)}
        pageSize={pageSize}
        pageSizes={[10, 25, 50, 100]}
        totalItems={filteredUsers.length}
        onPageChange={setCurrentPage}
        onPageSizeChange={(size) => {
          setPageSize(size);
          setCurrentPage(1);
        }}
      />
    </div>
  );
};

export default UserTable;
