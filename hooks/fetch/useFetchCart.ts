import { useEffect, useState } from "react";
import useSWR from "swr";
import { ByBrand } from "../../types/cart";

function useFetchCart() {
  const { data: byBrands, mutate, error } = useSWR<ByBrand[]>("/cart");
  const [totAmount, setTotAmount] = useState(0);
  const [totItemCount, setTotItemCount] = useState(0);
  const [selectedItemCount, setSelectedItemCount] = useState(0);

  const getTotItemCount = (byBrands: ByBrand[]) => {
    return byBrands.reduce((p, c) => p + c.items.length, 0);
  };

  const calTotAmount = (byBrands: ByBrand[]) => {
    return byBrands.reduce(
      (a, c) =>
        a +
        c.items.reduce((a, c) => a + (c.checked ? c.price * c.count : 0), 0),
      0
    );
  };

  const getSelectedItemCount = (byBrands: ByBrand[]) => {
    return byBrands?.reduce(
      (p, c) => p + c.items.reduce((p, c) => p + (c.checked ? 1 : 0), 0),
      0
    );
  };

  useEffect(() => {
    if (byBrands) {
      setTotItemCount(getTotItemCount(byBrands));
      setTotAmount(calTotAmount(byBrands));
      setSelectedItemCount(getSelectedItemCount(byBrands));
    }
  }, [byBrands]);

  return {
    byBrands,
    totAmount,
    totItemCount,
    selectedItemCount,
    error,
    mutate,
    loading: !byBrands && !error,
  };
}

export default useFetchCart;
