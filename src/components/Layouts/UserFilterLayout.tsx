import React from 'react';
import type { UserFilters } from './UsersTableLayout';

type UserFilterProps = {
  filters: UserFilters;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onApply: () => void;
  onReset: () => void;
  organizations: string[];
  statuses: string[];
};

const UserFilter: React.FC<UserFilterProps> = ({
  filters,
  onChange,
  onReset,
  organizations,
  statuses,
  onApply
}) => {
  return (
    <div className={`absolute top-16 left-4 z-[5] w-full max-w-[280px] Border bg-white rounded-sm p-4 py-[30px] drop-shadow-lite`}>
      <form
        className="flex flex-col gap-4 text-color">
        <div>
          <label className="text-sm text-semibold">Organization</label>
          <div className='w-full border-1 rounded-md px-5 py-3'>
            <select
              name="organization"
              value={filters.organization || ''}
              onChange={onChange}
              className="mt-1 w-full focus-within:none outline-0 text-sm ring-transparent focus-within:ring-0"
            >
              <option value="">Select</option>
              {organizations.map((org) => (
                <option key={org} value={org}>
                  {org}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="text-sm text-color">Username</label>
          <input
            type="text"
            name="username"
            value={filters.username || ''}
            onChange={onChange}
            className="mt-1 w-full border-1 rounded-md px-5 py-3 text-sm"
            placeholder="User"
          />
        </div>

        <div>
          <label className="text-sm text-color">Email</label>
          <input
            type="email"
            name="email"
            value={filters.email || ''}
            onChange={onChange}
            className="mt-1 w-full border-1 rounded-md px-5 py-3 text-sm"
            placeholder="Email"
          />
        </div>

        <div>
          <label className="text-sm text-color">Date</label>
          <input
            type="date"
            name="dateJoined"
            value={filters.dateJoined || ''}
            onChange={onChange}
            className="mt-1 w-full border-1 rounded-md px-5 py-3 text-sm"
            placeholder="e.g. Apr 10, 2020"
          />
        </div>

        <div>
          <label className="text-sm text-color">Phone Number</label>
          <input
            type="text"
            name="phone"
            value={filters.phone || ''}
            onChange={onChange}
            className="mt-1 w-full border-1 rounded-md px-5 py-3 text-sm"
            placeholder="Phone Number"
          />
        </div>

        <div>
          <label className="text-sm text-color">Status</label>
          <div className='w-full border-1 rounded-md px-5 py-3'>
            <select
              name="statuses"
              value={filters.status || ''}
              onChange={onChange}
              className="mt-1 w-full text-sm ring-transparent focus-none outline-0 focus-within:ring-0"
            >
              <option value="">Select</option>
              {statuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-3.5 my-4">
          <button
            type="button"
            onClick={onReset}
            className="flex-1 Border-1 rounded-md px-3 py-2 text-sm hover:bg-[#545F7d20] border border-[#545F7D]"
          >
            Reset
          </button>
          <button
            type="submit"
            className="flex-1 bg-primary border border-[#39ccdc] hover:opacity-60 text-semibold text-white rounded-md px-3 py-2 text-sm"
            onClick={onApply}
          >
            Filter
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserFilter;
