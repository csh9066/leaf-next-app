import useSWR from "swr";
import { Review } from "../../types/reviews";

function useFetchProductReivews(id: number) {
  const { data, mutate, error } = useSWR<Review[]>(
    `/product-reviews?product_id=${id}`
  );

  return {
    reviews: data,
    mutate,
    error,
    loading: !data && !error,
  };
}

export default useFetchProductReivews;
