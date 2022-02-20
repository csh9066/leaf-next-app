import useSWR from "swr";
import { Review } from "../../types/reviews";

function useFetchMyReviews() {
  const { data, mutate, error } = useSWR<Review[]>("/my-reviews");

  return {
    reviews: data,
    error,
    loading: !data && !error,
    mutate,
  };
}

export default useFetchMyReviews;
