import api from "../../lib/api/api";
import useFetchMyReviews from "../fetch/useFetchMyReviews";

function useMyReveiws() {
  const { mutate } = useFetchMyReviews();

  const deleteReveiws = async (id: number) => {
    if (!confirm("정말로 삭제하시겠습니까?")) {
      return;
    }
    try {
      await api.delete(`/my-reivews/${id}`);
      mutate();
    } catch (e) {
      console.log(e);
    }
  };

  return {
    deleteReveiws,
  };
}

export default useMyReveiws;
