import React, { useContext, useEffect, useState } from 'react';
import UserFilter from './UserFilterLayout';
import { MdFilterList } from 'react-icons/md';
import { GoKebabHorizontal } from 'react-icons/go';
import { StatusMenu } from './StatusMenuLayout';
import { AppContext } from '../../contexts/APPContext';
import Pagination from '../UI/Pagination';
import type { streamlinedUser} from '../../utils/userType';
import { useDashboard } from '../../hooks/useDashboard';
import { usePagination } from '../../hooks/usePagination';


export type UserFilters = Partial<Record<keyof streamlinedUser, string>>;

const headers: { key: keyof streamlinedUser; label: string }[] = [
  { key: 'organization', label: 'Organization' },
  { key: 'username', label: 'Username' },
  { key: 'email', label: 'Email' },
  { key: 'phone', label: 'Phone Number' },
  { key: 'dateJoined', label: 'Date Joined' },
  { key: 'status', label: 'Status' }
];

const statusClasses: Record<streamlinedUser['status'], string> = {
  Active: 'bg-success-lite success',
  Inactive: 'bg-[#545F7d10] text-color',
  Pending: 'bg-warning-lite warning',
  Blacklisted: 'bg-danger-lite danger'
};

const uniqueValues = (arr: streamlinedUser[], key: keyof streamlinedUser): string[] => {
  return [...new Set(arr.map((item) => item[key]))]
    .filter((val): val is string => typeof val === 'string');
};

const UserTable: React.FC = () => {

    const {loading, error, fetchUserFn, streamlinedUsers, users} = useDashboard();
    const [filters, setFilters] = useState<UserFilters>({
      organization: '',
      username: '',
      email: '',
      phone: '',
      dateJoined: '',
      status: ''
    });
    const [pendingFilters, setPendingFilters] = useState<UserFilters>({ ...filters });
    const [isOpenFilter, setIsOpenFilter] = useState<boolean>(false);
    const {selectedUser, setSelectedUser, setUserDetails} = useContext(AppContext);
    const [selectedID, setSelectedID] = useState<string | number | undefined>(undefined);
    const [openStatusBar, setOpenStatusBar] = useState<boolean>(false);
    


    const toggleStatus =()=> setOpenStatusBar(!openStatusBar)
    const handleSelectedUser = ({ user }: { user: streamlinedUser }) => {
      const fullUser = users.find(
        (u) => u.personal_information.id === user.id
      );
      if (fullUser) {
        setSelectedUser(fullUser);
        setSelectedID(fullUser.personal_information.id);
      }
    };

    const toggleFilter =()=> setIsOpenFilter(!isOpenFilter);

    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
      const { name, value } = e.target;
      setPendingFilters((prev) => ({ ...prev, [name]: value }));
    };

    const handleApplyFilters = () => {
      setFilters({ ...pendingFilters });
      setIsOpenFilter(false);
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


    const filteredUsers = streamlinedUsers.filter((user) => {
      return (
        (!filters.organization || user.organization.includes(filters.organization)) &&
        (!filters.username || user.username.toLowerCase().includes(filters.username.toLowerCase())) &&
        (!filters.email || user.email.toLowerCase().includes(filters.email.toLowerCase())) &&
        (!filters.phone || user.phone.includes(filters.phone)) &&
        (!filters.dateJoined || user.dateJoined.includes(filters.dateJoined)) &&
        (!filters.status || user.status === filters.status)
      );
    });

    const {
      paginatedData,
      currentPage,
      pageSize,
      totalPages,
      totalItems,
      pageSizes,
      onPageChange,
      onPageSizeChange,
    } = usePagination(filteredUsers ?? [], 10);

    useEffect(()=>{
      fetchUserFn()
    },[])


  return (
    <div className="relative gap-6 work-sans">
      { isOpenFilter &&
        <UserFilter
          filters={pendingFilters}
          onChange={handleChange}
          onApply={handleApplyFilters}
          onReset={handleReset}
          organizations={uniqueValues(streamlinedUsers, 'organization')}
          statuses={Object.keys(statusClasses)}
        />
      }
      <div className="w-full h-full max-h-[640px] bg-white p-[30px] Border rounded-2xl overflow-y-auto">
        {
          loading && <div className='flex justify-center items-centerw-full h-20'>
            <div className='animate-spin border-b-4 border-text-color rounded-full'/>
          </div>
        }
        {
          !loading && !streamlinedUsers && error && 
          <div className='flex justify-center items-centerw-full h-20'>
            
          </div>
        }
        { streamlinedUsers && !loading &&
          <table className="min-w-[820px] w-full">
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
              {paginatedData.map((user:streamlinedUser, idx) => (
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
        }
      </div>
    
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        pageSize={pageSize}
        pageSizes={pageSizes}
        totalItems={totalItems}
        onPageChange={onPageChange}
        onPageSizeChange={onPageSizeChange}
      />
    </div>
  );
};

export default UserTable;
