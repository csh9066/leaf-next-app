import { ByBrand } from "../../types/cart";
import produce from "immer";
import api from "../../lib/api/api";
import useFetchCart from "../fetch/useFetchCart";
import { useRouter } from "next/router";

function useCart() {
  const { byBrands, mutate } = useFetchCart();
  const router = useRouter();

  const checkAllItem = (checked: boolean) => {
    if (byBrands) {
      mutate(
        produce<ByBrand[]>((draft) => {
          draft.forEach((b) => b.items.forEach((i) => (i.checked = checked)));
        }),
        false
      );
    }
  };

  const checkItem = (brandId: number, itemId: number, checked: boolean) => {
    if (byBrands) {
      mutate(
        produce<ByBrand[]>((draft) => {
          const brand = draft.find((b) => b.brandId === brandId);
          if (brand) {
            const item = brand.items.find((i) => i.cartItemId === itemId);
            if (item) {
              item.checked = checked;
            }
          }
        }),
        false
      );
    }
  };

  const changeItemCount = async (
    brandId: number,
    itemId: number,
    count: number
  ) => {
    try {
      await api.put(`/cart/item/${itemId}`, { count });
      mutate(
        produce<ByBrand[]>((draft) => {
          const brand = draft.find((b) => b.brandId === brandId);
          if (brand) {
            const item = brand.items.find((i) => i.cartItemId === itemId);
            if (item) {
              item.count = count;
            }
          }
        }),
        false
      );
    } catch (e) {
      alert("재고가 부족합니다");
    }
  };

  const getCheckedItemIds = () => {
    const result: number[] = [];
    byBrands?.forEach((b) => {
      b.items.forEach((i) => {
        if (i.checked) {
          result.push(i.cartItemId);
        }
      });
    });
    return result;
  };

  const onDeleteItems = async () => {
    try {
      const requests = getCheckedItemIds().map((id) =>
        api.delete(`/cart/item/${id}`)
      );
      Promise.all(requests);
      const diff = byBrands
        ?.map((b) => ({
          ...b,
          items: b.items.filter(
            (i) => !getCheckedItemIds().includes(i.cartItemId)
          ),
        }))
        .filter((b) => b.items.length !== 0);
      mutate(diff, false);
    } catch (e) {
      console.log(e);
    }
  };

  const checkout = async () => {
    try {
      await api.patch("/cart/item/check", getCheckedItemIds());
      router.push("/order/checkout");
    } catch (e) {
      console.log(e);
    }
  };

  return {
    changeItemCount,
    checkItem,
    checkAllItem,
    onDeleteItems,
    checkout,
  };
}

export default useCart;
