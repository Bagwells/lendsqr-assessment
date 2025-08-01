import axios from "axios";
import { useCallback } from "react";

interface ApiHookResult {
  getData: <T = unknown>(link: string) => Promise<T | undefined>;
}

export const useApi = (): ApiHookResult => {

  const getData = useCallback(async <T = unknown>(link: string): Promise<T | undefined> => {
    try {
      const response = await axios.get<T>(link);
      return response.data;
    } catch (err) {
      console.error('get api:', err);
      return undefined;
    }
  }, []);
  
   return {getData}
}
