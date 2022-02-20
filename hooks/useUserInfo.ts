import useSWR from "swr";
import { UserInfo } from "../types/user";

function useUserInfo() {
  const { data, error } = useSWR<UserInfo>("/users");

  return {
    userInfo: data,
    error,
    loading: !data && !error,
  };
}

export default useUserInfo;
