import api from "./api";

export const addCartProduct = async (productId: number, quantity: number) => {
  const res = await api.post("/cart/add-product", {
    productId,
    quantity,
  });
  return res;
};
