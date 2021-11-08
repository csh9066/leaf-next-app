import useSWR from "swr";
import api from "../lib/api/api";

function useIsLoggedIn() {
  const { data, error } = useSWR("/users/check", async (r) => {
    try {
      await api.get(r);
      return true;
    } catch (e) {
      return false;
    }
  });

  return !error && data;
}

export default useIsLoggedIn;
