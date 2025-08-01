import { useState } from "react";
import type { streamlinedUser, User } from "../utils/userType"; 
import { useApi } from "./useAPI";
import axios from "axios";

export const useDashboard = () => {
  const { getData } = useApi();
  const [loading, setLoading] = useState<boolean>(false);
  const [streamlinedUsers, setStreamlinedUsers] = useState<streamlinedUser[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

 
const fetchUserFn = async () => {
  setLoading(true);
  try {
    const savedUsersStr = sessionStorage.getItem('Users');
    const savedStreamlinedUsersStr = sessionStorage.getItem('StreamlinedUsers');

    if (savedUsersStr && savedStreamlinedUsersStr) {

      const savedStreamlinedUsers = JSON.parse(savedStreamlinedUsersStr) as streamlinedUser[];
      const savedUsers = JSON.parse(savedUsersStr) as User[];
      setUsers(savedUsers);
      setStreamlinedUsers(savedStreamlinedUsers);

    } else {
      const response = await getData<{ users: User[] }>('/user_datas.json');
      if (response?.users) {
        const streamlined: streamlinedUser[] = response.users.map((user, index) => ({
          id: user.personal_information?.id ?? index,
          username: user.personal_information?.full_name || '',
          email: user.personal_information?.email_address || '',
          phone: user.personal_information?.phone_number || '',
          status: user.personal_information?.user_status || 'Inactive',
          organization: user.organization || '',
          dateJoined: user.date_joined || '',
        }));

        setStreamlinedUsers(streamlined);
        setUsers(response?.users)
        sessionStorage.setItem('streamlinedUsers', JSON.stringify(streamlinedUsers));
      }
    }
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      setError(err.message);
    } else {
      setError('An unexpected error occurred');
    }
  } finally {
    setLoading(false);
  }
};

  return { fetchUserFn, loading, error, users, streamlinedUsers };
};
