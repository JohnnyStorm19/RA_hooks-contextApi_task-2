import { useEffect, useState } from "react"
import { fetchUsersUrl } from "../globals";
import { IUser } from "../models";

const useJsonFetch = () => {
  const [data, setData] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchUsers = async(url: string) => {
        setLoading(true);
        setError(false);
        try {
            const response = await fetch(url);    
            if (!response.ok){
                const errorMessage = response.statusText;
                throw new Error(errorMessage);
            }
            const data = await response.json();
            setData(data);
        } catch (error) {
            setError(true)
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    fetchUsers(fetchUsersUrl);
  }, [])

  return [{data, loading, error}];
}

export default useJsonFetch
