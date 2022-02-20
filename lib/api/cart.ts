import api from "./api";

export const addCartProduct = async (productId: number, count: number) => {
  const res = await api.post("/cart/item", {
    productId,
    count,
  });
  return res;
};
